import React from 'react';
import { Link } from 'react-router-dom';

const HomeServiceCard = ({service}) => {
    const {_id, image, name, description, priceBig, priceSmall, rating } = service;
    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm mb-8">
        <img
          className="w-full h-[280px] object-cover"
          src={image}
          alt="Img Not Found"
        />
        <div className="p-5 border border-t-0">
          <h2 className="text-2xl font-bold text-slate-900">{name}</h2>
          <p className="mb-2 text-gray-700">
            {description.slice(0, 95) + "..."}
          </p>
          <div className="flex items-centen justify-between">
            <p className="font-bold text-lg text-sky-800">
              Small: ${priceSmall}
            </p>
            <p className="font-bold text-lg text-sky-800">Large: ${priceBig}</p>
          </div>
          <span className="text-lg font-bold block text-orange-500">
            Ratings: {rating}
          </span>
          <Link
                to={`/services/${_id}`}
                aria-label=""
                className="mt-2 inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 w-full"
            >
                <button className="text-lg font-semibold bg-sky-700 py-1 p-2 block w-full text-white">Details</button>
        </Link>
        </div>
      </div>
    );
};

export default HomeServiceCard;