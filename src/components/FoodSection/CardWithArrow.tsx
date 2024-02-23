import React from "react";

import { RiSendPlaneLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { PiUsersThree } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";
import UpperHeader from "./UpperHeader";

const CardWithArrow = () => {
  return (
    <section className={"flex  gap-3 items-center"}>
      <section className="flex gap-1 justify-between shadow-md rounded-xl items-center p-3">
        <section className="flex flex-col gap-2 p-4 ">
          <UpperHeader
            text={"Select Region"}
            icon={<RiSendPlaneLine size={18} />}
            isIcon={true}
          />

          <section className="flex items-center justify-center gap-2 text-[14px] justify-center text-[#1F1F1F80]">
            <span>Al Shamal</span>
            <span>الشمال</span>
          </section>
        </section>

        <span className="border-l border-[#dfe6e9] h-12 w-[1px]"></span>
        <section className="flex flex-col gap-2 p-4 ">
          <UpperHeader
            text={"Select date"}
            icon={<SlCalender size={16} />}
            isIcon={true}
          />

          <section className="flex items-end gap-2 text-[14px]  justify-end text-[#1F1F1F80] text-end">
            <span>15 Jan - 20 Jan 2022</span>
          </section>
        </section>

        <span className="border-l border-[#dfe6e9] h-12 "></span>
        <section className="flex flex-col gap-2 p-4 ">
          <UpperHeader
            text={"Select persons"}
            icon={<PiUsersThree size={20} />}
          />

          <section className="flex items-center gap-2 text-[14px] text-[#1F1F1F80] justify-center">
            <section
              className={
                "h-[20px] w-[20px] rounded-full flex justify-center items-center bg-gray-200"
              }
            >
              <IoIosArrowDown color="#FF9E2C" />
            </section>
            <span>5</span>
            <section
              className={
                "h-[20px] w-[20px] rounded-full flex justify-center items-center bg-gray-200"
              }
            >
              <MdKeyboardArrowUp color="#FF9E2C" size={20} />
            </section>
          </section>
        </section>
      </section>

      <section className="h-[80px] w-[80px] rounded-full bg-secondary flex justify-center items-center">
        <MdKeyboardArrowRight size={34} color="white" />
      </section>
    </section>
  );
};

export default CardWithArrow;
