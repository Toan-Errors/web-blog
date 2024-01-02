import React from "react";
import Card from "./Card";
import { fetchComicsRecent } from "@/actions/comic";

async function Comics() {
  const data = await fetchComicsRecent(1);

  const { comics } = data;

  return (
    <div className="container mx-auto mt-2 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {comics.map((comic: any, index: number) => {
          return <Card key={comic?.id || index} item={comic} />;
        })}
      </div>
    </div>
  );
}

export default Comics;
