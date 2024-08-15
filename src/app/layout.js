import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const popins = Poppins({ weight:['400','500','600','700'],subsets: ["latin"] });

export const metadata = {
  title: "Razco Food",
  description: "rajco food provide varient type of food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
