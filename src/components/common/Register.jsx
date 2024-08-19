'use client';

import React from 'react';
import { Button, Checkbox, Form, Input, Typography, message } from 'antd';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values) => {
    try {
      
      // Make POST request with the values directly
      const response = await axios.post('http://192.168.10.185:5000/api/v1/user/create-user', values);
      
      // Handle response
      if (response.status === 200) {
        router.push(`/verify?email=${encodeURIComponent(values.email)}`);
        message.success('Registration successful!');
        form.resetFields();
      } else {
        message.error(`Registration failed: ${response.data.message}`);
      }
    } catch (error) {
      if (error.response) {
        // Handle known error
        console.error('Error response:', error.response.data);
        message.error(`Registration failed: ${error.response.data.message}`);
      } else if (error.request) {
        // Handle no response error
        console.error('Error request:', error.request);
        message.error('No response received from the server.');
      } else {
        // Handle unexpected errors
        console.error('Error message:', error.message);
        message.error('An unexpected error occurred.');
      }
    }
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="flex flex-col items-center justify-center my-28">
      <div className="border px-12 mx-2 rounded-md text-[#6A6D7C] min-w-96 max-w-4xl">
        <div className='text-[#6A6D7C] text-center my-12'>
          <Typography.Title style={{ color: '#6A6D7C' }} className="font-bold text-4xl">
            <span className='text-[#6A6D7C]'>Register a new account</span>
          </Typography.Title>
          <p className='text-[#6A6D7C]'>Please enter your information to create an account</p>
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
            label={<span className='text-[#6A6D7C] font-bold'>Username</span>}
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input className='bg-[#F1F4F9] rounded-md p-3 border-none' placeholder="your username" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            label={<span className='text-[#6A6D7C] font-bold'>Email Address</span>}
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input className='bg-[#F1F4F9] rounded-md p-3 border-none' placeholder="esteban_schiller@gmail.com" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            label={<span className='text-[#6A6D7C] font-bold'>Contact no</span>}
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please enter your contact info!',
              },
            ]}
          >
            <Input className='bg-[#F1F4F9] rounded-md p-3 border-none' placeholder="+88018" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            label={<span className='text-[#6A6D7C] font-bold'>Password</span>}
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password className='bg-[#F1F4F9] rounded-md p-3 border-none' placeholder="********" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="remember">
            <Checkbox className="text-[#6A6D7C] text-lg">Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button className='bg-[#7CC84E] text-white' size='large' htmlType="submit" style={{ width: '100%' }}>
              Sign Up
            </Button>
          </Form.Item>
          <Link href={'/login'}>
            <Button className='my-4 block mx-auto'>Sign In</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
