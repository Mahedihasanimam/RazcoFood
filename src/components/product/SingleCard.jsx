import Image from 'next/image';
import React from 'react';
import image1 from "../../../public/images/chocklet1.png"
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import Link from 'next/link';
const SingleCard = ({product}) => {
    const {productImage,productName,price,_id}=product

    return (
        <Link href={`/productDetails/${_id}`}>
        <div className='bg-[#F4F5F7] p-4 rounded-md  space-y-4'>
            <div className='bg-[#EFEEF6] p-4 rounded-md relative h-72'>
                <Image className='rounded-md' fill src={productImage[0]}/>
                <HeartOutlined className="absolute top-4 text-3xl cursor-pointer text-green-600 right-4" />
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
        </Link>
    );
};

export default SingleCard;