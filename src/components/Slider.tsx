"use client";
import React from "react";
import SliderButton from "./slider/SliderButton";
import SliderAction from "./slider/SliderAction";
import SliderItems from "./slider/SliderItems";
import { SliderItem } from "@/types/slider";

const ITEMS = [
  {
    image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp",
    title: "First slide label",
    description: "Some representative placeholder content for the first slide.",
    textColor: "black",
  },
  {
    image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(20).webp",
    title: "Second slide label",
    description:
      "Some representative placeholder content for the second slide.",
  },
  {
    image: "https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(21).webp",
    title: "Third slide label",
    description: "Some representative placeholder content for the third slide.",
  },
] as SliderItem[];

type SliderProps = {
  items?: SliderItem[];
};

function Slider({ items = ITEMS }: SliderProps) {
  const [active, setActive] = React.useState(0);

  const total = ITEMS.length;

  const setAtiveIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = total - 1;
    } else if (newIndex >= total) {
      newIndex = 0;
    }
    setActive(newIndex);
  };

  // Auto slide
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAtiveIndex(active + 1);
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <div className="relative">
      <SliderButton count={total} onClick={setAtiveIndex} active={active} />
      <SliderItems items={items} active={active} />
      <SliderAction
        onPrev={() => setAtiveIndex(active - 1)}
        onNext={() => setAtiveIndex(active + 1)}
      />
    </div>
  );
}

export default Slider;
