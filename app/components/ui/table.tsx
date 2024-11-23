"use client";
import { Table } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Loading from "../loading";

type Post = {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
};

type TableUIProps = {
  contents: Post[];
};

// 日時を YYYYMMDD 形式にフォーマットする関数
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は 0 ベース
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}年${month}月${day}日`;
};

const TableUI: React.FC<TableUIProps> = ({ contents }) => {
  const [isMobile, setIsMobile] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleRowClick = (id: string) => {
    // 記事詳細ページに遷移
    router.push(`/news/${id}`);
  };

  const rows = contents.map((post) => (
    <Table.Tr
      key={post.id}
      style={{ cursor: "pointer" }}
      onClick={() => handleRowClick(post.id)}
    >
      <Table.Td>{post.title}</Table.Td>
      <Table.Td>{formatDate(post.createdAt)}</Table.Td>
      <Table.Td>{formatDate(post.updatedAt)}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Suspense fallback={<Loading />}>
      <div className={`m-4 ${isMobile ? "hidden" : ""}`}>
        <Table verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>タイトル</Table.Th>
              <Table.Th>投稿日</Table.Th>
              <Table.Th>更新日</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </Suspense>
  );
};
export default TableUI;
