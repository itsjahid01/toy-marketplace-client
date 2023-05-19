import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/error.png";

const ErrorPage = () => {
  const error = useRouteError();
  //   console.log(error.data);
  return (
    <div className=" w-2/5 h-2/5 mx-auto mt-20 text-center ">
      <img className="w-full rounded" src={errorImg} alt="" />
      <p className="mt-5 text-xl text-red-500">{error.data}</p>
      <Link to="/">
        <button className="  btn  mt-5 ">Go to HomePage</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
//
