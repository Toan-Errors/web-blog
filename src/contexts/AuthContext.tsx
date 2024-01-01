"use client";
import { fetchMe, onLogin, onRegister } from "@/actions/auth";
import { AuthUser } from "@/types/auth";
import { removeCookie, setCookie } from "@/utils/cookies";
import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

type AuthContextData = {
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string, name: string) => void;
};

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: (email: string, password: string) => {},
  logout: () => {},
  register: (email: string, password: string) => {},
} as AuthContextData);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUser = useCallback(async () => {
    const data = await fetchMe();
    if (data.status === "success") {
      setIsAuthenticated(true);
      setUser(data?.data || null);
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  }, []);

  useLayoutEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const login = async (email: string, password: string) => {
    const { status, message, token } = await onLogin({ email, password });
    if (status === "success") {
      await setCookie("token", token);
      fetchUser();
      toast.success("Đăng nhập thành công");
    } else {
      toast.error(message);
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    removeCookie("token");
    toast.success("Đăng xuất thành công");
  };
  const register = async (email: string, password: string, name: string) => {
    const { status, message, token } = await onRegister({
      email,
      password,
      name,
    });
    if (status === "success") {
      setCookie("token", token);
      fetchUser();
      toast.success("Đăng ký thành công");
    } else {
      toast.error(message);
    }
  };

  const value = {
    isAuthenticated,
    user,
    login,
    logout,
    register,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export default AuthProvider;
export { AuthContext };
