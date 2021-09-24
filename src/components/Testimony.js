import React from "react";
import { Link } from "react-router-dom";
import proj1 from "./assets/img/proj1.png";
import proj2 from "./assets/img/proj2.jpg";
import arrow from "./assets/img/arrow2.png";

const Testimonials = () => {
  return (
    <div className="justify-center bg-white py-24 ">
      <div className="font-bold ">
        <h1 className="text-gray-900 text-4xl md:text-3xl md:text-blue-900 text-center py-8">
          Project
        </h1>

        <Link
          to="/"
          className="md:flex md:flex-row md:pb-8 hover:transition duration-500 ease-in transform hover:-translate-y-1 hover:scale-110"
        >
            <div>
          <img
            src={ proj2 }
            alt=""
            className="rounded-tl-3xl rounded-tr-3xl p-3 mr-4"
           
          />
          </div>
          <div>
          <h1 className="md:px-28 text-3xl py-4 pl-4 pr-8 hover:underline">
            Creating an amazing page for a SaaS
          </h1>
          <h3 className="md:px-28 text-sm pt-2 pl-4 pr-12">
            Could you build and launch a product that is profitable in 63 days?
            FeedHive creator Simon Høiberg did exactly that! FeedHive is a
            scheduling tool for social media. It started with Twitter, b eing a
            tool that could only schedule tweets in the future but has rapidly
            grown both in terms of features and users.
          </h3>
          <button className="md:px-28 flex text-blue-900 font-bold pl-4 pt-4 pb-4 hover:text-green-900 hover:transition duration-1000 hover:transfrom scale-100">
            Read More
            <img src={arrow} alt="right arrow" width="24px" />
          </button>
          </div>
        </Link>
        <Link
          to="/"
          className="md:flex md:flex-row md:pb-8 hover:transition duration-500 ease-in transform hover:-translate-y-1 hover:scale-110"
        >
            <div>
          <img
            src={ proj2 }
            alt=""
            className="rounded-tl-3xl rounded-tr-3xl p-3 mr-4"
           
          />
          </div>
          <div>
          <h1 className="md:px-28 text-3xl py-4 pl-4 pr-8 hover:underline">
            Creating an amazing page for a SaaS
          </h1>
          <h3 className="md:px-28 text-sm pt-2 pl-4 pr-12">
            Could you build and launch a product that is profitable in 63 days?
            FeedHive creator Simon Høiberg did exactly that! FeedHive is a
            scheduling tool for social media. It started with Twitter, b eing a
            tool that could only schedule tweets in the future but has rapidly
            grown both in terms of features and users.
          </h3>
          <button className="md:px-28 flex text-blue-900 font-bold pl-4 pt-4 pb-4 hover:text-green-900 hover:transition duration-500 hover:transfrom scale-100">
            Read More
            <img src={arrow} alt="right arrow" width="24px" />
          </button>
          </div>
        </Link>
        <Link
          to="/"
          className="md:flex md:flex-row md:pb-8 hover:transition duration-500 ease-in transform hover:-translate-y-1 hover:scale-110"
        >
            <div>
          <img
            src={ proj2 }
            alt=""
            className="rounded-tl-3xl rounded-tr-3xl p-3 mr-4"
           
          />
          </div>
          <div>
          <h1 className="md:px-28 text-3xl py-4 pl-4 pr-8 hover:underline">
            Creating an amazing page for a SaaS
          </h1>
          <h3 className="md:px-28 text-sm pt-2 pl-4 pr-12">
            Could you build and launch a product that is profitable in 63 days?
            FeedHive creator Simon Høiberg did exactly that! FeedHive is a
            scheduling tool for social media. It started with Twitter, b eing a
            tool that could only schedule tweets in the future but has rapidly
            grown both in terms of features and users.
          </h3>
          <button className="md:px-28 flex text-blue-900 font-bold pl-4 pt-4 pb-4 hover:text-green-900 hover:transition duration-500 hover:transfrom scale-100">
            Read More
            <img src={arrow} alt="right arrow" width="24px" />
          </button>
          </div>
        </Link>

        <Link
          to="/"
          className="md:flex md:flex-row md:pb-8 hover:transition duration-500 ease-in transform hover:-translate-y-1 hover:scale-110"
        >
            <div>
          <img
            src={ proj2 }
            alt=""
            className="rounded-tl-3xl rounded-tr-3xl p-3 mr-4"
           
          />
          </div>
          <div>
          <h1 className="md:px-28 text-3xl py-4 pl-4 pr-8 hover:underline">
            Creating an amazing page for a SaaS
          </h1>
          <h3 className="md:px-28 text-sm pt-2 pl-4 pr-12">
            Could you build and launch a product that is profitable in 63 days?
            FeedHive creator Simon Høiberg did exactly that! FeedHive is a
            scheduling tool for social media. It started with Twitter, b eing a
            tool that could only schedule tweets in the future but has rapidly
            grown both in terms of features and users.
          </h3>
          <button className="md:px-28 flex text-blue-900 font-bold pl-4 pt-4 pb-4 hover:text-green-900 hover:transition duration-500 hover:transfrom scale-100">
            Read More
            <img src={arrow} alt="right arrow" width="24px" />
          </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
