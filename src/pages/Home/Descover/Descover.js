import React from "react";
import about from "../../../Assets/Images/food1.jpg";

const Descover = () => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-16">
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
        <img
          src={about}
          alt=""
          className="h-[400px] object-cover dark:bg-gray-500 aspect-video"
        />
        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-800">
          <span className="text-xs uppercase dark:text-gray-100 bg-sky-600 px-6 w-1/2 py-2 rounded-3xl">
            Join, it's free
          </span>
          <h3 className="text-4xl font-bold text-white">
            A new way to experience food
          </h3>
          <p className="my-6 dark:text-gray-400">
            Celery potato scallion desert raisin horseradish spinach carrot
            soko. Lotus root water spinach fennel kombu maize bamboo shoot green
            bean swiss chard seakale pumpkin onion chickpea gram corn nuts
            salsify bunya pie sprout coriander water.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Descover;
