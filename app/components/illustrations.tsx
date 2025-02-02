import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import { getIllustrationList } from "../libs/client";

export default async function Illustrations() {
  const { contents } = await getIllustrationList();

  if (!contents || contents.length === 0) {
    return <h1>投稿の取得に失敗しました！</h1>;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <div className="flex justify-center text-xl text-thin underline my-2 md:my-8 mx-8 md:mx-14 hover:underline text-blue-500">
          <ul>
            {contents.map((post) => {
              return (
                <li key={post.id}>
                  <div className="px-10 font-bold text-xl">
                    <Link href={`/illustrations/${post.id}`}>ほかの作品</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="w-full md:hover:underline py-5 md:hidden">
          <ul>
            {contents.map((post) => {
              return (
                <li key={post.id}>
                  <div className="py-5 my-5 px-10 font-bold text-xl bg-gray-100">
                    <Link href={`illustrations/${post.id}`}>{post.id}</Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </Suspense>
  );
}
