import { SliderItem } from "@/types/slider";
import Image from "next/image";
import React from "react";

type SliderItemsProps = {
  items: SliderItem[];
  active: number;
};

function SliderItems({ items, active }: SliderItemsProps) {
  if (!items) return null;
  return (
    <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
      {items.map((item: any, index: number) => {
        const isActive = index === active;
        return (
          <div
            key={index}
            className={`relative float-left -mr-[100%] w-full !transform-none ${
              isActive ? "opacity-100" : "opacity-0"
            } transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none`}
            data-te-carousel-fade=""
            data-te-carousel-item=""
            data-te-carousel-active=""
          >
            <Image
              src={item.image}
              className="block w-full"
              alt={item.title}
              width={1920}
              height={1080}
            />
            <div
              className={`absolute inset-x-[15%] bottom-5 hidden py-5 text-center md:block ${
                item?.textColor ? `text-[${item.textColor}]` : "text-white"
              }`}
            >
              <h5 className="text-xl">{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SliderItems;
