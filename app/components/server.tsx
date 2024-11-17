import { getList } from "../libs/client";
import Link from "next/link";

export default async function ServerComponent() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>投稿の取得に失敗しました！</h1>;
  }
  return (
    <div>
      <div className="text-xl text-thin px-4 py-4">最新の投稿</div>
      <div className="w-full md:hover:underline py-5">
        <ul>
          {contents.map((post) => {
            return (
              <li key={post.id}>
                <div className="py-5 my-5 px-10 font-bold text-xl bg-gray-100">
                  <Link href={`news/${post.id}`}>{post.title}</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
