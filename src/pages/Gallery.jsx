import React from "react";
import image1 from "../assets/gallery/sports1.jpeg";
import image2 from "../assets/gallery/sports2.jpeg";
import image3 from "../assets/gallery/regular1.jpeg";
import image4 from "../assets/gallery/regular2.jpeg";
import image5 from "../assets/gallery/truck1.jpeg";
import image6 from "../assets/gallery/truck2.jpeg";

const Gallery = () => {
  return (
    <div className="container mx-auto mt-5 ">
      <p className="text-4xl text-center font-bold p-5">Toy Cars Gallery</p>
      <div className="grid md:grid-cols-3 gap-7 p-8">
        <div className="card card-compact shadow-2xl">
          <figure>
            <img src={image1} alt="" />
          </figure>
        </div>
        <div className="card card-compact shadow-2xl">
          <figure>
            <img src={image2} alt="" />
          </figure>
        </div>
        <div className="card card-compact shadow-2xl">
          <figure>
            <img src={image3} alt="" />
          </figure>
        </div>
        <div className="card card-compact shadow-2xl">
          <figure>
            <img src={image6} alt="" />
          </figure>
        </div>
        <div className="card card-compact shadow-2xl">
          <figure>
            <img src={image5} alt="" />
          </figure>
        </div>
        <div className="card card-compact shadow-2xl">
          <figure>
            <img src={image4} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
