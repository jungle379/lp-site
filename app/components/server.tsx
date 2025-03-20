import { getList } from "../libs/client";
import Link from "next/link";
import TableUI from "./ui/table";
import { Suspense } from "react";
import Loading from "./ui/loading";

export default async function ServerComponent() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>投稿の取得に失敗しました！</h1>;
  }

  // 日付でソートして最新の5件を取得
  const latestPosts = [...contents]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 5);

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <div className="text-xl text-thin my-2 md:my-8 mx-8 md:mx-14">
          最新の投稿
        </div>
        <div className="w-full md:hover:underline md:hidden">
          <ul>
            {latestPosts.map((post) => (
              <li key={post.id}>
                <div className="py-2 my-5 px-4 mx-8 font-bold text-xl bg-gray-100">
                  <Link href={`news/${post.id}`}>{post.title}</Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-10 mx-8 md:mx-14">
          <TableUI contents={latestPosts} />
        </div>
      </div>
    </Suspense>
  );
}
