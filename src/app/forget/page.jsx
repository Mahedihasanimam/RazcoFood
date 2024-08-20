'use client';

import React from 'react';
import { Button, Checkbox, Form, Input, message, Typography } from 'antd';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [form] = Form.useForm();
  const router=useRouter()
  const onFinish = async(values) => {
   const email=values.email
    try {
      const response=await axios.post('http://192.168.10.185:5000/api/v1/auth/forget-password',{
        email
      })

      console.log('response data',response.data.statusCode==200 && response.data?.success);
      if(response.data.statusCode==200 && response.data?.success){
        router.push(`/otpverify?email=${encodeURIComponent(email)}`);
        message.success(response.data.message)
      }
    } catch (error) {
      console.log(error);
      message.error(error.data.message);
    }
    form.resetFields(); 
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className=" flex flex-col items-center justify-center my-28 ">
      <div className="border p-12 mx-2 rounded-md text-[#6A6D7C] min-w-96 max-w-4xl ">
       <div className='text-[#6A6D7C] text-center my-12'>
       <Typography.Title style={{color:'[#6A6D7C]'}} className="font-bold text-4xl "><spanc className='text-[#6A6D7C]' >Forget Password</spanc></Typography.Title>
       </div>
        <Form
          form={form} 
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={<span className='text-[#6A6D7C] font-bold ' >Email Address</span>}
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input type='email'  className='bg-[#F1F4F9] rounded-md p-3 border-none' placeholder="esteban_schiller@gmail.com" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item>
            <Button className='bg-[#7CC84E] text-white' size='large' htmlType="submit" style={{ width: '100%' }}>
            Send a code
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;