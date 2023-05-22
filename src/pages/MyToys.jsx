import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);

  const [userAdded, setUserAdded] = useState([]);
  // console.log(userAdded);

  useEffect(() => {
    fetch(`http://localhost:5000/allProducts/${user.email}`)
      .then((res) => res.json())
      .then((data) => setUserAdded(data));
  }, []);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      fetch(`http://localhost:5000/allProducts/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.deletedCount > 0) {
            if (result.isConfirmed) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }

            const remaining = userAdded.filter(
              (product) => product._id !== _id
            );
            setUserAdded(remaining);
          }
        });
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
                <td className="flex items-center justify-evenly text-3xl">
                  <div>
                    <FaEdit></FaEdit>
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
