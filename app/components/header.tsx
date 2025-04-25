"use client";
import Link from "next/link";
import { MenuComp } from "./menu";

export const Header = () => {
  return (
    <>
      <div className="bg-pink-100 h-[100px]">
        <div className="flex items-center justify-between pt-9 md:pt-6 pl-4 md:px-5 text-xs md:text-xl font-bold">
          <Link href="/">あむのジュエリーボックス</Link>
          <MenuComp />
        </div>
      </div>
    </>
  );
};
