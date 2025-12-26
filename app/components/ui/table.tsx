"use client";

import { Table, Box } from "@mantine/core";
import { useRouter } from "next/navigation";
import { TableUIProps } from "@/app/types/type";
import { formatDate } from "@/utils/formatDate";

const TableUI: React.FC<TableUIProps> = ({ contents }) => {
  const router = useRouter();

  const rows = contents.map((post) => (
    <Table.Tr
      key={post.id}
      onClick={() => router.push(`/news/${post.id}`)}
      style={{ cursor: "pointer" }}
    >
      <Table.Td>{post.title}</Table.Td>
      <Table.Td>{formatDate(post.createdAt)}</Table.Td>
      <Table.Td>{formatDate(post.updatedAt)}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Box my="xl" mx="xl" visibleFrom="md">
      <Table verticalSpacing="md" highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>タイトル</Table.Th>
            <Table.Th>投稿日</Table.Th>
            <Table.Th>更新日</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Box>
  );
};

export default TableUI;
