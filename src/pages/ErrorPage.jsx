import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/error.jpg";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error.data);
  return (
    <div className=" w-2/5 h-2/5 mx-auto mt-18 text-center ">
      <img className=" rounded" src={errorImg} alt="" />
      <p className="mt-3 text-xl text-red-500">Page Not Pound!!</p>
      <p className="mt-2 text-xl text-red-500">{error.data}</p>
      <Link to="/">
        <button className="  btn  mt-4 ">Go to HomePage</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
