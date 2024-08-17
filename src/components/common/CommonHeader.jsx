import { RightSquareFilled } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';

const CommonHeader = ({title1,title2,mylink}) => {
    return (
        <div className='my-12'>
             <div className='flex items-center justify-between '>
            <h3 className='text-3xl font-bold border-b-2 pb-2 border-green-500 w-fit'>{title1} <span className='text-[#7CC84E]'>{title2}</span></h3>
            <Link className='' href={`${mylink}`}>View All <RightSquareFilled/></Link>
            </div>
            <hr />
        </div>
    );
};

export default CommonHeader;