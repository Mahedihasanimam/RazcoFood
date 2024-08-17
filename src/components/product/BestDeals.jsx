'use client'
import { useGetProductByNameQuery } from '@/service/postApi';
import React from 'react';
import SingleCard from './SingleCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import CommonHeader from '../common/CommonHeader';

const BestDeals = () => {
    const { data:products, error, isLoading } = useGetProductByNameQuery(undefined)
    console.log(products?.data);
    if(isLoading){
        <h2>Loading...</h2>
    }
    return (
        <div className='container mx-auto text-[#666666] my-12'>
            <CommonHeader title1={'Shop From'} title2={'Best Deals'} mylink={'#'}/>
           
            <div className=' swiper-container'>
            <Swiper
        
       
        centeredSlides={true}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 4,
            },
            // when window width is >= 1280px
            1280: {
                slidesPerView: 4,
            },
            // when window width is >= 1536px
            1536: {
                slidesPerView: 4,
            },
        }}
      >
        
       
           {
            products?.data.map(product =><SwiperSlide>
                <SingleCard key={product._id}  product={product} />
            </SwiperSlide> )
           }
        
      </Swiper>
      
        </div>
        </div>
        
    );
};

export default BestDeals;