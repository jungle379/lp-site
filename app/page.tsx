import { Suspense } from "react";
import { ClientComponent } from "./components/client";
import ServerComponent from "./components/server";
import Loading from "./components/loading";
import Illustrations from "./components/illustrations";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <ClientComponent />
        <Illustrations />
        <ServerComponent />
      </Suspense>
    </>
  );
}
