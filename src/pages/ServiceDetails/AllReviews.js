import React from "react";
import avater from '../../Assets/Images/avater.jpg'

const AllReviews = ({ reviews }) => {
  const { photo, message, image, email, name, priceBig, rating, serviceName } =
    reviews;
  return (
    <div>
      <div className=" mt-4">
        <div className="border-b-2 border-gray-400 flex items-center gap-4 py-2">
          <img
            className="w-12 h-12 rounded-full border-2 border-sky-700"
            src={photo ? photo : `${avater}`}
            alt=""
          />
          <div>
          <h2 className="text-xl font-bold text-slate-900">{name}</h2>
          <p className="font-bold text-gray-600">{email}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-3">
          <img className="w-16 h-16 rounded-lg" src={image} alt="" />
          <div className="">
            <h2 className="text-2xl font-bold text-sky-700">{serviceName}</h2>
            <p className="text-orange-500 text-xl font-bold">{rating}</p>
          </div>
        </div>
        <div>
          <p className="text-gray-600 mt-2">{message}</p>
          <p className="text-2xl font-bold text-[#a27272eb] mt-2">Price: ${priceBig}</p>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
