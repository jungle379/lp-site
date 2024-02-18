import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div>
            <Link href="/">イメージ入れる</Link>
          </div>
        </div>
        <div>
          <div className="flex">
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
