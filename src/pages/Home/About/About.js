import React from "react";
import disco from "../../../Assets/Images/kitchen-light.jpg";
import disco1 from "../../../Assets/Images/kitchen-light1.jpg";

const About = () => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-16">
      <div className="flex flex-col items-center justify-center px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:pt-32 md:px-0">
        <div className="flex flex-col items-center max-w-2xl md:px-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-5 py-px mb-4 text-base font-semibold tracking-wider text-white uppercase rounded-full bg-sky-700">
                About Food
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
                <span className="relative">Online</span>
              </span>{" "}
              quick Home is Best Healthy Food Delivery.
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center pb-20">
        <div className="flex items-center gap-4">
          <img
            className="lg:w-[80%] w-full h-auto lg:h-[300px] rounded-xl"
            src={disco1}
            alt=""
          />
          <img
            className="lg:w-[50%] lg:h-[400px] rounded-xl lg:block hidden"
            src={disco}
            alt=""
          />
        </div>
        <div>
          <h2 className="lg:font-extrabold font-bold text-slate-900 lg:text-5xl text-3xl">
            Healthy and tasty foods with
          </h2>
          <h2 className="lg:font-extrabold font-bold text-sky-700 lg:text-3xl text-xl mt-4">
            natural ingredients
          </h2>
          <p className="text-gray-500 font-bold mt-3">
            Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
            malesuada eros nec luctus laoreet. Fusce sodales consequat velit
            eget dictum. Integer ornare magna vitae ex eleifend congue. Morbi
            sit amet nisi iaculis, fringilla orci nec.
          </p>
          <span className="text-lg block text uppercase text-sky-700 font-bold mt-2">
            Every day from 8:00 to 12:00
          </span>
          <span className="text-lg block text uppercase text-sky-700 font-bold mt-2">
            +49260-5731-08
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
