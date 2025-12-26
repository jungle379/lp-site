import { getDetail, getList } from "../../libs/client";
import parse from "html-react-parser";
import { notFound } from "next/navigation";
import { RouteButton } from "../../components/ui/button";
import { Box } from "@mantine/core";

export async function generateStaticParams() {
  const { contents } = await getList();
  return contents.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await getDetail(postId);
  if (!post) return {};
  return { title: post.title };
}

export default async function StaticDetailPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const { postId } = await params;
  const post = await getDetail(postId);

  if (!post) notFound();

  const formattedDate = new Date(post.updatedAt).toLocaleDateString("ja-JP");

  return (
    <Box bg="green.0">
      <Box mih={460}>
        <Box ta="center" p="md" fw={700} fz="xl">
          {post.title}
        </Box>

        <Box ta="right" py="md" px="xl">
          投稿日：{formattedDate}
        </Box>

        <Box py="md" px="xl">
          {parse(String(post.content))}
        </Box>
        <Box py="sm" ta="center">
          <RouteButton />
        </Box>
      </Box>
    </Box>
  );
}
