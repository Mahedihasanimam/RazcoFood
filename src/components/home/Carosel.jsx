import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import banner1 from "../../../public/images/banner1.png"
import banner2 from "../../../public/images/banner2.png"
import banner3 from "../../../public/images/banner3.png"
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Carosel = () => {
    return (
        <Carousel className='container mx-auto my-4' autoplay>
        <div>
          
          <div>
            <Image className='w-full' src={banner1} />
          </div>
        </div>
        <div>
         
        <div>
            <Image className='w-full' src={banner2} />
          </div>
        </div>
        <div>
         
        <div>
            <Image className='w-full' src={banner3} />
          </div>
        </div>
      </Carousel>
    );
};

export default Carosel;