"use server";

import axiosInstance from "@/utils/axiosInstance";

export async function fetchComicsRecent(page = 1) {
  try {
    const res = await axiosInstance.get("/comic/recent", {
      params: {
        page,
      },
    });

    const data = res.data;
    return {
      comics: data.data.comics || [],
      total: data.data.total || 0,
      currentPage: data.data.currentPage || 1,
    };
  } catch (error) {
    return {
      comics: [],
      total: 0,
      currentPage: 1,
    };
  }
}

export async function fetchComic(slug: string) {
  try {
    const res = await axiosInstance.get(`/comic/${slug}`);
    return res.data.data;
  } catch (error) {
    return null;
  }
}
