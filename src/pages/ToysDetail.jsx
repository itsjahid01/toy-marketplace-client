import React from "react";
import { useLoaderData } from "react-router-dom";

const ToysDetail = () => {
  const singleToy = useLoaderData();
  console.log(singleToy);
  const {
    toyName,
    photoUrl,
    sellerEmail,
    sellerName,
    price,
    quantity,
    subCategory,
    rating,
    description,
  } = singleToy;

  return (
    <div className="">
      <div className="container mx-auto card card-side  shadow-2xl my-10">
        <figure className="w-1/2 p-8">
          <img className="w-9/12" src={photoUrl} alt="Movie" />
        </figure>
        <div className="card-body w-1/2 p-8">
          <p>
            <span className="text-lg font-semibold text-fuchsia-800 mr-2">
              Toy Name:
            </span>
            {toyName}
          </p>
          <p>
            <span className="text-lg font-semibold text-fuchsia-800 mr-2">
              Seller Name:
            </span>
            {sellerName}
          </p>
          <p>
            <span className="text-lg font-semibold text-fuchsia-800 mr-2">
              Seller Email:
            </span>
            {sellerEmail}
          </p>
          <p>
            <span className="text-lg font-semibold text-fuchsia-800 mr-2">
              Sub Category:
            </span>
            {subCategory}
          </p>
          <p>
            <span className="text-lg font-semibold text-fuchsia-800 mr-2">
              Price:
            </span>
            $ {price}
          </p>
          <p>
            <span className="text-lg font-semibold text-fuchsia-800 mr-2">
              Quantity:
            </span>
            {quantity}
          </p>
          <p>
            <span className="text-lg font-semibold text-fuchsia-800 mr-2">
              Rating:
            </span>
            {rating}
          </p>
          <p>
            <span className="text-lg font-semibold text-fuchsia-800 mr-2">
              Description:
            </span>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToysDetail;
