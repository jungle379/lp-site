import { Suspense } from "react";
import ServerComponent from "./components/server";
import Loading from "./components/ui/loading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        {/* <ClientComponent /> */}
        {/* <Illustrations /> */}
        <ServerComponent />
      </Suspense>
    </>
  );
}
