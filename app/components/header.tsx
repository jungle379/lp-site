"use client";

import { Box, Button, useMantineTheme } from "@mantine/core";
import { useRouter } from "next/navigation";
import { MenuComp } from "./menu";
import { useMediaQuery } from "@mantine/hooks";

export const Header = () => {
  const router = useRouter();
  const theme = useMantineTheme();

  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Box bg="pink.1" h={isMobile ? 64 : 80} className="flex items-center">
      <Box className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 md:px-6">
        {/* サイトタイトル（ボタン化） */}
        <Button
          variant="subtle"
          color="dark"
          size={isMobile ? "xs" : "lg"}
          onClick={() => router.push("/")}
        >
          あむのジュエリーボックス
        </Button>
        <MenuComp />
      </Box>
    </Box>
  );
};
