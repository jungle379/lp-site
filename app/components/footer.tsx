import Link from "next/link";

export const Footer = () => {
  const INSTA_URL = process.env.LOCAL_INSTA;
  return (
    <>
      <div className="flex justify-center">
        <div className="px-5">
          <Link href="/">X</Link>
        </div>
        <div className="px-5">
          <Link href={`${INSTA_URL}`}>インスタ</Link>
        </div>
        <div className="px-5">...</div>
        <div className="px-5">...</div>
      </div>
    </>
  );
};
