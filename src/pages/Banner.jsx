import React from "react";
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-[#2A2F4F] text-white">
      <div className="container mx-auto lg:flex justify-center items-center lg:gap-5 p-5">
        <div className="lg:w-1/2">
          <p className="text-5xl font-semibold mb-6 leading-tight">
            Let The Fun Begin: <br /> Your One-Stop
            <span className="text-red-600"> Toy Shop</span>
          </p>
          <p className="text-lg mb-6">
            It is Long established fact that a reader will be <br />
            distracted by the readable content of a page.
          </p>
          <button className="btn bg-[#917FB3] btn-outline rounded-full">
            Shop Now
          </button>
        </div>
        <div className="lg:w-1/2 sm:mt-5">
          <img src={banner} alt="" className="rounded" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
