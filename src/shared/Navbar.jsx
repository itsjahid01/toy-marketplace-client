import { Link } from "react-router-dom";
import logo from "../assets/toylandlogo.ico";

const Navbar = () => {
  return (
    <div className="bg-[#2A2F4F] text-white">
      <div className=" container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#2A2F4F] rounded-box w-52 font-semibold"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex ">
              <img className="w-8 mr-2" src={logo} alt="" />
              <span className=" normal-case text-xl font-bold">Toy Land</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex font-semibold">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/allToys">All Toys</Link>
            </li>
            {/* <li>
              <Link to="/muToys">My Toys</Link>
            </li>
            <li>
              <Link to="/addAToy">Add A Toy</Link>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <div className="w-10 rounded-full mr-4">
            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div> */}
          <a className="btn bg-[#917FB3]">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
