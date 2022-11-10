import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../hooks/UseTitle";

const Updated = () => {
  const storeUser = useLoaderData();
  const [user, setUser] = useState(storeUser);
  useTitle('updated')

  // console.log('data',user);
  const handleUpdateUser = (event) => {
    event.preventDefault();
    console.log(user);
    fetch(`https://quick-food-server.vercel.app/reviews/${storeUser._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {  
        if(data.modifiedCount > 0){
            toast.success('Reviews Updated SuccessFully', {autoClose: 500})
        }
        console.log(data)
    })
    
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = {...user}
    newUser[field] = value;
    setUser(newUser)
  }

  return (
    <div className="lg:w-1/2 w-full mx-auto mb-12">
       <div className="relative">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-26 lg:pb-4">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center -z-50">
        <Link href="/" className="mb-6 sm:mx-auto flex justify-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 -z-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400 -z-50"
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
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl sm:leading-none -z-50">
            <span className="-z-50">Updated Your Own</span>
            <br className="hidden md:block -z-50" />
            Reviews{' '}
            <span className="relative inline-block px-2 -z-50">
              <div className="absolute inset-0 transform -skew-x-12 bg-sky-600" />
              <span className="relative text-rose-700">Here</span>
            </span>
          </h2>
          <p className="mb-6 text-base text-gray-500 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo. Sed ut perspiciatis unde omnis.
          </p>
        </div>
      </div>
    </div>
      <form onSubmit={handleUpdateUser} className='lg:px-0 px-4'>
        <div className="space-y-1 text-sm mt-4">
          <label htmlFor="message" className="text-lg font-bold block mt-2">
            Type Update Reviews*
          </label>
          <textarea
          onChange={handleInputChange}
            name="message"
            defaultValue={storeUser.message}
            className="textarea text-lg h-[200px] rounded-md textarea-bordered w-full"
            placeholder="Type Update Reviews"
          ></textarea>
        </div>
        <div>
          <button className="bg-sky-700 w-full p-2 mt-4 rounded-3xl text-white">Updated</button>
        </div> 
      </form>
    </div>
  );
};

export default Updated;
