"use client";
import { PATHS } from "@/constants/path";
import { Chapter } from "@/types/comic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type CardProps = {
  item: {
    id: string;
    title: string;
    thumbnail: string;
    lastest_chapters: Chapter[];
  };
};

function Card({ item }: CardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <Link href={PATHS.comics.root + `/${item?.id}`}>
        <LazyLoadImage
          className="h-48 w-full rounded-t-lg object-cover sm:h-56 md:h-64 lg:h-72"
          src={item.thumbnail}
          alt={item.title}
        />
      </Link>
      <Link href={PATHS.comics.root + `/${item?.id}`} className="mt-2 px-2">
        <h5 className="text-sm font-medium text-neutral-700">{item.title}</h5>
      </Link>
      <div className="mt-auto flex flex-wrap gap-2 p-2">
        {item.lastest_chapters.map((chapter) => (
          <Link
            href={PATHS.comics.root + `/${item?.id}/chapters/${chapter.id}`}
            key={chapter.id}
            className="flex w-full items-center justify-between rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium leading-tight text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700"
          >
            <span className="truncate text-neutral-500">{chapter.name}</span>
            <span className="text-neutral-500"> {chapter.updated_at}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;
