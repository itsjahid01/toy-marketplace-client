import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  const [userAdded, setUserAdded] = useState([]);
  console.log(userAdded);

  useEffect(() => {
    fetch(`http://localhost:5000/allProducts/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserAdded(data));
  }, []);

  return (
    <div className="container mx-auto my-10">
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userAdded.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product?.sellerName}</td>
                <td>{product?.toyName}</td>
                <td>{product?.subCategory}</td>
                <td>$ {product?.price}</td>
                <td>{product?.quantity}</td>
                <td>
                  <button className="btn bg-[#2A2F4F]">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
