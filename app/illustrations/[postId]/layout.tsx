import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "作品集",
  description: "あむのジュエリーボックス",
};
export default function IllustrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
