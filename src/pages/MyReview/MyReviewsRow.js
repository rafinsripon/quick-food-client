import React from "react";
import { Link } from "react-router-dom";
import avater from "../../Assets/Images/avater.jpg"

const MyReviewsRow = ({ reviews, handleDelete }) => {
  const {
    _id,
    photo,
    email,
    name,
    message,
    image,
    priceBig,
    rating,
    serviceName,
  } = reviews;

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 w-full mb-10">
      <div className="container lg:px-12 px-0 flex flex-col w-full max-w-2xl p-3 divide-y divide-gray-700 dark:text-gray-900 border-4 border-gray-300 rounded-3xl">
        <div className="flex justify-between p-2">
          <div className="flex space-x-4 items-center">
            <div>
              <img
                src={photo ? photo : `${avater}`}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold text-xl">{name}</h4>
              <span className="text-sm font-semibold dark:text-gray-500">
                {email}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">{rating}</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <div className="flex items-center gap-2 mb-4">
            <img className="w-14 h-14 rounded-2xl" src={image} alt="" />
            <div className="flex justify-between">
              <div className="">
                <h2 className="text-xl font-bold text-slate-900">
                  {serviceName}
                </h2>
                <div className="flex  items-center gap-8">
                  <p className="text-lg font-bold text-sky-600">
                    Price: ${priceBig}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="pb-4 lg:text-lg text-base font-bold">{message}</p>
          <div className="flex justify-between mt-8 gap-4">
            <Link to={`/updated/${_id}`}>
              <button className="bg-sky-600 py-3 px-10 font-bold text-gray-100 rounded-3xl">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-rose-700 py-3 px-12 font-bold text-gray-100 rounded-3xl"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsRow;
