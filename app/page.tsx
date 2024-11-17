import { Suspense } from "react";
import { ClientComponent } from "./components/client";
import ServerComponent from "./components/server";
import Loading from "./components/loading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ClientComponent />
        <ServerComponent />
      </Suspense>
    </>
  );
}
