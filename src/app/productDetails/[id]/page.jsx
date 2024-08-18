"use client";

import { useGetProductByIdQuery } from "@/service/postApi";
import {
  HeartOutlined,
  HomeOutlined,
  MinusOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, ConfigProvider, InputNumber } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const ProductDetails = ({ params }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(params?.id);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  const { productImage, productName, price, _id, description } = product?.data;
  console.log(product);
  return (
    <div className="my-20 container mx-auto">
      <Breadcrumb
        className="mt-28 mb-6"
        items={[
          {
            href: "/",
            title: <HomeOutlined style={{ fontSize: "20px" }} />,
          },
          {
            title: (
              <>
                <span className="text-xl  text-[#555656]">Product Details</span>
              </>
            ),
          },
        ]}
      />
      <div className="lg:flex md:flex flex-row items-start justify-between gap-24  ">
        <div className="bg-[#EFEEF6] p-4 rounded-md border relative h-[600px] lg:w-2/3  w-full ">
          {productImage && productImage.length > 0 ? (
            <Image
              className="rounded-md w-full "
              src={productImage[0]}
              alt={productName || "Product image"}
              fill
              
            />
          ) : (
            <div>No image available</div>
          )}
          <HeartOutlined className="absolute top-4 text-3xl cursor-pointer text-green-600 right-4" />
        </div>
        <div className="lg:max-w-lg space-y-12">
          <h1 className="text-5xl font-bold mt-4  text-[#555656]">
            {productName}
          </h1>{" "}
          <br />
          <span className="text-4xl   text-[#70B446]   mt-2">${price}</span>
          <span className="text-[#555656]">/500gm</span>
          <div className="max-w-52" style={{ display: "flex", alignItems: "center",justifyContent:'space-between' }}>
            <Button
              icon={
                <MinusOutlined className="bg-[#EFEEF6] border-none p-4 rounded-md" />
              }
              onClick={handleDecrement}
              style={{ marginRight: "8px" }}
            />
            <InputNumber
              className="bg-[#EFEEF6] hover:bg-[#EFEEF6] border-none py-2 text-center rounded-md"
              value={quantity}
              min={1}
              style={{ width: "60px", textAlign: "center" }}
              readOnly
            />
            <Button
              icon={
                <PlusOutlined className="bg-[#EFEEF6] border-none p-4 rounded-md" />
              }
              onClick={handleIncrement}
              style={{ marginLeft: "8px" }}
            />
          </div>
          <div className="space-y-8 mt-8">
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultActiveColor: "rgb(148,93,226)",
                    borderColorDisabled: "rgb(242,16,16)",
                    dangerColor: "rgb(241,107,107)",
                    defaultHoverBorderColor: "rgb(82,196,26)",
                    defaultHoverColor: "rgb(82,196,26)",
                    groupBorderColor: "rgb(82,196,26)",
                    defaultActiveBorderColor: "rgb(82,196,26)",
                    defaultBorderColor: "rgb(82,196,26)",
                    defaultColor: "rgb(0,0,0)",
                  },
                },
              }}
            >
              <Button className="" size="large" style={{ width: "100%" }}>
                Buy Now
              </Button>
            </ConfigProvider>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    defaultActiveColor: "rgb(148,93,226)",
                    borderColorDisabled: "rgb(242,16,16)",
                    dangerColor: "rgb(241,107,107)",
                    defaultHoverBorderColor: "rgb(82,196,26)",
                    groupBorderColor: "rgb(82,196,26)",
                    defaultActiveBorderColor: "rgb(82,196,26)",
                    defaultBorderColor: "rgb(82,196,26)",
                    defaultColor: "rgb(252,250,250)",
                    defaultHoverBg: "rgb(82,196,26)",
                    ghostBg: "rgb(82,196,26)",
                    defaultBg: "rgb(82,196,26)",
                    defaultHoverColor: "rgb(243,244,245)",
                  },
                },
              }}
            >
              <Button
                className="bg-[#7CC84E] hover:bg-[#7CC84E] text-white"
                size="large"
                style={{ width: "100%" }}
              >
                Buy Now
              </Button>
            </ConfigProvider>
          </div>
          <div>
            <h3 className="text-xl  mt-8  text-[#555656]">Product Details</h3>
            <p>
              {description.length > 20
                ? description
                : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus est hic ipsum eaque ea atque recusandae facilis dolore quisquam amet consectetur adipisicing elit. Accusamus est hic ipsum eaque ea atque recusandae facilis dolore"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
