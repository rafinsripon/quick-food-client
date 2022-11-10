import React from "react";
import icon1 from "../../../Assets/Images/icon1.png";
import icon2 from "../../../Assets/Images/icon2.png";
import icon3 from "../../../Assets/Images/icon3.png";
import icon4 from "../../../Assets/Images/icon4.png";

const Feature = () => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-16">
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-5 py-px mb-4 text-base font-semibold tracking-wider text-white uppercase rounded-full bg-sky-700">
                Best Feature
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="192913ce-1f29-4abd-b545-0fbccfd2b0ec"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">I</span>
              </span>{" "}
              Always offer you the best dinuts all time
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Look at what The Beast Foods is now offering!! Free delivery in Mankato/North Mankato for orders of 10 or more! 
            </p>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-between md:flex-row md:justify-between lg:flex-row flex-col items-center gap-8">
        <div className="p-8 w-full lg:w-auto bg-[#efefefe0] shadow-xl rounded-xl text-center">
          <img className="w-full object-cover" src={icon1} alt="" />
          <h2 className="text-2xl font-bold text-sky-700 mt-10">
            Quick Delivery
          </h2>
        </div>
        <div className="p-8 w-full lg:w-auto bg-[#efefefe0] shadow-xl rounded-xl text-center">
          <img className="w-full object-cover" src={icon2} alt="" />
          <h2 className="text-2xl font-bold text-sky-700 mt-10">
            Best Quality
          </h2>
        </div>
        <div className="p-8 w-full lg:w-auto bg-[#efefefe0] shadow-xl rounded-xl text-center">
          <img className="w-full object-cover" src={icon3} alt="" />
          <h2 className="text-2xl font-bold text-sky-700 mt-10">Super Teste</h2>
        </div>
        <div className="p-8 w-full lg:w-auto bg-[#efefefe0] shadow-xl rounded-xl text-center">
          <img className="w-full object-cover" src={icon4} alt="" />
          <h2 className="text-2xl font-bold text-sky-700 mt-10">
            Buying Offers
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Feature;
