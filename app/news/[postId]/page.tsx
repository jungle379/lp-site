import Head from "next/head";
import { getDetail, getList } from "../../libs/client";
import parse from "html-react-parser";
import { notFound } from "next/navigation";
import Link from "next/link";

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
      <div className="bg-green-50 min-h-screen">
        <div className="min-h-96">
          <div className="text-center p-5 font-bold text-4xl">{post.title}</div>
          <div className="py-5 px-20 text-2xl">{parse(post.content)}</div>
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="p-4 font-bold text-xl border-4 border-black bg-blue-300"
          >
            ホームへ戻る
          </Link>
        </div>
      </div>
    </>
  );
}
