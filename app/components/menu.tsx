"use client";

import { Box, Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";

export function MenuComp() {
  const router = useRouter();
  const theme = useMantineTheme();
  const INSTA_URL = process.env.NEXT_PUBLIC_INSTA;

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Box className="flex items-start gap-4 md:gap-10">
      {/* 作者 */}
      <Button
        variant="subtle"
        color="dark"
        size={isMobile ? "xs" : "lg"}
        onClick={() => router.push("/introduce")}
      >
        作者
      </Button>

      {/* お仕事・お問い合わせ */}
      <Box className="flex flex-col items-center">
        {/* お仕事のご依頼 */}
        <Button
          variant="subtle"
          color="dark"
          size={isMobile ? "xs" : "lg"}
          onClick={() => {
            modals.open({
              title: "お仕事のご依頼について",
              children: (
                <>
                  <Text mt="sm" mb="sm">
                    お仕事のご依頼については、現在インスタのDMでお受けしています！
                  </Text>

                  <Link
                    href={INSTA_URL ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-xl my-6"
                  >
                    インスタへ
                  </Link>

                  <Button
                    fullWidth
                    mt="md"
                    color="blue"
                    onClick={() => modals.closeAll()}
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

        {/* ✅ お問い合わせ（ボタン化） */}
        <Button
          variant="subtle"
          color="dark"
          size={isMobile ? "xs" : "lg"}
          mt={4}
          onClick={() => router.push("/contact")}
        >
          お問い合わせ
        </Button>
      </Box>
    </Box>
  );
}
