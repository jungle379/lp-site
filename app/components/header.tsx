"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { MenuComp } from "./menu";
import Loading from "../loading";

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
      <Suspense fallback={<Loading />}>
        <div className="flex bg-pink-100 justify-between h-[100px]">
          <div className="pt-2 flex">
            <div
              className={`pt-6 px-5 text-xl font-bold text-pink-400 ${isMobile ? "hidden" : ""}`}
            >
              <Link href="/">あむのジュエリーボックス</Link>
            </div>
            <div
              className={`pt-10 pl-2 font-bold text-xs ${isMobile ? "" : "hidden"}`}
            >
              <Link href="/">あむのジュエリーボックス</Link>
            </div>
          </div>
          <div className="px-4 pt-6 h-[100px]">
            <div className="flex justify-between">
              {usePathname() != "/introduce" ? (
                <>
                  <div
                    className={`px-5 pt-3 text-xl font-bold hover:underline ${isMobile ? "hidden" : ""}`}
                  >
                    <Link href="/introduce">作者</Link>
                  </div>
                  <div
                    className={`pl-4 pt-6 text-xs font-semibold ${isMobile ? "" : "hidden"}`}
                  >
                    <Link href="/introduce">作者</Link>
                  </div>
                </>
              ) : (
                <></>
              )}
              <MenuComp />
            </div>
          </div>
        </div>
      </Suspense>
    </>
  );
};
