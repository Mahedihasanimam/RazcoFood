"use client";

import {
  AppstoreOutlined,
  CaretDownOutlined,
  HeartOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Dropdown, Menu } from "antd";
import React, { useState } from "react";
// import '../app/style.css';
import Link from "next/link";
import TopNav from "./TopNav";

const items = [
  {
    label: (
      <label className="text-[#555656]">
        <Link href={"/"}>Home</Link>
      </label>
    ),
    key: "Home",
  },
  {
    label: (
      <label className="text-[#555656]">
        <Link href={"/"}>Shop</Link>
      </label>
    ),
    key: "shop",
  },
  {
    label: (
      <label className="text-[#555656]">
        <Link href={"/"}>About Us</Link>
      </label>
    ),
    key: "about",
  },

  {
    label: (
      <label className="text-[#555656]">
        <Link href={"/"}>Contact Us</Link>
      </label>
    ),
    key: "contact",
  },
  {
    label: (
      <label className="text-[#555656]">
        <Link href={"/"}>Offer</Link>
      </label>
    ),
    key: "offer",
  },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <TopNav />
      <div className="absolute w-full z-50 bg-[#EFEEF6]">
        <div className="container mx-auto ">
          <div className="flex items-center justify-between px-2 ">
            <MenuOutlined
              className="lg:hidden md:hidden block"
              onClick={() => {
                setOpenMenu(true);
              }}
            />

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
                <AppstoreOutlined /> Browse All Categories <CaretDownOutlined />
              </Button>
            </Dropdown>
            <div className="lg:flex md:flex items-center justify-center w-full hidden ">
              <AppMenu className="" />
            </div>
          </div>
          <Drawer
            open={openMenu}
            placement="left"
            onClose={() => {
              setOpenMenu(false);
            }}
          >
            <AppMenu className="lg:hidden" isinline />
          </Drawer>
        </div>
      </div>
    </div>
  );
};
const AppMenu = ({ isinline = false }) => {
  return (
    <div className="bg-[#EFEEF6] lg:flex md:flex flex-wrap items-center justify-between w-full  py-2">
      <Menu
        className="bg-[#EFEEF6] w-fit mx-auto border-none"
        mode="horizontal"
        items={items}
        style={{}}
       
      />

      <div className="lg:flex md:flex hidden items-center justify-center gap-4">
        <ShoppingCartOutlined className="text-xl cursor-pointer" />

        <HeartOutlined className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};
export default Navbar;

// "use client";
// import TopNav from "./TopNav";
// import React from "react";
// import { Button, Dropdown, Layout, Menu } from "antd";
// import { AppstoreOutlined, CaretDownOutlined, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
// import Link from "next/link";
// const { Header } = Layout;
// const items = [
//     {
//         label:<Link className="text-[#555656] hover:text-red-500" href={'/'} >Home</Link>,
//         key:'home'
//     },
//     {
//         label:'Shope',
//         key:'shope'
//     },
//     {
//         label:'About Us',
//         key:'about us'
//     },
//     {
//         label:'Offer',
//         key:'offer'
//     },
// ]

// const Navbar = () => {
//   return (
//     <>
//       <TopNav />
//       <Layout className="bg-[#EFEEF6] px-0">
//         <Header
//           className="container mx-auto bg-[#EFEEF6] flex  flex-wrap items-center justify-between px-0"

//         >
//           <div>

//             <Dropdown
//         menu={{
//           items,
//         }}
//         placement="bottomLeft"
//       >
//         <Button
//             //   size="large"
//               style={{ background: "#7CC84E", color: "white" }}
//               className=" py-6 text-lg rounded-sm "
//               type="primary"
//             >
//               <AppstoreOutlined /> Browse All
//               Categories  <CaretDownOutlined />
//             </Button>
//       </Dropdown>
//           </div>
//           <Menu
//            className="bg-[#EFEEF6]"
//             mode="horizontal"

//             items={items}
//             style={{

//             }}
//           />

//           <div className="lg:flex md:flex hidden items-center justify-center gap-4">
//             <ShoppingCartOutlined className="text-xl cursor-pointer"/>

//             <HeartOutlined  className="text-xl cursor-pointer"/>
//           </div>
//         </Header>
//       </Layout>
//     </>
//   );
// };

// export default Navbar;
