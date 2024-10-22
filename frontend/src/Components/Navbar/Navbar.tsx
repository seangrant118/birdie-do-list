import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const {isLoggedIn, user, logout} = useAuth();
  return (
    <nav className="relative container mx-auto p-10 shadow-sm">
      <div className="flex items-center justify-between">
        <Link to="/pageone">Page One</Link>
        <div className="flex items-center">
            <Link className="pr-6" to="/pagetwo">Page Two</Link>
            <Link to="/pagethree">Page Three</Link>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
          <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
          <a
            onClick={logout}
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Logout
          </a>
        </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
          <Link to="/login" className="hover:text-darkBlue">Login</Link>
          <Link to="/register"
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Signup
          </Link>
        </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
