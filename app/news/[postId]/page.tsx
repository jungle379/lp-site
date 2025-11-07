import Head from "next/head";
import { getDetail, getList } from "../../libs/client";
import parse from "html-react-parser";
import { notFound } from "next/navigation";
import { RouteButton } from "../../components/ui/button";
import { Box } from "@mantine/core";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は 0 ベース
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}年${month}月${day}日`;
};

export async function generateStaticParams() {
  const { contents } = await getList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });
  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);
  if (!post) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Box className="bg-green-50">
        <Box className="min-h-96">
          <Box className="text-center p-5 font-bold text-2xl">{post.title}</Box>
          <Box className="text-end sm:text-xs md:text-xl py-5 px-2 md:px-36">
            投稿日:{formatDate(post.updatedAt)}
          </Box>
          <Box className="py-5 md:px-10 px-4 text-xl md:flex md:justify-center">
            {parse(post.content)}
          </Box>
        </Box>
        <Box className="flex justify-center">
          {/* Next.Routerがクライアントコンポーネントのためコンポーネント化 */}
          <RouteButton />
        </Box>
      </Box>
    </>
  );
}
