import Link from "next/link";
import { ClientComponent } from "./components/client";
import { ServerComponent } from "./components/server";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen">
        <ClientComponent />
        <ServerComponent />
      </main>
      <Footer />
    </>
  );
}
