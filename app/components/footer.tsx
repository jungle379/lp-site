import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  const INSTA_URL = process.env.REACT_APP_INSTA;
  return (
    <>
      <div className="flex justify-center h-[100px] bg-blue-200 align-middle">
        <div className="py-5 px-5">
          <Link href={`${INSTA_URL}`} rel="noopener noreferrer" target="_blank">
            <FaInstagram size={50} />
          </Link>
        </div>
      </div>
    </>
  );
};
