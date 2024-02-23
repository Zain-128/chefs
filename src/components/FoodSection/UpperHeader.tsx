import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const UpperHeader = ({ icon, text, isIcon }: any) => {
  return (
    <section className="flex items-center gap-2 justify-center">
      {icon}
      <h6 className="text-[16px] font-semibold">{text}</h6>
      {isIcon && <RiArrowDownSLine className="text-secondary text-[20px]" />}
    </section>
  );
};

export default UpperHeader;
