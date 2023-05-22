import useTitle from "../hooks/useTitle";
import About from "./About";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Services from "./Services";
import ShopByCategory from "./ShopByCategory";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <About></About>
      <Services></Services>
    </div>
  );
};

export default Home;
