import { useEffect } from "react";
import useTitle from "../hooks/useTitle";
import About from "./About";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Services from "./Services";
import ShopByCategory from "./ShopByCategory";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useTitle("Home");

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <Banner></Banner>
      </div>
      <div data-aos="fade-down">
        <Gallery></Gallery>
      </div>
      <div data-aos="fade-left">
        <ShopByCategory></ShopByCategory>
      </div>
      <div data-aos="fade-right">
        <About></About>
      </div>
      <div data-aos="fade-up-right">
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
