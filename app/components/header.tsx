"use client";
import Link from "next/link";
import { MenuComp } from "./menu";
import { Box } from "@mantine/core";

export const Header = () => {
  return (
    <Box className="bg-pink-100 h-[100px] flex flex-col justify-center">
      <Box className="flex items-center justify-between px-4 md:px-5 text-xs md:text-xl font-bold">
        <Link className="md:mx-10" href="/">
          あむのジュエリーボックス
        </Link>
        <MenuComp />
      </Box>
    </Box>
  );
};
