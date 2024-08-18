import Acordion from "@/components/home/Acordion";
import AppDownload from "@/components/home/AppDownload";
import Carosel from "@/components/home/Carosel";
import AllProduct from "@/components/product/AllProduct";
import Arival from "@/components/product/Arival";
import BestDeals from "@/components/product/BestDeals";

export default function Home() {
  
  return (
    <main>
     <Carosel/>
     <AllProduct/>
     <BestDeals/>
     <Arival/>
     <AppDownload/>
     <Acordion/>
    </main>
  );
}
