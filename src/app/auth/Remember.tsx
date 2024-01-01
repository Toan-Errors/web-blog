import Link from "next/link";
import React from "react";

function Remember() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          id="remember_me"
          name="remember_me"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <label
          htmlFor="remember_me"
          className="ml-2 block text-sm text-gray-900"
        >
          Ghi nhớ tài khoản
        </label>
      </div>
      <div className="text-sm">
        <Link
          href="/auth/reset-password"
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          Quên mật khẩu?
        </Link>
      </div>
    </div>
  );
}

export default Remember;
