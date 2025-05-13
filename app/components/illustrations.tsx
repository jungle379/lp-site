import Link from "next/link";
import { Suspense } from "react";
import Loading from "./ui/loading";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Grid } from "@mantine/core";
import { getIllustrationList } from "../libs/client";

export default async function Illustrations() {
  const { contents } = await getIllustrationList();
  // 日付でソートして最新の5件を取得
  const latestPosts = [...contents]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 1);
  // const handleContextMenu = (evt: any) => {
  //   evt.preventDefault();
  // };

  return (
    <Suspense fallback={<Loading />}>
      <div>
        {!contents || contents.length === 0 ? (
          <div className="mt-6 mb-10 flex justify-center font-bold text-sm md:text-xl">
            現在、他のイラストの投稿はありません
          </div>
        ) : (
          <>
            <div>
              <div className="text-xl text-thin mt-4 md:my-8 mx-8 md:mx-14 md:text-4xl md:font-bold">
                作品
              </div>
              {latestPosts.map((post) => (
                <Grid grow gutter="xs">
                  <Grid.Col span={4}>
                    <CardContainer className="inter-var">
                      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border mx-12">
                        <CardItem translateZ="100" className="w-full">
                          <img
                            key={post.id}
                            height="1000"
                            width="1000"
                            className="md:h-120 md:w-90 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                          />
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </Grid.Col>
                </Grid>
              ))}
            </div>
            <div className="flex justify-center text-xl text-thin underline my-2 md:my-8 mx-8 md:mx-14 hover:underline text-blue-500">
              <ul>
                {contents.map((post) => {
                  return (
                    <li key={post.id}>
                      <div className="m-6 font-bold text-xl">
                        <Link href={`/illustrations/${post.id}`}>
                          ほかの作品
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </Suspense>
  );
}
