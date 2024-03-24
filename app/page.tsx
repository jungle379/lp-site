import { ClientComponent } from "./components/client";
import { ServerComponent } from "./components/server";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-blue-100">
        <ClientComponent />
        <ServerComponent />
      </main>
      <Footer />
    </>
  );
}
