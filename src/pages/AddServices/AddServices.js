import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../hooks/UseTitle";

const AddServices = () => {
  useTitle('add services')

  const handleServiceAdd = (event) => {
    event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const priceBig = `${form.priceBig.value}`;
        const rating = form.rating.value;
        const image = form.image.value;
        const description = form.description.value;
        const service = {name, priceBig, rating, image, description}
        // console.log(service)

        fetch('https://quick-food-server.vercel.app/services', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged){
            form.reset();
            toast.success('Seccess fully added', {autoClose: 500})
          }
        })
  }


  return (
    <div className="lg:w-2/3 w-full mx-auto lg:px-12 px-4 shadow-xl">
      <div>
        <div className="px-4 lg:py-16 pt-16 pb-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-24 lg:p-0">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <Link href="/" className="mb-6 sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-deep-purple-accent-400"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </Link>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
                    <span className="relative -z-50">Welcome</span>
                  </span>{" "}
                  To Add Your Best Services.
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleServiceAdd}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Sercice Name"
            className="input input-bordered input-info w-full"
            required
          />
        </div>
        <div className="lg:flex flex-wrap gap-4 justify-between mt-4">
          <div className="lg:w-[45%] w-full">
            <input
              type="text"
              name="priceBig"
              placeholder="service price"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
          <div className="lg:w-[45%] w-full lg:pt-0 pt-4">
            <input
              type="text"
              name="rating"
              placeholder="service rating"
              className="input input-bordered input-info w-full"
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <input
            type="text"
            name="image"
            placeholder="photo url"
            className="input input-bordered input-info w-full"
            required
          />
        </div>
        <div className="mt-4">
          <textarea
          type="text"
          name="description"
            className="textarea textarea-info w-full h-[170px]"
            placeholder="service description"
            required
          ></textarea>
        </div>
        <div className="pt-8 pb-8">
        <button className="bg-sky-600 py-2 w-1/2 mx-auto rounded-3xl block text-white font-bold">Add Services</button>
        </div>
      </form>
    </div>
  );
};

export default AddServices;
