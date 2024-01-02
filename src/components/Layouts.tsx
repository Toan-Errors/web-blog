import React from "react";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/contexts/AuthContext";
import Footer from "./Footer";
import TopLoader from "./TopLoader";

function Layouts({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="mx-auto flex min-h-screen w-full flex-col items-center justify-start">
        <TopLoader />
        <Header />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
        {children}
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default Layouts;
