"use client";
import { Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MenuComp() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={isMobile ? "pt-3" : ""}>
      <Button
        color="Black"
        variant="transparent"
        size={isMobile ? "xs" : "lg"}
        onClick={() => {
          modals.open({
            title: "お仕事のご依頼について",
            children: (
              <>
                <Text pt="sm" pb="sm">
                  お仕事のご依頼については、現在インスタのDMでお受けしています!
                </Text>
                <Link
                  className="text-blue-500 text-2xl flex justify-center"
                  href="https://www.instagram.com/amu6ame6/"
                >
                  インスタへ
                </Link>
                <Button
                  fullWidth
                  className="bg-blue-400"
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
    </div>
  );
}
