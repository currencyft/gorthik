import Image from "next/image";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Subtitle from "@/components/Subtitle";
import ImageCards from "@/components/ImageCards";
import CardLists from "@/components/CardLists";
import Sublinks from "@/components/Sublinks";
import MiniSubtitle from "@/components/MiniSubtitle";
import Breadcrumb from "@/components/Breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className=" mx-5">
      <Breadcrumb />
      <Subtitle />
      <Sublinks />
      <ImageCards />
      <MiniSubtitle title="Tours and Tickets by Walks of Dubai ( Mohamed Mawla Tourism LLC)" />
      <CardLists />
    </main>
  );
}
