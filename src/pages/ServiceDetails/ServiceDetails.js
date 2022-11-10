import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import bannerD from "../../Assets/Images/details.jpg";
import { FcNext } from "react-icons/fc";
import author from "../../Assets/Images/author.jpg";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";
import useTitle from "../../hooks/UseTitle";
import AllReviews from "./AllReviews";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const [reviewsService, setReviewsService] = useState([]);
  const { _id, image, name, description, priceBig, priceSmall, rating } =
    service;

  useTitle("services details");



  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.message.value;
    console.log(message);

    const reviews = {
      service: _id,
      email: user?.email,
      photo: user?.photoURL,
      name: user?.displayName,
      serviceName: name,
      image,
      message,
      rating,
      priceBig,
      priceSmall,
      time: new Date().toLocaleString(),
    };

    
    // console.log(reviews)
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('reviews-data:', data);
        if (data.acknowledged) {
          const newuser = [...reviewsService, data]
          setReviewsService(newuser)
          toast.success('Sucessfully reviews added', {autoClose: 500})
          form.reset()
        }
      }); 
  };

  fetch(`http://localhost:5000/review?id=${service._id}`)
  .then(res => res.json())
  .then(data => {
    return setReviewsService(data)
  })
  

  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-10 mb-10">
      <div>
        <img
          className="w-full lg:h-auto h-[180px] object-cover rounded-lg"
          src={bannerD}
          alt=""
        />
      </div>
      {/* ==header== */}
      <div className="cateContainer mt-2 border-b-slate-200 border-2 p-2 flex items-center px-4 py-5 md:px-14 lg:px-16 lg:w-full w-full mx-auto justify-between">
        <div className="cateHeader  flex lg:justify-start justify-center lg:flex lg:gap-0 gap-6 flex-wrap items-center">
          <Link
            className="text-2xl font-semibold text-slate-700 px-8 underline"
            to="/"
          >
            Home
          </Link>
          <span className="text-2xl lg:inline-block hidden">
            <FcNext />
          </span>
          <Link
            className="text-2xl font-semibold text-slate-700 px-8 underline"
            to="/services"
          >
            Services
          </Link>
          <Link className="text-2xl font-semibold text-slate-700 px-8 underline">
            Details
          </Link>
        </div>
      </div>
      <div className="lg:px-14 px-0 mt-12">
        <div className="border-4 border-gray-200 p-3 rounded-lg">
          <div className="flex space-x-4 mb-2">
            <img
              alt=""
              src={author}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <p className="text-2xl font-bold text-slate-900">Tomas Load</p>
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
      {/* =====reviews section== */}
      <div className="mt-6">
        <h2 className="text-4xl font-bold uppercase text-sky-700 px-16 mb-3">
          Reviews
        </h2>
        <div className="container lg:px-12 px-0 flex flex-col w-full lg:p-6 p-0 divide-y divide-gray-700 dark:text-gray-900">
          {user && <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {reviewsService?.map((reviews) => (
              <AllReviews key={reviews._id} reviews={reviews} />
            ))}
          </div>}
          <div className="flex flex-col">
            <div className="lg:w-[70%] w-full">
              <form onSubmit={handlePlaceOrder}>
                <div className="col-span-full">
                  {user ? (
                    <>
                      <label
                        htmlFor="message"
                        className="text-lg font-bold block mt-2 mb-2"
                      >
                        Type Reviews*
                      </label>
                      <textarea
                        name="message"
                        className="textarea text-xl h-32 rounded-md textarea-bordered w-full border-2 border-gray-500"
                        placeholder="Type Your Review"
                        required
                      ></textarea>
                    </>
                  ) : (
                    <>
                      <p className="text-4xl font-bold text-rose-700 mt-2 mb-4">
                        Please! <Link to='/login' className="underline text-sky-700">Login</Link> to add a review.
                      </p>
                    </>
                  )}
                  <div className="">
                    <button className="block w-full rounded-3xl p-3 text-center text-gray-100 font-bold bg-sky-600 mt-4">
                      Add Rewviews
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
