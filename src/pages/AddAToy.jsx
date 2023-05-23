import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";

const AddAToy = () => {
  useTitle("Add a Toy");
  const { user } = useContext(AuthContext);
  // console.log(user);
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const toyName = form.toyName.value;
    const photoUrl = form.photoUrl.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const subCategory = form.subCategory.value;
    const description = form.description.value;

    console.log(
      toyName,
      photoUrl,
      sellerEmail,
      sellerName,
      price,
      quantity,
      subCategory,
      rating,
      description
    );

    if (
      (toyName,
      photoUrl,
      sellerEmail,
      sellerName,
      price,
      quantity,
      subCategory,
      rating,
      description)
    ) {
      const toy = {
        toyName,
        photoUrl,
        sellerEmail,
        sellerName,
        price,
        subCategory,
        quantity,
        rating,
        description,
      };

      fetch(
        "https://toy-marketplace-server-side-itsjahid01.vercel.app/allProducts",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(toy),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please, Add A Toy!",
      });
    }
  };

  return (
    <div>
      <p className="text-4xl text-center p-5 font-semibold">Add A Toy</p>
      <form onSubmit={handleAddToy} className="container mx-auto  m-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="form-control">
            <input
              type="text"
              placeholder="Picture URL of the toy"
              name="photoUrl"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder=" Toy Name"
              name="toyName"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Seller Name"
              name="sellerName"
              className="input input-bordered"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Seller Email"
              name="sellerEmail"
              className="input input-bordered"
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Sub-category"
              name="subCategory"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Rating"
              name="rating"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Quantity"
              name="quantity"
              className="input input-bordered"
            />
          </div>
        </div>
        <textarea
          placeholder="Description"
          name="description"
          className="textarea textarea-bordered textarea-sm w-full mt-5 "
        ></textarea>
        <div className="form-control w-48 ml-auto mt-6">
          <button type="submit" className="btn bg-[#2A2F4F]">
            Add A Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
