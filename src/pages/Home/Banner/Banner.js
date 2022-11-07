import React from "react";
import banner from "../../../Assets/Images/banner3.png";

const Banner = () => {
  return (
    <>
    <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl -z-10">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-gray-200 uppercase rounded-full bg-rose-700">
                welcome My quick Home Food
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight lg:text-5xl text-gray-900 sm:text-4xl sm:leading-none">
             The Best Online
              <br className="hidden md:block" />
              Delivery In My Home
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Enjoy our seasonal menu and experience the beauty of naturalness. A new way to experience food
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
          src={banner}
          alt=""
        />
      </div>
    </div>
    </>
  );
};

export default Banner;
