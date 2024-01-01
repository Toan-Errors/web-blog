export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = {
  email: string;
  password: string;
  name: string;
};

export type AuthUser = {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
};
