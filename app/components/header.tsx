"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuComp } from "./menu";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(true);

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
      <div className="bg-pink-100 h-[100px]">
        <div>
          <div
            className={`flex items-center justify-between pt-6 px-5 text-xl font-bold ${isMobile ? "hidden" : ""}`}
          >
            <Link href="/">あむのジュエリーボックス</Link>
            <MenuComp />
          </div>
          <div
            className={`items-center justify-between flex pt-9 pl-4 font-bold text-xs ${isMobile ? "" : "hidden"}`}
          >
            <Link href="/">あむのジュエリーボックス</Link>
            <MenuComp />
          </div>
        </div>
      </div>
    </>
  );
};
