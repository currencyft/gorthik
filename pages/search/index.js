import Image from "next/image";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Subtitle from "@/components/Subtitle";
import ImageCards from "@/components/ImageCards";
import CardLists from "@/components/CardLists";
import Sublinks from "@/components/Sublinks";
import MiniSubtitle from "@/components/MiniSubtitle";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" mx-5">

      <Subtitle />
      <Sublinks />

      <MiniSubtitle title="Tours and Tickets by Walks of Dubai ( Mohamed Mawla Tourism LLC)" />
      <CardLists />
    </main>
  );
}
