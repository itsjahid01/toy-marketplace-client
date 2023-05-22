import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allProducts = useLoaderData();
  // console.log(allProducts);
  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-center">
        <div className="form-control w-1/3 mr-3">
          <input
            type="search"
            placeholder="Search"
            name="sellerEmail"
            className="input input-bordered"
          />
        </div>
        <button className="btn bg-[#2A2F4F]">Search</button>
      </div>
      <div className="overflow-x-auto p-5">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product?.sellerName}</td>
                <td>{product?.toyName}</td>
                <td>{product?.subCategory}</td>
                <td>$ {product?.price}</td>
                <td>{product?.quantity}</td>
                <td>
                  <Link to={`/allToys/${product?._id}`}>
                    <button className="btn bg-[#2A2F4F]">View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
