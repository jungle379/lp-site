"use client";
import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";

export const RouteButton = () => {
  const router = useRouter();
  return (
    <Button type="button" onClick={() => router.push("/")}>
      ホームに戻る
    </Button>
  );
};
