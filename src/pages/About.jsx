import React from "react";
import image from "../assets/about.jpg";

const About = () => {
  return (
    <div className="bg-[#E2F9FA]">
      <div className="container mx-auto lg:flex justify-center items-center lg:gap-5 p-8 m-8">
        <div className="lg:w-1/2">
          <img src={image} alt="" className="rounded" />
        </div>
        <div className="lg:w-1/2  sm:mt-8 p-5">
          <p className="text-fuchsia-600 text-xl mb-2 ">Our Mission</p>
          <p className="text-5xl mb-5 font-semibold italic">About Us</p>
          <p className="mb-5 text-lg">
            it is a long established fact that a reader will be <br />{" "}
            distracted by the readable content of a page when <br /> looking at
            its layout.The point of using Lorem ipsum is <br /> that it has a
            more or less
          </p>
          <button className="btn bg-[#917FB3] btn-outline rounded-full">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
