import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [category, setCategory] = useState("Sports Car");

  useEffect(() => {
    fetch(`http://localhost:5000/allProducts/${category}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const handle = () => {
    console.log("dsidu");
  };
  // () => setCategory("Sports Car")
  return (
    <div className="container mx-auto text-center m-10 p-5">
      <p className="text-4xl font-semibold">Shop By Category</p>
      <div className="mt-8">
        <Tabs>
          <TabList>
            <Tab onClick={handle}>Sports Car</Tab>
            <Tab>Regular Car</Tab>
            <Tab>Mini Police Car</Tab>
          </TabList>

          <TabPanel>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img
                  src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
