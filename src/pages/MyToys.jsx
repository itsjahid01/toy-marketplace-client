import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);

  const [userAdded, setUserAdded] = useState([]);
  // console.log(userAdded);

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-side-itsjahid01.vercel.app/allProducts/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setUserAdded(data));
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this Toy!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toy-marketplace-server-side-itsjahid01.vercel.app/allProducts/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = userAdded.filter(
                (product) => product._id !== _id
              );
              setUserAdded(remaining);
            }
          });
      }
    });
  };

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
                <td className="flex items-center justify-evenly text-2xl">
                  <div>
                    <Link to={`/updateToy/${product?._id}`}>
                      <FaEdit></FaEdit>
                    </Link>
                  </div>
                  <div onClick={() => handleDelete(product?._id)}>
                    <MdDelete></MdDelete>
                  </div>
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
