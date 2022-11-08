import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeServiceCard from "./HomeServiceCard";

const HomeService = () => {
  const [service, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-14 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-lg font-semibold tracking-wider text-gray-200 uppercase rounded-full bg-rose-700">
                Services
              </p>
            </div>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans lg:text-5xl text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Online Home Best</span>
                </span>{" "}
                services In My Food
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Choose your favorite meals and order online or by phone. It's
                easy to customize your order.We prepared and delivered meals
                arrive at your door. Duis autem vel eum iriure dolor in
                hendrerit in vulputate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {service.map((service) => (
          <HomeServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center">
        <Link to="/services">
          <button className="py-2 px-14 text-lg font-bold bg-sky-800 text-white">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
