import React from "react";
import useTitle from "../hooks/useTitle";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  useTitle("Update Toy");
  const toy = useLoaderData();
  console.log(toy);

  const { _id, price, quantity, description } = toy;

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    // console.log(price, quantity, description);

    const updateToy = { price, quantity, description };
    console.log(updateToy);

    fetch(
      `https://toy-marketplace-server-side-itsjahid01.vercel.app/allProducts/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateToy),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="my-5">
      <p className="text-4xl text-center p-5 font-semibold mb-3">Update Toy</p>
      <div className="card w-2/5 mx-auto  shadow-2xl mb-8">
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered"
              defaultValue={price}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Quantity"
              name="quantity"
              className="input input-bordered"
              defaultValue={quantity}
            />
          </div>
          <label className="label">
            <span className="label-text text-lg">Description</span>
          </label>
          <textarea
            placeholder="Description"
            name="description"
            className="textarea textarea-bordered textarea-sm w-full"
            defaultValue={description}
          ></textarea>
          <div className="form-control mt-6">
            <button className="btn bg-[#2A2F4F]">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateToy;
