"use client";

import { Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import Link from "next/link";

export function MenuComp() {
  return (
    <Button
      color="Black"
      variant="transparent"
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
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
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
