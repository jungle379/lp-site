"use client";

import { Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MenuComp() {
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
    <Button
      color="Black"
      variant="transparent"
      className={`size="lg" ${isMobile ? "hidden" : ""}`}
      onClick={() => {
        modals.open({
          title: "お仕事のご依頼について",
          children: (
            <>
              <Text pt="sm" pb="sm">
                お仕事のご依頼については、現在インスタのDMでお受けしています!
              </Text>
              <Link
                className="text-blue-500"
                href="https://www.instagram.com/amu6ame6/"
              >
                インスタへ
              </Link>
              <Button
                fullWidth
                variant="filled"
                onClick={() => modals.closeAll()}
                mt="md"
              >
                閉じる
              </Button>
            </>
          ),
        });
      }}
    >
      お仕事のご依頼
    </Button>
  );
}
