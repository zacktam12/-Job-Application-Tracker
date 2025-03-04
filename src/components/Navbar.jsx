import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/auth/authSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Job Tracker</h1>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="mr-4">
              Dashboard
            </Link>
            <button
              onClick={() => dispatch(logout())}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="bg-green-500 px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
