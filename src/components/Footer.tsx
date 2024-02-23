import React from "react";
import logo from "@/assets/logo.png";
import { IoIosSend } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="px-4 py-5  bg-[#1F1F1F] text-white ">
      <section className="max-w-8xl  w-[98%] mx-auto flex gap-6 text-[12px] items-start justify-between py-5 space-y-8">
        <Image
          alt="Image is Missing"
          src={logo}
          className="h-[200px] w-[150px] object-contain "
        />

        <section className="flex flex-col gap-4">
          <h6 className="text-secondary font-semibold text-xl mb-3">Address</h6>
          <p>Park Avenue South, New York, 74812, United States</p>
          <p>contact@chefprive.com</p>
          <p>000-123-456</p>
          <p>
            <span>FAQ</span> <span>Contact Us</span>
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <h6 className="text-secondary font-semibold text-xl mb-3">Link</h6>
          <p>Home</p>
          <p>How it Works</p>
          <p>Our Chefs</p>
          <p>Reviews</p>
          <p>What's new</p>
        </section>

        <section>
          <h6 className="text-secondary font-semibold text-xl mb-3">
            Subscribe to Newsletter
          </h6>

          <section className="flex justify-center items-center gap-1">
            <input
              type="text"
              placeholder="Email Address"
              className="outline-none py-3 rounded px-2 text-primary placeholder:text-primary"
            />
            <section className="bg-secondary px-3 py-3 rounded">
              <IoIosSend size={21} />
            </section>
          </section>

          <section className="flex justify-center flex-col items-center mt-7">
            <h6 className="font-semibold text-xl mb-3">Our Socials</h6>

            <section className="flex items-center text-xl gap-3 ">
              <FaFacebook color={"#FF9E2C"} />
              <FaTwitter color={"#FF9E2C"} />
              <FaInstagramSquare color={"#FF9E2C"} />
            </section>
          </section>
        </section>
      </section>

      <section className="flex gap-8 items-center justify-between mt-3 text-[14px]">
        <span className="border border-white flex-1 "></span>
        <p>Copyrights 2022 Chef Prive - All Rights Reserved</p>
        <span className="border border-white flex-1"></span>
      </section>
    </footer>
  );
};

export default Footer;
