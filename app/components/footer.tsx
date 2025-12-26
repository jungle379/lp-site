import { Box } from "@mantine/core";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  const INSTA_URL = process.env.NEXT_PUBLIC_INSTA;

  return (
    <Box bg="blue.2" h={100} className="flex justify-center items-center">
      <Link href={INSTA_URL ?? "#"} rel="noopener noreferrer" target="_blank">
        <FaInstagram size={50} />
      </Link>
    </Box>
  );
};
