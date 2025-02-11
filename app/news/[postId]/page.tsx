import Head from "next/head";
import { getDetail, getList } from "../../libs/client";
import parse from "html-react-parser";
import { notFound } from "next/navigation";
import { RouteButton } from "../../components/ui/button";

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
      <div className="bg-green-50 min-h-screen">
        <div className="min-h-96">
          <div className="text-center p-5 font-bold text-4xl">{post.title}</div>
          <div className="text-end sm:text-xs md:text-2xl py-5 md:px-12">
            投稿日:{formatDate(post.createdAt)}
          </div>
          <div className="py-5 md:px-20 px-8 text-2xl">
            {parse(post.content)}
          </div>
        </div>
        <div className="flex justify-center">
          {/* Next.Routerがクライアントコンポーネントのためコンポーネント化 */}
          <RouteButton />
        </div>
      </div>
    </>
  );
}
