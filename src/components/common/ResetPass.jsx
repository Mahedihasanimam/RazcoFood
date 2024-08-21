"use client";

import React from "react";
import { Button, Checkbox, Form, Input, Typography, message } from "antd";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const ResetPass = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await axios.post(
        "http://192.168.10.185:5000/api/v1/auth/reset-password",
        {
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
            "Content-Type": "application/json", 
          },
        }
      );
      const { statusCode, success, message: successMessage, data } = response.data;

      if (success && statusCode === 200) {
        console.log(data);

        router.push("/");
        message.success(successMessage);
        form.resetFields();
      }
    } catch (error) {
      // Handle error response
      console.error("Password reset failed:", error?.response?.data || error);
      message.error("Reset, please try again");
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
            <span className="text-[#6A6D7C]">Reset Password</span>
          </Typography.Title>
          <p className="text-[#6A6D7C]">
            Please enter your new password to continue
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
            label={<span className="text-[#6A6D7C] font-bold">New Password</span>}
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Please input your new password!",
              },
              
            ]}
          >
            <Input.Password
              className="bg-[#F1F4F9] rounded-md p-2"
              placeholder="********"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            label={<span className="text-[#6A6D7C] font-bold">Confirm Password</span>}
            name="confirmPassword"
            dependencies={['newPassword']}
            rules={[
              {
                required: true,
                message: "Please confirm your new password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The two passwords do not match!')
                  );
                },
              }),
            ]}
          >
            <Input.Password
              className="bg-[#F1F4F9] rounded-md p-2"
              placeholder="********"
              style={{ width: "100%" }}
            />
          </Form.Item>

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

export default ResetPass;
