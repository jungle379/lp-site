import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "あむのジュエリーボックス",
};
export default function IllustrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
