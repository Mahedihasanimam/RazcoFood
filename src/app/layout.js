'use client'

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Provider } from "react-redux";
import { store } from "@/service/store";


const popins = Poppins({ weight:['400','500','600','700'],subsets: ["latin"] });


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={popins.className}>
        <Provider store={store}>
        <Navbar/>
        {children}
        <Footer/>
        </Provider>
      </body>
    </html>
  );
}
