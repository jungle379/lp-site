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

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <div className="text-xl text-thin my-2 md:my-8 mx-8 md:mx-14">
          最新の投稿
        </div>
        <div className="w-full md:hover:underline md:hidden">
          <ul>
            {contents.map((post) => {
              return (
                <li key={post.id}>
                  <div className="py-2 my-5 px-4 mx-8 font-bold text-xl bg-gray-100">
                    <Link href={`news/${post.id}`}>{post.title}</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <TableUI contents={contents} />
      </div>
    </Suspense>
  );
}
