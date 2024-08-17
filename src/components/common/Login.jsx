'use client';

import React from 'react';
import { Button, Checkbox, Form, Input, Typography, message } from 'antd';
import Link from 'next/link';

const Login = () => {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    console.log(values);
    message.success('Success');
    form.resetFields(); 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className=" flex flex-col items-center justify-center my-28 ">
      <div className="border px-12 mx-2 rounded-md text-[#6A6D7C] min-w-96 max-w-4xl ">
       <div className='text-[#6A6D7C] text-center my-12'>
       <Typography.Title style={{color:'[#6A6D7C]'}} className="font-bold text-4xl "><spanc className='text-[#6A6D7C]' >Login to Account</spanc></Typography.Title>
       <p className='text-[#6A6D7C]'>Please enter your email and password to continue</p>
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
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input  className='bg-[#F1F4F9] rounded-md p-2' placeholder="esteban_schiller@gmail.com" style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item
         
             label={<span className='text-[#6A6D7C] font-bold' >Password</span>}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
                whitespacespace: true,
              },
            ]}
          >
            <Input.Password  className='bg-[#F1F4F9] rounded-md p-2'  placeholder="********" style={{ width: '100%' }} />
          </Form.Item>

          <div className='flex items-center justify-between'>
          <Form.Item name="remember"  valuePropName="checked">
            <Checkbox className="text-[#6A6D7C]  text-lg">Remember me</Checkbox>
          </Form.Item>
          <Link className='text-[#6A6D7C] text-md mb-6' href={'/forget'}>
          Forget Password?
          </Link>
          </div>

          <Form.Item>
            <Button className='bg-[#7CC84E] text-white' size='large' htmlType="submit" style={{ width: '100%' }}>
              Log In
            </Button>
            <Link href={'/signup'}>
            <Button className='my-4 block mx-auto'>Sign Up</Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;