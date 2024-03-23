import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { getList } from "../libs/client";
import Link from "next/link";

export default async function Home() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }
  return (
    <>
      <Header />
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          {/* <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Make things float in air
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem> */}
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/1.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          {/* <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Try now →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div> */}
        </CardBody>
      </CardContainer>
      <div className="sm:w-[300px]">
        <ul>
          {contents.map((post) => {
            return (
              <li key={post.id}>
                <div className="my-5 py-5 px-5 font-bold text-xl lg:text-2xl bg-gray-100">
                  <Link href={`news/${post.id}`}>{post.title}</Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
