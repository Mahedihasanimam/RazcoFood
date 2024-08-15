import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import image1 from "../../../public/images/Img (1).png";
import image2 from "../../../public/images/bannerimg2.png";
import banner1 from "../../../public/images/Group 290675 (1).png";
import banner2 from "../../../public/images/banner2.png";
import banner3 from "../../../public/images/banner3.png";

const Carosel = () => {
  return (
    <Carousel className="container mx-auto my-4" autoplay>
      <div className="bg-gradient-to-r from-[#F2BD1F] to-[#EA2F59] relative ">
        <div className="">
          <div className="">
            <Image className="w-full h-full rounded-xl " src={banner1} />

          </div>
          <div className="absolute z-40 top-1/3 ml-[10%] text-white space-y-4">
            <p className="text-2xl tracking-widest">Best Deal on icy delights</p>
            <h3 className="text-8xl font-bold">BEAT</h3>
            <h1 className="text-8xl font-bold"> THE HEAT</h1>
            <p className="text-2xl">
              UP to <span className="font-bold">50% OFF</span>
            </p>
          </div>

        </div>
      </div>
      <div className="bg-gradient-to-r from-[#F2BD1F] to-[#EA2F59] relative ">
        <div className="">
          <div className="">
            <Image className="w-full h-full rounded-xl " src={banner2} />

          </div>
          <div className="absolute z-40 top-1/3 ml-[10%] text-white space-y-4">
            <p className="text-2xl tracking-widest">Best Deal on icy delights</p>
            <h3 className="text-8xl font-bold">BEAT</h3>
            <h1 className="text-8xl font-bold"> THE HEAT</h1>
            <p className="text-2xl">
              UP to <span className="font-bold">50% OFF</span>
            </p>
          </div>

        </div>
      </div>
      <div className="bg-gradient-to-r from-[#F2BD1F] to-[#EA2F59] relative ">
        <div className="">
          <div className="">
            <Image className="w-full h-full rounded-xl " src={banner3} />

          </div>
          <div className="absolute z-40 top-1/3 ml-[10%] text-white space-y-4">
            <p className="text-2xl tracking-widest">Best Deal on icy delights</p>
            <h3 className="text-8xl font-bold">BEAT</h3>
            <h1 className="text-8xl font-bold"> THE HEAT</h1>
            <p className="text-2xl">
              UP to <span className="font-bold">50% OFF</span>
            </p>
          </div>

        </div>
      </div>
    </Carousel>
  );
};

export default Carosel;
