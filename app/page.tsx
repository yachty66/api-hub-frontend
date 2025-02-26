import Header from "@/components/header";
import LandingPage from "@/components/landing-page";
import ApiList from "@/components/api-list";
import TalkToUs from "@/components/talk-to-us";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <LandingPage />
        <ApiList />
        <TalkToUs />
      </main>
      <Footer />
    </div>
  );
}