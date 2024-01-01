import React from "react";

export type AuthInput = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  title: string;
  styles?: string;
};

export function AuthInput({ id, name, type, placeholder, title }: AuthInput) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {title}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name}
          type={type}
          className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
