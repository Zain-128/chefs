import React from "react";

import Categories_01 from "@/assets/Categories_01.png";
import Categories_02 from "@/assets/Categories-02.png";
import Categories_03 from "@/assets/Categories-03.png";
import Categories_04 from "@/assets/Categories-04.png";
import Categories_05 from "@/assets/Categories-05.png";
import Image from "next/image";
import ImageCards from "./Categories/ImageCards";

const Categories = () => {
  const images = [
    { text: "Explore Food", Category: Categories_01 },
    { text: "Master Chefs", Category: Categories_02 },
    { text: "Events", Category: Categories_03 },
    { text: "Deserts", Category: Categories_04 },
    { text: "Birthdays", Category: Categories_05 },
  ];
  return (
    <div className="grid grid-cols-12  gap-x-6 h-[600px]  grid-rows-2 gap-y-2 ">
      <div className="col-span-6 row-span-2 h-full">
        <ImageCards
          image={images[0].Category}
          text={images[0].text}
          classname="row-span-2"
        />
      </div>
      <div className="col-span-3  flex flex-col gap-2">
        <ImageCards image={images[1].Category} text={images[1].text} />
        <ImageCards image={images[2].Category} text={images[2].text} />
      </div>
      <div className="col-span-3 flex flex-col gap-2">
        <ImageCards image={images[3].Category} text={images[3].text} />
        <ImageCards image={images[4].Category} text={images[4].text} />
      </div>
    </div>
  );
};

export default Categories;
