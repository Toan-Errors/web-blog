function pathJoin(...paths: string[]) {
  return paths
    .map((path, index) => {
      if (index === 0) {
        return path.trim().replace(/\/+$/g, "");
      }
      return path.trim().replace(/^\/+/g, "").replace(/\/+$/g, "");
    })
    .join("/");
}

const BASE_URL = "/";

export const PATHS = {
  home: BASE_URL,
  auth: {
    root: pathJoin(BASE_URL, "auth"),
    login: pathJoin(BASE_URL, "auth", "login"),
    register: pathJoin(BASE_URL, "auth", "register"),
    logout: pathJoin(BASE_URL, "auth", "logout"),
    resetPassword: pathJoin(BASE_URL, "auth", "reset-password"),
  },
  profile: {
    root: pathJoin(BASE_URL, "profile"),
    edit: pathJoin(BASE_URL, "profile", "edit"),
    changePassword: pathJoin(BASE_URL, "profile", "change-password"),
  },
  products: {
    root: pathJoin(BASE_URL, "products"),
    detail: pathJoin(BASE_URL, "products", ":id"),
  },
  posts: {
    root: pathJoin(BASE_URL, "posts"),
    detail: pathJoin(BASE_URL, "posts", ":id"),
  },
  groups: {
    root: pathJoin(BASE_URL, "groups"),
    detail: pathJoin(BASE_URL, "groups", ":id"),
  },
  comics: {
    root: pathJoin(BASE_URL, "comics"),
    detail: pathJoin(BASE_URL, "comics", ":id"),
  },
};
