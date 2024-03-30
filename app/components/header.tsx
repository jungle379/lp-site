"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuComp } from "./menu";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // 初期化時に1度実行
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="flex bg-pink-100 justify-between h-[100px]">
        <div className="pt-2 flex">
          <div className={`${isMobile ? "hidden" : ""}`}>
            <Link href="/">
              <Image src="/1.png" alt={"icon"} width={80} height={80} />
            </Link>
          </div>
          <div
            className={`pt-5 px-5 text-4xl font-bold text-pink-400 ${isMobile ? "hidden" : ""}`}
          >
            あむのジュエリーボックス
          </div>
          <div
            className={`pt-10 pl-2 font-bold text-sm ${isMobile ? "" : "hidden"}`}
          >
            <Link href="/">あむのジュエリーボックス</Link>
          </div>
        </div>
        <div className="px-5 pt-10">
          <div className="flex justify-between">
            {usePathname() !== "/post" ? (
              <div className="px-2 pt-2 text-sm font-semibold">
                <Link href="/post">投稿</Link>
              </div>
            ) : (
              <div></div>
            )}
            {usePathname() !== "/introduce" ? (
              <div className="px-4 pt-2 text-sm font-semibold">
                <Link href="/introduce">作者</Link>
              </div>
            ) : (
              <div></div>
            )}
            <MenuComp />
          </div>
        </div>
      </div>
    </>
  );
};
