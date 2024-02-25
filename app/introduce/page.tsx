import Link from "next/link";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-screen bg-blue-300"></main>
      <Footer />
    </>
  );
}
