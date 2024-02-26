import Link from "next/link";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen bg-red-300"></main>
      <Footer />
    </>
  );
}
