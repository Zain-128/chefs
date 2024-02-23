import Image from "next/image";
import React from "react";
import { RiStarSFill } from "react-icons/ri";
const CarouselCards = ({ image, name, role, text, ratings }: any) => {
  return (
    <section className="  rounded-[20px] flex flex-col gap-6  p-4 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <section className="flex items-center gap-3 ">
        <Image
          src={image}
          alt="Image is Missing"
          className="h-[80px] w-[80px] object-contain hover:scale-105 cursor-pointer duration-100 mb-2"
        />
        <section className="">
          <h5 className="text-primary font-semibold text-lg">{name}</h5>
          <p className="text-gray">{role}</p>
        </section>
      </section>

      <section className="p-2 text-start">
        <p className="text-[16px]">{text}</p>

        <p className="flex items-center  justify-end mt-3">
          <RiStarSFill color="orange" />
          <span className="font-semibold">{ratings}</span>
        </p>
      </section>
    </section>
  );
};

export default CarouselCards;
