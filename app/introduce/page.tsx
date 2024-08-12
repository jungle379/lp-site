import Image from "next/image";
import { TextGenerateEffectDemo } from "../components/text";

export default function Introduce() {
  return (
    <>
      <div className="flex justify-center items-center text-center py-10 px-20">
        <Image src="/2.jpg" alt={"icon"} width={250} height={250} />
      </div>
      <div className="flex justify-center text-xl items-center font-bold text-center py-5 px-20">
        あむ
      </div>
      <div className="px-4 py-5">
        <TextGenerateEffectDemo />
      </div>
    </>
  );
}
