import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import bannerD from "../../Assets/Images/details.jpg";
import { FcNext } from "react-icons/fc";
import author from "../../Assets/Images/author.jpg";

const ServiceDetails = () => {
  const details = useLoaderData();
  const { _id, image, name, description, priceBig, priceSmall, rating } =
    details;
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10 mb-10">
      <div>
        <img className="w-full object-cover rounded-lg" src={bannerD} alt="" />
      </div>
      {/* ==header== */}
      <div className="cateContainer mt-2 border-b-slate-200 border-2 p-2 flex items-center px-4 py-5 md:px-14 lg:px-16 lg:w-full w-full mx-auto justify-between">
        <div className="cateHeader flex items-center">
          <Link
            className="text-2xl font-semibold text-slate-700 px-8 underline"
            to="/"
          >
            Home
          </Link>
          <span className="text-2xl">
            <FcNext />
          </span>
          <Link
            className="text-2xl font-semibold text-slate-700 px-8 underline"
            to="/services"
          >
            Services
          </Link>
          <Link
            className="text-2xl font-semibold text-slate-700 px-8 underline"
            
          >
            Details
          </Link>
        </div>
      </div>
      <div className="px-14 mt-12">
        <div className="border-4 border-gray-100 p-3 rounded-lg">
          <div className="flex space-x-4 mb-2">
            <img
              alt=""
              src={author}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <p>Tomas Load</p>
              <span className="text-xs dark:text-gray-400">4 hours ago</span>
            </div>
          </div>
          <div>
            <img
              src={image}
              alt=""
              className="object-cover w-full mb-4 h-60 lg:h-[400px] sm:h-96 dark:bg-gray-500 rounded-md"
            />
            <h2 className="mb-1 text-4xl font-semibold text-slate-900">
              {name}
            </h2>
            <p className="text-lg dark:text-gray-600 mt-4">{description}</p>
          </div>
          <div className="flex flex-wrap justify-between mt-4">
            <div className="space-x-2">
              <p className="text-xl font-bold text-sky-600">
                Ratings: {rating}
              </p>
            </div>
            <div className="flex space-x-2 text-sm gap-5 dark:text-gray-400">
              <span className="text-xl font-bold text-sky-600">
                small price: ${priceSmall}
              </span>
              <span className="text-xl font-bold text-sky-600">
                Large Price: ${priceBig}
              </span>
            </div>
          </div>
        </div>
      </div>
        <div>
            <h2 className="text-4xl mt-8">
                All Reviews Here..
            </h2>
        </div>
    </div>
  );
};

export default ServiceDetails;
