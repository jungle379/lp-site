import type { Metadata } from "next";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import "@mantine/core/styles.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Suspense } from "react";
import Loading from "./components/ui/loading";

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
      <body className="min-h-screen">
        <MantineProvider>
          <Suspense fallback={<Loading />}>
            <Header />
            <main className="h-[450px] md:h-screen">
              <ModalsProvider>{children}</ModalsProvider>
            </main>
            <Footer />
          </Suspense>
        </MantineProvider>
      </body>
    </html>
  );
}
