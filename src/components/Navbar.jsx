import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import orchid from "../assets/orchid.svg";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogoutUser = () => {
    logoutUser()
      .then(() => {
        Swal.fire("log out done");
      })
      .catch(() => {
        Swal.fire("log out failed");
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addMovie">Add Movie</NavLink>
      </li>
      <li>
        <NavLink to="/allUsersMovies">All Users Movies</NavLink>
      </li>
      <li>
        <NavLink to="/myMovies">My Movies</NavLink>
      </li>

      <li>
        <NavLink to="/myFavorites">My Favorites</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="z-50 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="hidden sm:flex ">
            <img src={orchid} alt="logo" className="w-8" />
            <Link to="/" className="btn btn-ghost text-xl">
              Orchid Movie Portal
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end items-center gap-2">
          {user ? (
            <>
              <p>{user?.displayName || "authorized user"}</p>
              <button onClick={handleLogoutUser} className="btn btn-ghost">
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-ghost">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-ghost">
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
