"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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
      <div className="flex justify-between h-[100px]">
        <div className="pt-2">
          <Link href="/">
            <Image src="/1.png" alt={"icon"} width={80} height={80} />
          </Link>
        </div>
        <div className="px-10 pt-10">
          <div className="flex justify-between">
            <div className="px-5">
              <Link href="/post">投稿</Link>
            </div>
            <div className="px-5">
              <Link href="/introduce">作品</Link>
            </div>
            <div className={`px-5 ${isMobile ? "hidden" : ""}`}>
              <Link href="/">お仕事のご依頼はこちらから</Link>
            </div>
            <div className={`px-5 ${isMobile ? "" : "hidden"}`}>
              <Link href="/">お仕事のご依頼</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
