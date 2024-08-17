'use client'
import { useGetProductByNameQuery } from '@/service/postApi';
import React from 'react';
import SingleCard from './SingleCard';

const AllProduct = () => {
    const { data:products, error, isLoading } = useGetProductByNameQuery(undefined)
    console.log(products?.data);
    if(isLoading){
        <h2>Loading...</h2>
    }
    return (
        <div className='grid lg:grid-cols-4 gap-4 container mx-auto my-12'>
           {
            products?.data.map(product => <SingleCard key={product._id}  product={product} />)
           }
        </div>
    );
};

export default AllProduct;