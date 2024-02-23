import Image from "next/image";
import React from "react";

const ImageCards = ({ image, text, classname }: any) => {
  return (
    <div className={`${classname} relative rounded-3xl h-full `}>
      <Image
        src={image}
        alt="Card"
        className="h-full object-cover rounded-3xl w-full"
      />
      <div className="absolute inset-x-0 bottom-0 ">
        <div className="bg-gradient-to-t from-black to-transparent py-4 text-white text-center rounded-3xl">
          <p className="text-[28px] ">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCards;
