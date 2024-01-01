"use server";
import { cookies } from "next/headers";

export async function getCookie(name: string) {
  const cookie = cookies();
  return cookie.get(name)?.value;
}

export async function setCookie(name: string, value: string) {
  const cookie = cookies();
  cookie.set(name, value, {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
}

export async function removeCookie(name: string) {
  const cookie = cookies();
  cookie.delete(name);
}
