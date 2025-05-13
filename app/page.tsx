import { Suspense } from "react";
import { ClientComponent } from "./components/client";
import ServerComponent from "./components/server";
import Loading from "./components/ui/loading";
import Illustrations from "./components/illustrations";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Illustrations />
        <ServerComponent />
      </Suspense>
    </>
  );
}
