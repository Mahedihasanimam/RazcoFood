"use client";
import TopNav from "./TopNav";
import React from "react";
import { Button, Dropdown, Layout, Menu } from "antd";
import { AppstoreOutlined, CaretDownOutlined, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import Link from "next/link";
const { Header } = Layout;
const items = [
    {
        label:<Link className="text-[#555656] hover:text-red-500" href={'/'} >Home</Link>,
        key:'home'
    },
    {
        label:'Shope',
        key:'shope'
    },
    {
        label:'About Us',
        key:'about us'
    },
    {
        label:'Offer',
        key:'offer'
    },
]

const Navbar = () => {
  return (
    <>
      <TopNav />
      <Layout className="bg-[#EFEEF6] px-0">
        <Header
          className="container mx-auto bg-[#EFEEF6] flex items-center justify-between px-0"
         
        >
          <div>
            
            <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
      >
        <Button
            //   size="large"
              style={{ background: "#7CC84E", color: "white" }}
              className=" py-6 text-lg rounded-sm "
              type="primary"
            >
              <AppstoreOutlined /> Browse All
              Categories  <CaretDownOutlined />
            </Button>
      </Dropdown>
          </div>
          <Menu
           className="bg-[#EFEEF6]"
            mode="horizontal"
           
            items={items}
            style={{
            
             
            }}
          />

          <div className="flex items-center justify-center gap-4">
            <ShoppingCartOutlined className="text-xl cursor-pointer"/>
         
            <HeartOutlined  className="text-xl cursor-pointer"/>
          </div>
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;
