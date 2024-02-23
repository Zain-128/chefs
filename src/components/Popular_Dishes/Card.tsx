import Image from "next/image";
import React from "react";

import { RiStarSFill } from "react-icons/ri";

const Card = ({ image, chef }: any) => {
  return (
    <section
      className={"rounded-xl w-[400px]  shadow mx-4"}
      // style={{ boxShadow: "4px 4px 10px rgba(0,0,0,0.3" }}
    >
      <Image
        src={image}
        alt={"Image is Missing"}
        className="h-[250px] w-full rounded-t-xl"
      />

      <section className={"border-b p-2 w-[350px] border-[#dfe6e9]"}>
        <h5 className={"text-[16px] font-semibold"}>Menu Title Here</h5>
        <p className="text-[14px]">
          Pick <span className="text-secondary">5</span> out of
          <span className="text-secondary"> 10</span> dishes
        </p>
        <h5 className={"text-[18px] font-bold"}>QAR 200</h5>
      </section>
      <section className={"flex justify-between items-center p-2"}>
        <section className="flex items-center gap-4  rounded-b-lg">
          <Image
            src={chef}
            alt={"Image is Missing"}
            className={"h-[50px] w-[50px] rounded-full object-cover"}
          />
          <h5>Marriot Head Chef</h5>
        </section>
        <h6 className="flex items-center text-secondary">
          <RiStarSFill color="" />
          <span className="text-primary font-semibold">4.7</span>
        </h6>
      </section>
    </section>
  );
};

export default Card;
