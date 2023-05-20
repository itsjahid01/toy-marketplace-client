import { Link } from "react-router-dom";
import login from "../assets/login.jpg";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    form.reset();

    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          setError("");
          navigate(from);
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      setError("Please provide your email and password.");
    }
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="container mx-auto">
      <div className="md:flex justify-center items-center gap-8 p-8 ">
        <div className="md:w-1/2 p-5">
          <img src={login} alt="" />
        </div>
        <div className=" md:w-1/2 p-5">
          <div className="card shadow-2xl p-5">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <p className="text-red-500">{error}</p>
              <div className="form-control w-4/6 mx-auto mt-6">
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
            </form>
            <p className="mt-3 mb-3 text-center font-semibold">
              Don't have an account?
              <Link to="/register" className="link-primary">
                Sign Up
              </Link>
            </p>
            <p className="text-center font-semibold">or Login With</p>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-4/6 mx-auto mt-3"
            >
              <span className="mr-2">
                <FaGoogle />
              </span>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
