import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";

const Services = () => {
  return (
    <div className="container mx-auto grid md:grid-cols-4 gap-8 text-center p-5 m-20">
      <div className="p-3">
        <MdOutlineLocalShipping className="text-7xl inline"></MdOutlineLocalShipping>
        <p className="text-2xl font-bold mt-4">Free Shipping</p>
        <p className="text-lg">On Everything</p>
      </div>
      <div className="p-3">
        <FaPhone className="text-7xl inline"></FaPhone>
        <p className="text-2xl font-bold mt-4">Give us a call on</p>
        <p className="text-lg">61464545617</p>
      </div>
      <div className="p-3">
        <MdOutlineMail className="text-7xl inline"></MdOutlineMail>
        <p className="text-2xl font-bold mt-4">Bulk Inquiry</p>
        <p className="text-lg">info@toyland.com</p>
      </div>
      <div className="p-3">
        <MdOutlineVerified className="text-7xl inline"></MdOutlineVerified>
        <p className="text-2xl font-bold mt-4">Quality Assurance</p>
        <p className="text-lg">
          Every product is original,fresh and of high quality{" "}
        </p>
      </div>
    </div>
  );
};

export default Services;
