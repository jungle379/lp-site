"use client";

import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `あむです。イラストレーターをしています。これまで描いた作品や参加するイベントについて載せていきます。`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月は 0 ベース
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}年${month}月${day}日`;
};
