import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import "@mantine/core/styles.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "あむのジュエリーボックス",
  description: "あむのジュエリーボックス",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="min-h-screen flex flex-col">
        <MantineProvider>
          <Header />
          <main className="flex-1">
            <ModalsProvider>{children}</ModalsProvider>
          </main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
