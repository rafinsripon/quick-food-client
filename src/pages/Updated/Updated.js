import React from "react";
import { useLoaderData } from "react-router-dom";

const Updated = () => {
    const useloadta = useLoaderData();
    console.log('data',useloadta);

  return (
    <div className="w-1/2 mx-auto">
        <h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quibusdam nemo iure cupiditate soluta suscipit voluptatum voluptatibus natus repellendus maxime!{useloadta.name}</h2>
      <form action="">
        <div className="space-y-1 text-sm mt-4">
          <label
            htmlFor="name"
            className="block dark:text-gray-500 text-lg font-semibold"
          >
            Name*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="You Name"
            className="w-full px-4 py-3 rounded-md border-2 border-gray-400 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400"
            required
          />
        </div>
        <div className="space-y-1 text-sm mt-4">
          <label
            htmlFor="email"
            className="block dark:text-gray-500 text-lg font-semibold"
          >
            Email*
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="You Email"
            className="w-full px-4 py-3 rounded-md border-2 border-gray-400 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-violet-400"
            required
          />
        </div>
        <div>
            <button className="bg-rose-700 w-full p-2 mt-4">Updated</button>
        </div>
      </form>
    </div>
  );
};

export default Updated;
