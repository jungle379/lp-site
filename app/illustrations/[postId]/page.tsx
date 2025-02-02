import Link from "next/link";
import { getIllustrationList } from "../../libs/client";
import { RouteButton } from "../../components/ui/button";

export default async function Illustrations() {
  const { contents } = await getIllustrationList();

  if (!contents || contents.length === 0) {
    return <h1>投稿の取得に失敗しました！</h1>;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-center text-2xl font-bold my-6">作品一覧</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contents.map((post) => (
            <li
              key={post.id}
              className="border rounded-lg shadow-md p-4 bg-white"
            >
              {/* <Link href={`/illustration/${post.id}`} className="block"> */}
              {/* 画像表示 */}
              <img
                src={post.title.url}
                alt={`作品 ${post.id}`}
                className="w-full h-auto object-cover rounded-md"
              />
              {/* <p className="text-center text-blue-500 hover:underline mt-2"> */}
              {/* 作品を見る */}
              {/* </p> */}
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        {/* Next.Routerがクライアントのためコンポーネント化 */}
        <RouteButton />
      </div>
    </>
  );
}
