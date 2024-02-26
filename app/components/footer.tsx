import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  const INSTA_URL = process.env.REACT_APP_INSTA;
  return (
    <>
      <div className="flex justify-center h-[100px]">
        <div className="py-5 px-5">
          <Link href={`${INSTA_URL}`}>
            <FaInstagram size={50} />
          </Link>
        </div>
      </div>
    </>
  );
};
