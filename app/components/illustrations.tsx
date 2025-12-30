import Link from "next/link";
import { Suspense } from "react";
import Loading from "./ui/loading";
import { getIllustrationList } from "../libs/client";
import { Box, Stack, Button, Text } from "@mantine/core";

export default async function Illustrations() {
  const { contents } = await getIllustrationList();

  return (
    <Suspense fallback={<Loading />}>
      <Box mt="md">
        {!contents || contents.length === 0 ? (
          <Text ta="center" fw={700} size="sm" mt="md" mb="xl">
            現在、他のイラストの投稿はありません
          </Text>
        ) : (
          <Stack gap="md" align="center" mt="md">
            {contents.map((post) => (
              <Button
                key={post.id}
                component={Link}
                href={`/illustrations/${post.id}`}
                variant="subtle"
                size="md"
                w={240}
              >
                ほかの作品
              </Button>
            ))}
          </Stack>
        )}
      </Box>
    </Suspense>
  );
}
