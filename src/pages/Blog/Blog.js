import React from "react";
import useTitle from "../../hooks/UseTitle";

const Blog = () => {
    useTitle('blog')
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 mt-16 pb-12">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-6 py-px mb-4 text-base font-semibold tracking-wider text-white uppercase rounded-full bg-sky-600">
            Our Blog
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block -z-50"
            >
              <defs>
                <pattern
                  id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative -z-50">Some</span>
          </span>{" "}
          Most important interviews question
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          An effective FAQ resource can educate, inform, and naturally guide the
          user through your website’s content and toward the goals.
        </p>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-2xl font-bold text-slate-900">
          Difference between SQL and NoSQL??
        </div>
        <div className="collapse-content">
          <p className="font-bold text-gray-600">
            SQL is the programming language used to interface with relational
            databases. (Relational databases model data as records in rows and
            tables with logical links between them). NoSQL is a class of DBMs
            that are non-relational and generally do not use SQL.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-3">
            There are five practical differences between SQL and NoSQL:
          </h2>
          <li className="list-decimal font-bold text-gray-600">Language</li>
          <li className="list-decimal font-bold text-gray-600">Scalability</li>
          <li className="list-decimal font-bold text-gray-600">Structure</li>
          <li className="list-decimal font-bold text-gray-600">Properties</li>
          <li className="list-decimal font-bold text-gray-600">
            Support and communities
          </li>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-2xl font-bold text-slate-900">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p className="font-bold text-gray-600">
            For beginning developers, JSON stands for JavaScript Object Notation
            and is a text-based format for transmitting data across web
            applications. It stores information in an easy-to-access manner,
            both for developers and computers. It can be used as a data format
            by any programming language and is quickly becoming the preferred
            syntax for APIs, surpassing XML. JWTs differ from other web tokens
            in that they contain a set of claims. Claims are used to transmit
            information between two parties. What these claims are depends on
            the use case at hand. For example, a claim may assert who issued the
            token, how long it is valid for, or what permissions the client has
            been granted.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-2xl font-bold text-slate-900">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <li className="list-none font-bold text-gray-600">
            <span className="text-xl font-bold text-gray-800">1. NodeJS :</span>{" "}
            NodeJS is a cross-platform and opensource Javascript runtime
            environment that allows the javascript to be run on the server-side.
            Nodejs allows Javascript code to run outside the browser. Nodejs
            comes with a lot of modules and mostly used in web development.
          </li>
          <li className="list-none font-bold text-gray-600">
            <span className="text-xl font-bold text-gray-800">
              2. JavaScript :
            </span>{" "}
            Javascript is a Scripting language. It is mostly abbreviated as JS.
            It can be said that Javascript is the updated version of the ECMA
            script. Javascript is a high-level programming language that uses
            the concept of Oops but it is based on prototype inheritance.
          </li>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-2xl font-bold text-slate-900">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p className="font-bold text-gray-600">
            NodeJS receives multiple client requests and places them into
            EventQueue. NodeJS is built with the concept of event-driven
            architecture. NodeJS has its own EventLoop which is an infinite loop
            that receives requests and processes them. EventLoop is the listener
            for the EventQueue. If NodeJS can process the request without I/O
            blocking then the event loop would itself process the request and
            sends the response back to the client by itself. But, it is possible
            to process multiple requests parallelly using the NodeJS cluster
            module or worker_threads module.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
