"use client";
import React, { FormEvent, useContext } from "react";
import Form from "../Form";
import { AuthInput } from "@/components/Input";
import { AuthContext, useAuth } from "@/contexts/AuthContext";

const INPUTS: AuthInput[] = [
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Vui lòng nhập email",
    title: "Email",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Vui lòng nhập mật khẩu",
    title: "Mật khẩu",
  },
];

function Login() {
  const { login, user } = useAuth();
  const handleSubmit = async (e: FormEvent) => {
    const fData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(fData.entries()) as any;
    login(data.email, data.password);
  };

  return (
    <>
      <Form
        inputs={INPUTS}
        handleSubmit={handleSubmit}
        title="Đăng nhập"
        isRemember
      />
    </>
  );
}

export default Login;
