import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between h-[100px]">
        <div className="pt-2">
          <Link href="/">
            <Image src="/1.png" alt={"icon"} width={80} height={80} />
          </Link>
        </div>
        <div className="px-10 pt-5">
          <div className="flex justify-between">
            <div className="px-5">
              <Link href="/post">投稿</Link>
            </div>
            <div className="px-5">
              <Link href="/introduce">作品</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
