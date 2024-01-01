"use client";
import { AuthInput } from "@/components/Input";
import React, { FormEvent } from "react";
import Form from "../Form";
import { useAuth } from "@/contexts/AuthContext";

const INPUTS: AuthInput[] = [
  {
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Nhập tên của bạn",
    title: "Tên",
  },
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
  {
    id: "re-password",
    name: "re-password",
    type: "password",
    placeholder: "Vui lòng nhập lại mật khẩu",
    title: "Nhập lại mật khẩu",
  },
];

function Register() {
  const { register } = useAuth();

  const handleRegister = (e: FormEvent) => {
    const fData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(fData.entries()) as any;
    register(data.email, data.password, data.name);
  };

  return (
    <>
      <Form inputs={INPUTS} handleSubmit={handleRegister} title="Đăng ký" />
    </>
  );
}

export default Register;
