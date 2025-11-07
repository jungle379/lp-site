"use client";
import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";

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
