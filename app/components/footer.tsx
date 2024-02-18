import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <Link href="/">//</Link>
        </div>
        <div>
          <div className="flex ">
            <div>
              <Link href="/post">問い合わせ</Link>
            </div>
            <div>...</div>
            <div>...</div>
          </div>
        </div>
      </div>
    </>
  );
};
