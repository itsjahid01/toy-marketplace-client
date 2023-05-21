import React from "react";

const AddAToy = () => {
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
    const description = form.description.value;

    console.log(
      toyName,
      photoUrl,
      sellerEmail,
      sellerName,
      price,
      quantity,
      rating,
      description
    );

    const toy = {
      toyName,
      photoUrl,
      sellerEmail,
      sellerName,
      price,
      quantity,
      rating,
      description,
    };
  };

  return (
    <form onSubmit={handleAddToy} className="container mx-auto  m-14">
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
          />
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="Seller Email"
            name="sellerEmail"
            className="input input-bordered"
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
  );
};

export default AddAToy;
