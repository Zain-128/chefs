"use client";

import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { CiUser } from "react-icons/ci";
const CustomLink = ({
  href,
  title,
  className = "",
  icon,
}: any): React.ReactNode => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${className} relative group 
    ${pathname === href ? "border-b-2 border-secondary" : "border-none"}
    
    `}
    >
      {icon && <CiUser className="inline-block -mt-1 mr-1" />}
      {title}
    </Link>
  );
};
const Header = (): React.ReactNode => {
  return (
    <header>
      <nav className="max-w-8xl w-[98%] mx-auto flex justify-between items-center">
        <Image src={logo} alt="Picture of the author" width={80} height={80} />

        <div className="flex items-center gap-6">
          <CustomLink href="/" title="Home" className="" />
          <CustomLink href="/works" title="How it Works" className="" />
          <CustomLink href="/chefs" title="Our Chefs" className="" />
          <CustomLink href="/book" title="Book" className="" />
        </div>

        <div className="flex gap-6 items-center">
          <CustomLink href="/signup" title="Sign Up" className="" icon={true} />
          <span className="border-l border-[#dfe6e9]  h-4"></span>
          <CustomLink href="/login" title="Login" className="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
