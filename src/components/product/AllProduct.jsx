'use client'
import { useGetProductByNameQuery } from '@/service/postApi';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TopCatCard from './TopCatCard';

const AllProduct = () => {
    const { data:products, error, isLoading } = useGetProductByNameQuery(undefined)

    if(isLoading){
        <h2>Loading...</h2>
    }
    return (
        <div className='container mx-auto text-[#666666] my-20'>
          
            <div className=' swiper-container'>
            <Swiper
        
       
        centeredSlides={true}
        slidesPerView={6}
      
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
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
                <TopCatCard key={product._id}  product={product} />
            </SwiperSlide> )
           }
        
      </Swiper>
      
        </div>
        </div>
        
    );
};

export default AllProduct;