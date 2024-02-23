import React from "react";
import AboutSection from "./FoodSection/AboutSection";
import CardWithArrow from "./FoodSection/CardWithArrow";
import PaymentSection from "./FoodSection/PaymentSection";
import first from "@/assets/first-upper.png";
import second from "@/assets/first-upper.png";
import third from "@/assets/third-upper.png";
import fourth from "@/assets/fourth-upper.png";
import fifth from "@/assets/fifth-upper.png";
import six from "@/assets/Six-upper.png";
import SideImage from "@/assets/Side-image.PNG";
import Image from "next/image";

const FoodArea = () => {
  return (
    <section className="flex items-center">
      <section className="flex-1 flex flex-col gap-4 py-10">
        <AboutSection />

        <CardWithArrow />

        <PaymentSection />
      </section>
      <section className="flex-1">
        <Image
          src={SideImage}
          alt={"Image is Missing"}
          className="w-full h-full object-contain "
        />
        {/* <Image
          src={fifth}
          alt={"Image is Missing"}
          className="w-[80px] object-contain absolute "
        />
        <Image
          src={third}
          alt={"Image is Missing"}
          className="w-[150px] object-contain -rotate-[15deg]"
        />

        <Image
          src={six}
          alt={"Image is Missing"}
          className="w-[100px] object-contain absolute left-[30%] bottom-[10%]"
        />
        <Image src={first} alt={"Image is Missing"} height={50} width={50} />
        <Image src={second} alt={"Image is Missing"} height={50} width={50} />

        <Image src={fourth} alt={"Image is Missing"} height={50} width={50} /> */}
      </section>
    </section>
  );
};

export default FoodArea;
