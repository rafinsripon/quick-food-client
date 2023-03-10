import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthProvider";
import logo from "../../../Assets/Images/logo1.png";
import avater from "../../../Assets/Images/avater.jpg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  //Handle LogOUt
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
        toast.success("SuccesFully Log Out", {autoClose: 500});
      })
      .catch((error) => {
        console.log("logout error", error);
      });
  };
  return (
    <div className="rounded-lg shadow-xl">
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <img className="w-12" src={logo} alt="" />
              <span className="ml-1 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Quick Food
              </span>
            </Link>
            <ul className="flex items-center hidden space-x-8 lg:flex text-xl font-bold">
              <li>
                <Link
                  to="/"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Blog
                </Link>
              </li>
              {user?.email &&
                <>
                <li>
                <Link
                  to="/myreview"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  My Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/addservices"
                  aria-label="Our product"
                  title="Our product"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Add Services
                </Link>
              </li>
                </>
              }
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <div className="flex items-center gap-4">
                {user?.email ? (
                  <>
                    <span className="text-xl font-bold">
                      {user?.displayName}
                    </span>
                    <img
                      className="w-10 h-10 rounded-full border-2 border-pink-600 cursor-pointer"
                      src={user?.photoURL ? user?.photoURL : `${avater}`}
                      alt=""
                    />
                    <button
                      onClick={handleLogOut}
                      className="font-bold  text-xl text-gray-900 ml-4"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      aria-label="About us"
                      title="About us"
                      className="font-bold text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                    >
                      Log In
                    </Link>
                    <Link
                      to="/register"
                      className="inline-flex items-center justify-center h-12 px-6 font-bold text-xl tracking-wide text-slate-900 transition duration-200 rounded hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-gray-200 z-50 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img className="w-12" src={logo} alt="" />
                        <span className="ml-1 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Quick Food
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/services"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/myreview"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          My Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/addservices"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Add Services
                        </Link>
                      </li>
                      <li>
                        <div className="flex items-center gap-4">
                        {user?.email ? (
                            <>
                              <span className="text-xl font-bold">
                                {user?.displayName}
                              </span>
                              <img
                                className="w-10 h-10 rounded-full border-2 border-pink-600 cursor-pointer"
                                src={user?.photoURL}
                                alt=""
                              />
                              <button
                                onClick={handleLogOut}
                                className="font-bold  text-xl text-gray-900 ml-4"
                              >
                                Log Out
                              </button>
                            </>
                          ) : (
                            <>
                              <Link
                                to="/login"
                                aria-label="About us"
                                title="About us"
                                className="font-bold text-xl tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
                              >
                                Log In
                              </Link>
                              <Link
                                to="/register"
                                aria-label="log in"
                                title="log in"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              >
                                Register
                              </Link>
                            </>
                          )}
                        </div>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
