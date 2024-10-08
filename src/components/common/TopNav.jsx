import Image from 'next/image';
import React, { useContext } from 'react';
import logo from "../../../public/images/logo.png"
import { Button, ConfigProvider, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Authcontext } from '@/app/provider/AuthProvider';
import { useGetUserByIdQuery } from '@/service/postApi';
const TopNav = () => {
  const {authtoken,logout,user}=useContext(Authcontext)
  const {data,error,isLoading}=  useGetUserByIdQuery(user?.id)
  console.log(user?.id);

  if(data){
    console.log(data);
  }
  if(isLoading){
    return <h3>Loading...</h3>
  }
  if(error){
    console.log(error);
  }
  
    return (
        <div className='flex   space-y-4 px-2 items-center justify-around gap-6 container mx-auto my-4 '>
            <div className=' w-fit'>
               <Link href={'/'}> <Image height={200} width={200} src={logo} /></Link>
            </div>
            <div className='w-full'>
                <ConfigProvider
                
                  theme={
                    {
                        "components": {
                            "Input": {
                                "colorPrimary": "rgb(91,242,16)",
                                "colorPrimaryHover": "rgb(83,223,13)"
                              },
                            "Button": {
                                "colorPrimary": "rgb(91,242,16)",
                                "colorPrimaryHover": "rgb(83,223,13)"
                              },
                         
                        }
                      }
                   }
                >

                <Input className='lg:flex md:flex hidden'  prefix={<SearchOutlined/>} size='large' placeholder='Search Product' />
                </ConfigProvider>
            </div>
            {
              authtoken ? <Button onClick={logout}>Log out</Button> : <div className='flex items-center justify-center gap-4'>
              <ConfigProvider 
             theme={
              {
                  "components": {
                    "Button": {
                      "defaultActiveColor": "rgb(148,93,226)",
                      "borderColorDisabled": "rgb(242,16,16)",
                      "dangerColor": "rgb(241,107,107)",
                      "colorPrimaryHover": "rgb(93,242,19)"
                    },
                   
                  }
                }
             }>

          <Link href={'/signup'}>
          <Button size='large'  className='px-8 py-6 text-lg rounded-sm border-none' style={{background:'#F4F5F7',color:'#555656'}}  type="default">Sign Up</Button>
          </Link>
              </ConfigProvider>
         <Link href={'/login'}>
         <Button size='large' style={{background:'#7CC84E',color:'white',}} className='px-8 py-6 text-lg rounded-sm '  type="primary">Sign In</Button>
         </Link>
          </div>
            }
        </div>
    );
};

export default TopNav;