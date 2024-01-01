import React from "react";
import Title from "./Title";
import Other from "./Other";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 flex min-h-screen w-full flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <Title />
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          {children}
          <Other />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
