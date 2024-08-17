import AppDownload from "@/components/home/AppDownload";
import Carosel from "@/components/home/Carosel";
import AllProduct from "@/components/product/AllProduct";
import Image from "next/image";

export default function Home() {
  return (
    <main>
     <Carosel/>
     <AllProduct/>
     <AppDownload/>
    </main>
  );
}
