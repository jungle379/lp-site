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
    <Box bg="pink.1" h={100} className="flex flex-col justify-center">
      <Box className="flex items-center justify-between px-4 md:px-5">
        {/* サイトタイトル（ボタン化） */}
        <Button
          variant="subtle"
          color="dark"
          size={isMobile ? "xs" : "lg"}
          mt={4}
          onClick={() => router.push("/contact")}
        >
          あむのジュエリーボックス
        </Button>
        <MenuComp />
      </Box>
    </Box>
  );
};
