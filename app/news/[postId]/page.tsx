import Head from "next/head";
import { getDetail, getList } from "../../libs/client";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

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
      <div className="bg-pink-100 min-h-screen h-auto">
        <div className="mb-5 font-bold text-xl">{post.title}</div>
        <div>{parse(post.content)}</div>
      </div>
    </>
  );
}
