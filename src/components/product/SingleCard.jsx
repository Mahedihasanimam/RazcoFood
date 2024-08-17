import Image from 'next/image';
import React from 'react';
import image1 from "../../../public/images/chocklet1.png"
import { ShoppingCartOutlined } from '@ant-design/icons';
const SingleCard = ({product}) => {
    const {productImage,productName,price}=product

    return (
        <div className='bg-[#F4F5F7] p-4 rounded-md  space-y-4'>
            <div className='bg-[#EFEEF6] p-4 rounded-md relative h-72'>
                <Image fill src={productImage[0]}/>
            </div>

            <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                    <p className='text-lg text-[#555656]'>{productName}</p>
                    <p>1pc</p>
                </div>
                <div className='flex items-center justify-between'>
                    <p className='text-lg text-[#70B446]'>${price}</p>
                    <p className='bg-white px-4 text-green-500'>
                        <ShoppingCartOutlined/>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;