import React from "react";
import ContainerImage from "@/assets/Mobile-app-container.png";
import PhoneImage from "@/assets/mobile.png";
import Pizza from "@/assets/half-cut-pizza.png";
import Icecream from "@/assets/Ice-creem.png";
import Playstore from "@/assets/GooglePlay.png";
import Appstore from "@/assets/AppStore.png";
import Image from "next/image";
const MobileApp = () => {
  return (
    <div
      className="h-[400px] w-[94%] mx-auto relative  bg-cover bg-center flex items-center gap-8 rounded-[50px] my-32"
      style={{
        backgroundImage: `url(${ContainerImage.src})`,
      }}
    >
      <Image
        src={Icecream}
        alt={"Image is Missing"}
        className={
          "absolute right-0 h-[180px] w-[120px] -bottom-8 -rotate-[45deg]"
        }
      />

      <section className="flex items-center max-w-7xl relative  w-[98%] mx-auto">
        {/* Pizza Image */}

        <Image
          src={Pizza}
          alt={"Image is Missing"}
          className={"absolute right-0 h-[180px] w-[220px] top-0"}
        />

        <section className="">
          <Image
            src={PhoneImage}
            alt={"Image is Missing"}
            className="h-[600px] w-[332px] object-cover"
          />
        </section>

        <section className="flex flex-col gap-6 items-center">
          <h2 className="text-5xl font-semibold text-white">
            Download Our Mobile App
          </h2>

          <section className={"flex gap-5 items-center"}>
            <Image
              className="h-[100px] w-[300px] object-cover"
              src={Playstore}
              alt={"Image is Missing"}
            />
            <Image
              className="h-[100px] w-[300px] object-contain"
              src={Appstore}
              alt={"Image is Missing"}
            />
          </section>
        </section>
      </section>
    </div>
  );
};

export default MobileApp;
