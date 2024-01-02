import { fetchComic } from "@/actions/comic";
import { Comic } from "@/types/comic";
import React from "react";

async function Comic({ params }: { params: { slug: string } }) {
  const comic = (await fetchComic(params.slug)) as Comic;

  if (!comic) {
    return <div>Không tìm thấy truyện hoặc có lỗi xảy ra</div>;
  }
  return (
    <div>
      <h1>{comic.title}</h1>
      <img src={comic.thumbnail} alt={comic.title} />
      <p>{comic.description}</p>
    </div>
  );
}

export default Comic;
