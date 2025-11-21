import Link from "next/link";
import { Suspense } from "react";
import Loading from "./ui/loading";
import { getIllustrationList } from "../libs/client";
import { Box } from "@mantine/core";

export default async function Illustrations() {
  const { contents } = await getIllustrationList();

  return (
    <Suspense fallback={<Loading />}>
      <Box>
        {!contents || contents.length === 0 ? (
          <Box className="mt-6 mb-10 flex justify-center font-bold text-sm md:text-xl">
            現在、他のイラストの投稿はありません
          </Box>
        ) : (
          <Box className="flex justify-center text-xl text-thin underline my-2 md:my-8 mx-8 md:mx-14 hover:underline text-blue-500">
            <ul>
              {contents.map((post) => {
                return (
                  <li key={post.id}>
                    <Box className="m-6 font-bold text-xl">
                      <Link href={`illustrations/${post.id}`}>ほかの作品</Link>
                    </Box>
                  </li>
                );
              })}
            </ul>
          </Box>
        )}
      </Box>
    </Suspense>
  );
}
