import React from "react";
import order from "../../../Assets/Images/order.jpg";

const OrderFood = () => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-14">
      <div className="relative">
        <img className="w-full lg:h-auto h-[500px] object-cover rounded-3xl" src={order} alt="" />
        <div className="absolute lg:top-28 left-8 top-24 lg:left-40">
          <h2 className="lg:text-6xl text-4xl font-extrabold text-[#72266ed9] uppercase">
            Simple Way to <br /> Order Food
          </h2>
          <div className="flex lg:flex-row flex-col  items-center space-x-3 pt-14">
            <a
              href="/"
              className="lg:w-40 w-60 transition duration-300 hover:shadow-lg"
            >
              <img
                src="https://kitwind.io/assets/kometa/app-store.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </a>
            <a
              href="/"
              className="lg:w-40 w-60 transition duration-300 hover:shadow-lg lg:pt-0 pt-4"
            >
              <img
                src="https://kitwind.io/assets/kometa/google-play.png"
                className="object-cover object-top w-full h-auto mx-auto"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFood;
