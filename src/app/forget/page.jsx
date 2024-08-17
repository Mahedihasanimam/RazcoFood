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
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input  className='bg-[#F1F4F9] rounded-md p-3 border-none' placeholder="esteban_schiller@gmail.com" style={{ width: '100%' }} />
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