import React from "react";

type SliderButtonProps = {
  count: number;
  onClick: (index: number) => void;
  active: number;
};

function SliderButton({ count, onClick, active }: SliderButtonProps) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
      {Array.from(Array(count).keys()).map((i) => {
        return (
          <button
            key={i}
            onClick={() => onClick(i)}
            data-te-target="#carouselDarkVariant"
            data-te-slide-to={i}
            data-te-carousel-active=""
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label={`Slide ${i + 1}`}
          />
        );
      })}
    </div>
  );
}

export default SliderButton;
