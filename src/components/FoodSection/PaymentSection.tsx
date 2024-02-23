import React from "react";
import profile_01 from "@/assets/payment-profile-01.jpg";
import profile_02 from "@/assets/payment-profile-02.jpg";
import profile_03 from "@/assets/payment-profile-03.jpg";
import profile_04 from "@/assets/payment-profile-04.jpg";
import Master_Card from "@/assets/master-card-image.png";
import Visa from "@/assets/visa-image.png";
import Image from "next/image";
import { RiStarSFill } from "react-icons/ri";

const PaymentSection = () => {
  return (
    <section className="flex justify-between items-center mt-5 w-[85%]">
      <section className="flex gap-4 items-center">
        <section className={"flex"}>
          <Image
            src={profile_01}
            alt="Image is Missing"
            className={
              "rounded-full object-cover border-2 border-white h-[80px] w-[80px]"
            }
          />
          <Image
            src={profile_04}
            alt="Image is Missing"
            className={
              "-ml-5 rounded-full object-cover border-2 border-white h-[80px] w-[80px]"
            }
          />
          <Image
            src={profile_02}
            alt="Image is Missing"
            className={
              "-ml-5 rounded-full object-cover border-2 border-white h-[80px] w-[80px]"
            }
          />
          <Image
            src={profile_03}
            alt="Image is Missing"
            className={
              "-ml-5 rounded-full object-cover border-2 border-white h-[80px] w-[80px]"
            }
          />
        </section>

        <section>
          <h6 className="text-secondary font-semibold text-[16px]">
            Our happy customers
          </h6>
          <p className={"flex items-center justify-between text-[#1F1F1F80]"}>
            {" "}
            <span
              className={
                "flex items-center text-[18px] font-semibold text-black"
              }
            >
              <RiStarSFill color="#FFC75F" /> 4.7
            </span>
            (8.2K Review)
          </p>
        </section>
      </section>

      <section className="flex flex-col gap-2">
        <h5 className={"text-[#1F1F1F80] font-semibold italic"}>We accept </h5>

        <section className="flex items-center gap-2">
          <Image
            alt={"Image is Missing"}
            src={Visa}
            className="h-[17px] w-[50px] object-contain"
          />
          <Image
            alt={"Image is Missing"}
            src={Master_Card}
            className="h-[17px] w-[30px] object-cover"
          />
        </section>
      </section>
    </section>
  );
};

export default PaymentSection;
