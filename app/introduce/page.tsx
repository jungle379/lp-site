import Image from "next/image";
import { TextGenerateEffectDemo } from "../components/text";

export default function Home() {
  return (
    <>
      <main className="h-screen bg-green-300">
        <div className="flex justify-center items-center text-center pt-20 pb-5 px-20">
          <Image src="/2.png" alt={"icon"} width={180} height={180} />
        </div>
        <div className="flex justify-center text-lg items-center font-bold text-center py-5 px-20">
          あむ
        </div>
        <div className="px-4">
          <TextGenerateEffectDemo />
        </div>
      </main>
    </>
  );
}
