import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-293px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
