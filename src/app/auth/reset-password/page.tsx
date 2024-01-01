"use client";
import React, { FormEvent } from "react";
import Form from "../Form";

const INPUTS = [
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Nhập email khôi phục mật khẩu",
    title: "Email",
  },
];

function ResetPassword() {
  const handleSubmit = async (e: FormEvent) => {
    const fData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(fData.entries()) as any;
  };

  return (
    <>
      <Form
        inputs={INPUTS}
        handleSubmit={handleSubmit}
        title="Đặt lại mật khẩu"
      />
    </>
  );
}

export default ResetPassword;
