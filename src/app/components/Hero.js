import React from "react";
import Image from "next/image";
import himer from "../../himer.jpg"
import Link from "next/link";

const Hero = (props) => {
  return (
    <div className="h-screen bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100">
      <div className="grid grid-cols-2 items-center px-20 py-24 mx-auto ">
        <div>
          <h1 className="text-2xl md:text-5xl font-bold">
            {props.headline}
          </h1>
          <Link href="/movie">
            <button className="bg-[#ff2135] px-8 py-3 mt-5 rounded-lg text-white ">
              Order Now
            </button>
          </Link>
        </div>

        <div>
          <Image src={props.image} alt="movie" className="rounded-xl shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
