"use client";
import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";
import { PostButtonProps } from "@/app/types/type";

export const RouteButton = () => {
  const router = useRouter();
  return (
    <Button
      className="my-6 bg-blue-500"
      variant="filled"
      onClick={() => router.push("/")}
    >
      トップへ戻る
    </Button>
  );
};

export const PostButton = ({ post }: PostButtonProps) => {
  const router = useRouter();
  return (
    <Button
      fullWidth
      variant="subtle"
      // color="dark"
      justify="flex-start"
      onClick={() => router.push(`/news/${post.id}`)}
    >
      {post.title}
    </Button>
  );
};
