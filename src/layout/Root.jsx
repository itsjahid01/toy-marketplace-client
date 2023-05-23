import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
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
