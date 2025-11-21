export const dynamic = "force-dynamic";

import { getList } from "../libs/client";
import Link from "next/link";
import TableUI from "./ui/table";
import { Suspense } from "react";
import Loading from "./ui/loading";
import { Box } from "@mantine/core";

export default async function ServerComponent() {
  const { contents } = await getList();

  // 今日の日付を基準にする
  const today = new Date();

  // 日付でソートして最新の5件を取得
  const latestPosts = [...contents]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 5);

  return (
    <Suspense fallback={<Loading />}>
      <Box className="md:my-40">
        <Box className="text-xl text-thin my-4 md:my-16 mx-8 md:mx-14 md:text-4xl md:font-bold">
          最新の投稿(新着順)
        </Box>

        {!contents || contents.length === 0 ? (
          <Box className="mt-4 md:mt-10 mb-10 flex justify-center font-bold text-xl">
            投稿の取得に失敗しました！
          </Box>
        ) : (
          <>
            {/* モバイル表示用 */}
            <Box className="w-full md:hidden">
              <ul>
                {latestPosts.map((post) => {
                  const publishedDate = new Date(post.publishedAt);
                  const diffDays =
                    (today.getTime() - publishedDate.getTime()) /
                    (1000 * 60 * 60 * 24);
                  const isNew = diffDays <= 7 && diffDays >= 0;

                  return (
                    <li key={post.id}>
                      <Box className="py-2 my-5 px-4 mx-8 font-bold text-base bg-gray-50 flex items-center gap-2">
                        {isNew && (
                          <span className="text-red-500 font-bold text-sm">
                            NEW
                          </span>
                        )}
                        <Link href={`news/${post.id}`}>{post.title}</Link>
                      </Box>
                    </li>
                  );
                })}
              </ul>
            </Box>

            {/* デスクトップ表示用 TableUI */}
            <Box className="my-10 mx-8 md:mx-14">
              <TableUI contents={latestPosts} />
            </Box>
          </>
        )}
      </Box>
    </Suspense>
  );
}
