"use client";
import React from "react";
import Card from "./Popular_Dishes/Card";
import first from "@/assets/first_Dish.jpg";
import second from "@/assets/second-Dish.jpg";
import third from "@/assets/Third_Dish.jpg";
import chef from "@/assets/Chef.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PopularDishes = ({ deviceType }: any) => {
  return (
    <section className={"flex gap-5 mb-20 items-center shadow-lg-r relative"}>
      <section
        className={"flex flex-col gap-3  text-5xl w-[400px] font-semibold "}
      >
        <h2>Our Most</h2>
        <h2 className={"text-secondary"}>Popular Dishes</h2>
        <h2>This Month</h2>
        <button
          className={
            "text-[15px] mt-4 bg-secondary w-[120px] py-3 rounded-full font-[400] text-center text-white"
          }
        >
          See all
        </button>
      </section>

      <section
        className={
          " flex gap-5 py-2 overflow-x-auto scrollbar-hidden flex-1  custom-scrollbar relative"
        }
      >
        <Card chef={chef} image={first} />
        <Card chef={chef} image={second} />
        <Card chef={chef} image={third} />
      </section>
      <div className="absolute inset-y-0 right-0 h-[250px] top-2">
        <div className=" w-[40px] bg-gradient-to-l from-[#dfe6e9] to-transparent py-4 text-white text-center  h-full z-50"></div>
      </div>
    </section>
  );
};

export default PopularDishes;
