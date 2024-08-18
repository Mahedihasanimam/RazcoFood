'use client';

import React, { useState } from 'react';
import { useGetProductByNameQuery } from '@/service/postApi';
import SingleCard from '@/components/product/SingleCard';
import { Pagination } from 'antd';

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; 

  // Fetch products with pagination
  const { data: products, error, isLoading } = useGetProductByNameQuery({ page: currentPage, limit: pageSize });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error occurred</h2>;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='my-24 container mx-auto'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
        {products?.data.map(product => (
          <SingleCard key={product._id} product={product} />
        ))}
      </div>
      <div className='flex justify-center mt-6'>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={products?.total || 0}
          onChange={handlePageChange}
          showSizeChanger={true} 
        />
      </div>
    </div>
  );
};

export default ProductsPage;
