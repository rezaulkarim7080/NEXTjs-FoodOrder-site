'use client'

import React, { useState } from "react";
import Link from "next/link";
import { MenuList } from "../data/data";
import Image from "next/image";

const page = () => {

  const [items, setItems] = useState(MenuList);

  const filterItem = (categItem) => {
    const updatedItems = MenuList.filter((curElem) => {
      return curElem.catagory === categItem;
    });
    setItems(updatedItems);
  };

  return (
    <div className="mt-10">
      {/* header buttons */}

      <h1 className="text-3xl font-bold text-center py-2">Movie lists</h1>
      <div className="flex justify-around py-5">
        <button
          className="bg-[#ff2135] px-8 py-3 mt-5 rounded-full hover:bg-[#ffec80] hover:text-black duration-300 text-white "
          onClick={() => setItems(MenuList)}
        >
          All items
        </button>
        <button
          className="bg-[#ff2135] px-8 py-3 mt-5 rounded-full hover:bg-[#ffec80] hover:text-black duration-300 text-white "
          onClick={() => filterItem("pizza")}
        >
          {" "}
          pizza
        </button>
        <button
          className="bg-[#ff2135] px-8 py-3 mt-5 rounded-full hover:bg-[#ffec80] hover:text-black duration-300 text-white "
          onClick={() => filterItem("barger")}
        >
          barger
        </button>
        <button
          className="bg-[#ff2135] px-8 py-3 mt-5 rounded-full hover:bg-[#ffec80] hover:text-black duration-300 text-white "
          onClick={() => filterItem("checkenleg")}
        >
          checkenleg
        </button>
        <button
          className="bg-[#ff2135] px-8 py-3 mt-5 rounded-full hover:bg-[#ffec80] hover:text-black duration-300 text-white "
          onClick={() => filterItem("drinks")}
        >
          drinks
        </button>
        <button
          className="bg-[#ff2135] px-8 py-3 mt-5 rounded-full hover:bg-[#ffec80] hover:text-black duration-300 text-white "
          onClick={() => filterItem("fries")}
        >
          fries
        </button>
        <button
          className="bg-[#ff2135] px-8 py-3 mt-5 rounded-full hover:bg-[#ff2135] hover:text-black duration-300 text-white "
          onClick={() => filterItem("rolls")}
        >
          rolls
        </button>
      </div>

      {/* MAPPING CARD */}

      <div className="grid grid-cols-3 border gap-3 px-10">
        {items.map((elem) => {
          const { name, image, description, price } = elem;

          return (
            <div
              key={name}
              className=" hover:shadow-2xl hover:bg-[#ffec80] rounded-3xl"
            >
              <Image src={image} alt={name} height={300} width={380} />
              <div className="px-5 py-2">
                <h1 className="text-2xl font-bold">{name}</h1>
                <p>{description}</p>
                <p className="font-bold">Price: ${price}</p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default page;
