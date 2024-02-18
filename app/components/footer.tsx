import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="px-5">
          <Link href="/">X</Link>
        </div>
        <div className="px-5">
          <Link href="/">インスタ</Link>
        </div>
        <div className="px-5">...</div>
        <div className="px-5">...</div>
      </div>
    </>
  );
};
