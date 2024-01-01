"use server";
import { LoginData, RegisterData } from "@/types/auth";
import axiosInstance from "@/utils/axiosInstance";
import { getCookie } from "@/utils/cookies";

export async function onLogin(data: LoginData) {
  const { email, password } = data;
  try {
    const res = await axiosInstance.post("auth/login", {
      email,
      password,
    });
    return res.data;
  } catch (error) {
    return {
      message: "Có lỗi xảy ra, vui lòng thử lại sau!",
      status: "error",
    };
  }
}

export async function onRegister(data: RegisterData) {
  try {
    const { email, password, name } = data;
    try {
      const res = await axiosInstance.post("auth/register", {
        email,
        password,
        name,
      });
      return res.data;
    } catch (error) {
      return {
        message: "Có lỗi xảy ra, vui lòng thử lại sau!",
        status: "error",
      };
    }
  } catch (error) {
    return {
      message: "Có lỗi xảy ra, vui lòng thử lại sau!",
      status: "error",
    };
  }
}

export async function fetchMe() {
  try {
    const token = await getCookie("token");
    if (!token) {
      return {
        message: "Bạn chưa đăng nhập!",
        status: "error",
      };
    }
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const res = await axiosInstance.get("user/me");
    return res.data;
  } catch (error) {
    return {
      message: "Có lỗi xảy ra, vui lòng thử lại sau!",
      status: "error",
    };
  }
}
