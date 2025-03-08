import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "作者について",
  description: "あむのジュエリーボックス",
};
export default function IntroduceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
