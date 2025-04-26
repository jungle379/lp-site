import Link from "next/link";
import { Suspense } from "react";
import Loading from "./ui/loading";
import { getIllustrationList } from "../libs/client";

export default async function Illustrations() {
  const { contents } = await getIllustrationList();

  return (
    <Suspense fallback={<Loading />}>
      <div>
        {!contents || contents.length === 0 ? (
          <div className="mt-4 mb-10 flex justify-center font-bold text-xl">
            投稿の取得に失敗しました！
          </div>
        ) : (
          <div className="flex justify-center text-xl text-thin underline my-2 md:my-8 mx-8 md:mx-14 hover:underline text-blue-500">
            <ul>
              {contents.map((post) => {
                return (
                  <li key={post.id}>
                    <div className="m-6 font-bold text-xl">
                      <Link href={`/illustrations/${post.id}`}>ほかの作品</Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </Suspense>
  );
}
