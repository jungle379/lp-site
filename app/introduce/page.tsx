import Image from "next/image";
import { Box, Center, Text } from "@mantine/core";
import { TextGenerateEffectDemo } from "../components/text";
import { RouteButton } from "../components/ui/button";

export default function Introduce() {
  return (
    <>
      {/* 画像 */}
      <Center py="xl">
        <Image
          src="/portrait.jpg"
          alt="icon"
          width={250}
          height={250}
          priority
        />
      </Center>

      {/* 名前 */}
      <Text ta="center" fw={700} fz="2rem" my="md">
        あむ
      </Text>

      {/* 紹介文 */}
      <Box maw={900} mx="auto" my="xl" px="md">
        <TextGenerateEffectDemo />
      </Box>

      {/* 戻るボタン */}
      <Center my="xl">
        <RouteButton />
      </Center>
    </>
  );
}
