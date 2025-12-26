export const dynamic = "force-dynamic";

import { getList } from "../libs/client";
import { Box, Text, Stack, Badge, Button } from "@mantine/core";
import Link from "next/link";
import TableUI from "./ui/table";

export default async function ServerComponent() {
  const { contents } = await getList();

  const today = new Date();

  const latestPosts = [...contents]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, 5);

  return (
    <Box my={80}>
      <Text size="xl" fw={700} mb={40} mx="lg">
        最新の投稿（新着順）
      </Text>

      {!contents || contents.length === 0 ? (
        <Text ta="center" fw={700} size="lg">
          投稿の取得に失敗しました！
        </Text>
      ) : (
        <>
          {/* モバイル */}
          <Box hiddenFrom="md">
            <Stack gap="md" mx="lg">
              {latestPosts.map((post) => {
                const diffDays =
                  (today.getTime() - new Date(post.publishedAt).getTime()) /
                  (1000 * 60 * 60 * 24);

                const isNew = diffDays <= 7 && diffDays >= 0;

                return (
                  <Box key={post.id} p="md" bg="gray.0">
                    <Stack gap={6}>
                      {isNew && (
                        <Badge color="red" w="fit-content">
                          NEW
                        </Badge>
                      )}

                      <Link href={`/news/${post.id}`}>
                        <Button
                          variant="subtle"
                          fullWidth
                          justify="space-between"
                        >
                          {post.title}
                        </Button>
                      </Link>
                    </Stack>
                  </Box>
                );
              })}
            </Stack>
          </Box>
          {/* デスクトップ */}
          <Box mt={40} mx="lg">
            <TableUI contents={latestPosts} />
          </Box>
        </>
      )}
    </Box>
  );
}
