import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const ShopByCategory = () => {
  // const { user } = useContext(AuthContext);
  const [category, setCategory] = useState("Sports Car");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-side-itsjahid01.vercel.app/category/${category}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [category]);

  const handleDetails = () => {
    toast("You have to log in first to view details!");
    // if (!user) {
    //   return <Navigate to="/login"></Navigate>;
    // }
  };

  return (
    <div className="container mx-auto text-center m-8 p-5">
      <p className="text-4xl font-semibold">Shop By Category</p>
      <div className="my-10">
        <Tabs>
          <TabList>
            <Tab onClick={() => setCategory("Sports Car")}>Sports Car</Tab>
            <Tab onClick={() => setCategory("Regular Car")}>Regular Car</Tab>
            <Tab onClick={() => setCategory("Mini Police Car")}>
              Mini Police Car
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3">
              {toys &&
                toys.slice(0, 2).map((toy) => (
                  <div key={toy?._id} className="card card-side  shadow-2xl">
                    <figure className="w-1/2 p-2">
                      <img src={toy?.photoUrl} alt="Movie" />
                    </figure>
                    <div className="card-body text-left">
                      <p>
                        <span className="text-lg font-semibold text-fuchsia-800 mr-2">
                          Toy Name:
                        </span>
                        {toy?.toyName}
                      </p>
                      <p>
                        <span className="text-lg font-semibold text-fuchsia-800 mr-2">
                          Price:
                        </span>
                        {toy?.price}
                      </p>
                      <p>
                        <span className="text-lg font-semibold text-fuchsia-800 mr-2">
                          Rating:
                        </span>
                        {toy?.rating}
                      </p>
                      <div className="card-actions justify-end">
                        <button
                          onClick={handleDetails}
                          className="btn bg-[#2A2F4F]"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3">
              {toys &&
                toys.slice(0, 2).map((toy) => (
                  <div key={toy?._id} className="card card-side  shadow-2xl">
                    <figure className="w-1/2 p-2">
                      <img src={toy?.photoUrl} alt="Movie" />
                    </figure>
                    <div className="card-body text-left">
                      <p>
                        <span className="text-lg font-semibold text-fuchsia-800 mr-2">
                          Toy Name:
                        </span>
                        {toy?.toyName}
                      </p>
                      <p>
                        <span className="text-lg font-semibold text-fuchsia-800 mr-2">
                          Price:
                        </span>
                        {toy?.price}
                      </p>
                      <p>
                        <span className="text-lg font-semibold text-fuchsia-800 mr-2">
                          Rating:
                        </span>
                        {toy?.rating}
                      </p>
                      <div className="card-actions justify-end">
                        <button
                          onClick={handleDetails}
                          className="btn bg-[#2A2F4F]"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3">
              {toys &&
                toys.slice(0, 2).map((toy) => (
                  <div key={toy?._id} className="card card-side  shadow-2xl">
                    <figure className="w-1/2 p-2">
                      <img src={toy?.photoUrl} alt="Movie" />
                    </figure>
                    <div className="card-body text-left">
                      <p>
                        <span className="text-lg font-semibold text-fuchsia-800 mr-2">
                          Toy Name:
                        </span>
                        {toy?.toyName}
                      </p>
                      <p>
                        <span className="text-lg font-semibold text-fuchsia-800 mr-2">
                          Price:
                        </span>
                        {toy?.price}
                      </p>
                      <p>
                        <span className="text-lg font-semibold text-fuchsia-800 mr-2">
                          Rating:
                        </span>
                        {toy?.rating}
                      </p>
                      <div className="card-actions justify-end">
                        <button
                          onClick={handleDetails}
                          className="btn bg-[#2A2F4F]"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
