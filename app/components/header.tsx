import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="flex justify-between h-[200px]">
        <div className="pt-5">
          <div>
            <Link href="/">イメージ入れる</Link>
          </div>
        </div>
        <div className="px-10 pt-5">
          <div className="flex justify-between">
            <div>
              <Link href="/post">投稿</Link>
            </div>
            <div>...</div>
            <div>...</div>
          </div>
        </div>
      </div>
    </>
  );
};
