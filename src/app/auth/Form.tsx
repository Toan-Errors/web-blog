"use client";
import { AuthInput } from "@/components/Input";
import React, { FormEvent } from "react";
import Remember from "./Remember";

type Props = {
  handleSubmit: (e: FormEvent) => void;
  inputs: AuthInput[];
  title: string;
  isRemember?: boolean;
};

function Form({ handleSubmit, inputs, title, isRemember }: Props) {
  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
    >
      {inputs.map((input) => (
        <AuthInput
          key={input.id}
          id={input.id}
          name={input.name}
          type={input.type}
          placeholder={input.placeholder}
          title={input.title}
        />
      ))}
      {isRemember && <Remember />}
      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {title}
        </button>
      </div>
    </form>
  );
}

export default Form;
