"use client";

import React from "react";
import { Button, Checkbox, Form, Input, Typography, message } from "antd";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const ResetPass= () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://192.168.10.185:5000/api/v1/auth/login",
        {
          email: values.username,
          password: values.password,
        }
      );
      const {
        statusCode,
        success,
        message: sucessMessage,
        data,
      } = response.data;

      if (success && statusCode === 200) {
        localStorage.setItem("token", data);
        console.log(data);

        router.push("/");
        message.success(sucessMessage);
        form.resetFields();
      }
    } catch (error) {
      // Handle error response
      console.error("Login failed:", error);
      message.error("Login failed, please try again");
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Something went wrong");
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col items-center justify-center my-28">
      <div className="border px-12 mx-2 rounded-md text-[#6A6D7C] min-w-96 max-w-4xl">
        <div className="text-[#6A6D7C] text-center my-12">
          <Typography.Title
            style={{ color: "#6A6D7C" }}
            className="font-bold text-4xl"
          >
            <span className="text-[#6A6D7C]">Login to Account</span>
          </Typography.Title>
          <p className="text-[#6A6D7C]">
            Please enter your email and password to continue
          </p>
        </div>
        <Form
          form={form}
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={
              <span className="text-[#6A6D7C] font-bold">Email Address</span>
            }
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              className="bg-[#F1F4F9] rounded-md p-2"
              placeholder="esteban_schiller@gmail.com"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-[#6A6D7C] font-bold">Password</span>}
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              className="bg-[#F1F4F9] rounded-md p-2"
              placeholder="********"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <div className="flex items-center justify-between">
            <Form.Item name="remember">
              <Checkbox className="text-[#6A6D7C] text-lg">
                Remember me
              </Checkbox>
            </Form.Item>
            <Link className="text-[#6A6D7C] text-md mb-6" href={"/forget"}>
              Forget Password?
            </Link>
          </div>

          <Form.Item>
            <Button
              className="bg-[#7CC84E] text-white"
              size="large"
              htmlType="submit"
              style={{ width: "100%" }}
            >
             Update Password
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ResetPass
