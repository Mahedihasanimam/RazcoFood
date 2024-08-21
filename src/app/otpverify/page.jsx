"use client";

import React, { useEffect, useState } from "react";
import { Button, Form, Input, message, Typography } from "antd";
import { useRouter } from "next/navigation";

const OtpVerify = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [regemail, setEmail] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get('email');
    setEmail(emailParam || '');
  }, []);
//   console.log(email);
  const onFinish = async (values) => {
    const otp = `${values.otp1}${values.otp2}${values.otp3}${values.otp4}`;
    const requestBody = {
      email:regemail,
      code: otp,
    };

    console.log("OTP as a number:", requestBody);

    const response = await fetch(
      "http://192.168.10.185:5000/api/v1/auth/otp-verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      }
    );

    console.log(response);
    const data = await response.json();
    if (response.ok) {
      router.push("/resetpass");
      message.success("Verification successful!");
      form.resetFields();
    } else {
      message.error(`Verification failed: ${data.message}`);
      console.log(data.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col items-center justify-center my-28">
      <div className="border p-12 mx-2 rounded-md text-[#6A6D7C] min-w-96 max-w-4xl">
        <div className="text-[#6A6D7C] text-center my-12">
          <Typography.Title
            style={{ color: "#6A6D7C" }}
            className="font-bold text-4xl"
          >
            <span className="text-[#6A6D7C]">Check your email</span>
          </Typography.Title>
          <p>
            We sent a reset link to <span className="text-green-600">{regemail}</span>
            <br />
            Enter the 4-digit code mentioned in the email
          </p>
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
          <div className="flex justify-center gap-2">
            <Form.Item
              name="otp1"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input maxLength={1} className="text-center w-12 h-12" />
            </Form.Item>
            <Form.Item
              name="otp2"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input maxLength={1} className="text-center w-12 h-12" />
            </Form.Item>
            <Form.Item
              name="otp3"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input maxLength={1} className="text-center w-12 h-12" />
            </Form.Item>
            <Form.Item
              name="otp4"
              rules={[{ required: true, message: "Required" }]}
            >
              <Input maxLength={1} className="text-center w-12 h-12" />
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              className="bg-[#7CC84E] text-white mt-8"
              size="large"
              htmlType="submit"
              style={{ width: "100%" }}
            >
              Verify Code
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default OtpVerify;
