"use client";
import CarouselCards from "@/components/Carousel/CarouselCards";
import Categories from "@/components/Categories";
import FoodArea from "@/components/FoodArea";
import MobileApp from "@/components/MobileApp";
import PopularDishes from "@/components/PopularDishes";

import React from "react";
import Reviews from "@/components/Reviews";
import Image from "next/image";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 3,
//     slidesToSlide: 3,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1,
//   },
// };
const page = (): React.ReactNode => {
  return (
    <main className="flex flex-col gap-6">
      <FoodArea />

      <MobileApp />

      <PopularDishes />

      <section className="py-10 flex flex-col gap-3">
        <h2 className="text-5xl font-semibold flex items-center gap-3">
          {" "}
          <span className="w-10 border-2 border-black"> </span>Browse By
          <span className="text-secondary">Categories</span>
        </h2>

        <Categories />
      </section>

      <section className="py-20 mb-3">
        <section className="pl-20 text-4xl font-semibold mb-3">
          <h2>What Our</h2>
          <h2>
            <span className="text-secondary">Customers</span> Says
          </h2>
        </section>
        <Reviews />
      </section>
    </main>
  );
};

export default page;
