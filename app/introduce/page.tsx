import { Header } from "../components/header";
import { Footer } from "../components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen bg-green-300">
        <div className="flex justify-center items-center text-center py-20 px-20">
          <Image src="/2.png" alt={"icon"} width={180} height={180} />
        </div>
      </main>
      <Footer />
    </>
  );
}
