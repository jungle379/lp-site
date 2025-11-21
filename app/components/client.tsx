"use client";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Suspense } from "react";
import Loading from "./ui/loading";
import { Box, Grid } from "@mantine/core";

export const ClientComponent = () => {
  const handleContextMenu = (evt: any) => {
    evt.preventDefault();
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Box onContextMenu={handleContextMenu}>
          <Box className="text-xl text-thin mt-4 md:my-8 mx-8 md:mx-14 md:text-4xl md:font-bold">
            作品
          </Box>
          <Grid grow gutter="xs">
            <Grid.Col span={4}>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border mx-12">
                  <CardItem translateZ="100" className="w-full">
                    <img
                      src="/cat.jpg"
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
        </Box>
      </Suspense>
    </>
  );
};
