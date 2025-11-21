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
  const INSTA_URL = process.env.REACT_APP_INSTA;

  // Mantineのブレークポイントsmより小さいかどうか
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Box className="flex items-start gap-4 md:gap-10">
      {/* 作者ボタン */}
      <Button
        color="Black"
        variant="transparent"
        size={isMobile ? "xs" : "lg"}
        onClick={() => router.push("../introduce")}
      >
        作者
      </Button>

      {/* お仕事のご依頼 & お問い合わせ（縦並び） */}
      <Box className="flex flex-col items-center">
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
                    お仕事のご依頼については、現在インスタのDMでお受けしています！
                  </Text>
                  <Link
                    className="text-blue-500 text-2xl my-8"
                    href={`${INSTA_URL}`}
                    rel="noopener noreferrer"
                    target="_blank"
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

        {/* お問い合わせリンク（お仕事のご依頼の下） */}
        <Link
          href="/contact"
          className={`mt-1 font-bold text-black no-underline ${
            isMobile ? "text-sm" : "text-lg"
          }`}
        >
          お問い合わせ
        </Link>
      </Box>
    </Box>
  );
}
