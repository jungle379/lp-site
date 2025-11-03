"use client";
import Link from "next/link";
import { MenuComp } from "./menu";
import { Box } from "@mantine/core";

export const Header = () => {
  return (
    <Box className="bg-pink-100 h-[100px]">
      <Box className="flex items-center justify-between pt-9 md:pt-6 pl-4 md:px-5 text-xs md:text-xl font-bold">
        <Link className="md:mx-10" href="/">
          あむのジュエリーボックス
        </Link>
        <MenuComp />
      </Box>
      <Box className="justify-end mx-4 my-2 flex text-xs md:text-xl font-bold">
        <Link href="/contact">お問い合わせ</Link>
      </Box>
    </Box>
  );
};
