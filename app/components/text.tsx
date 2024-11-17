"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `あむです。イラストレーターをしています。これまで描いた作品や参加するイベントについて載せていきます。`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
