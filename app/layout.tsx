import "./globals.css";
import "@mantine/core/styles.css";

import type { Metadata } from "next";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

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
    <html lang="ja" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>

      <body>
        <MantineProvider>
          <ModalsProvider>
            <Header />

            <main style={{ flex: 1 }}>{children}</main>

            <Footer />
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
