import { ClientComponent } from "./components/client";
import { ServerComponent } from "./components/server";

export default function Home() {
  return (
    <>
      <main className="h-screen">
        <ClientComponent />
        <ServerComponent />
      </main>
    </>
  );
}
