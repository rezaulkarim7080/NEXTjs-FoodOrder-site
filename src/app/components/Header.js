"use client";

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handlenav = () => {
    setNav(!nav);
  };

  return (
    <div className="shadow-xl ">
      <div className="flex justify-between items-center h-24 max-w-[100%] px-20" >
        <h1 className="width-full text-3xl font-bold text-[#ff2135]">
          Food Munch
        </h1>

        <ul className="hidden md:flex">
          <li className="p-4 hover:text-[#ff2135]">
            <Link href="/">Home</Link>
          </li>

          <li className="p-4 hover:text-[#ff2135]">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 hover:text-[#ff2135]">
            <Link href="/foods">All Items</Link>
          </li>

          <li className="p-4 hover:text-[#ff2135]">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Reaponsive */}

        <div onClick={handlenav} className="block md:hidden">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%]  h-full bg-[#ff2135] ease-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <ul className="pt-24 uppercase">
            <li className="p-4 text-center text-white border-b border-b-[#ffffff]">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-center text-white border-b border-b-[#ffffff]">
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 text-center text-white  border-b border-b-[#ffffff]">
              <Link href="/foods">All Items</Link>
            </li>

            <li className="p-4 text-center text-white border-b border-b-[#ffffff]">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
