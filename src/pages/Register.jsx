import { Link } from "react-router-dom";
import signUp from "../assets/sign-up.png";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [passError, setPassError] = useState("");

  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoUrl.value;
    console.log(name, email, password, photoURL);
    form.reset();

    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
          setPassError("");
          updateUserData(result.user, name, photoURL);
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
          setError("");
        });
    } else {
      setError("Please fill the form.");
    }

    if (password && password.length < 6) {
      setPassError("Password must be at least 6 characters long");
      return;
    }
  };

  const updateUserData = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("profile updated");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="md:flex justify-center items-center gap-8 p-8 ">
        <div className="md:w-1/2 p-5">
          <img src={signUp} alt="" />
        </div>
        <div className=" md:w-1/2 p-5">
          <div className="card shadow-2xl p-5">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            {<p className="text-red-500">{error}</p>}
            <form onSubmit={handleCreateUser} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
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
                {<p className="text-red-500">{passError}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  name="photoUrl"
                  className="input input-bordered"
                />
              </div>

              {/* <p className="text-red-500">{error}</p> */}
              <div className="form-control w-4/6 mx-auto mt-6">
                <button className="btn">Register</button>
              </div>
            </form>
            <p className="text-center font-semibold mt-3">
              Already have an account?
              <Link to="/login" className="link-primary">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
