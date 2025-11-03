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

  // Mantineのブレークポイントsmより小さいかどうか
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Box className="flex justify-between">
      <Button
        color="Black"
        className="md:mx-10"
        variant="transparent"
        size={isMobile ? "xs" : "lg"}
        onClick={() => router.push("../introduce")}
      >
        作者
      </Button>
      <Button
        color="Black"
        className="md:mx-10"
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
                  className="text-blue-500 text-2xl my-8"
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
    </Box>
  );
}
