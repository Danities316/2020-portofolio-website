import React from "react";
import { Link, NavLink } from "react-router-dom";
import Pics from "./assets/img/pics.png";
import Next from "./assets/img/next.png";
import works from "../components/works/Works";
import Portfolio from '../components/portfolio/Portfolio';
import Intro from '../components/intro/Intro';
import ContactForms from '../components/forms/ContactForms';
import Testimonials from '../components/testimonials/Testimonials';
import Testimony from "./Testimony";

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <div className="lg:max-h-48 w-full">
      <div className="lg:h-8 flex justify-center items-center text-white bg-gray-800 z-2 sticky top-0 py-2 px-2">
        <h1>Black Lives Matter.....</h1>
      </div>

      <nav class="lg:h-32 flex items-center p-3  bg-gray-900  flex-wrap">
        <Link
          to="/"
          activeClassName="text-blue-800"
          className="hidden lg:bg-gray-100 lg:rounded-full lg:h-12 lg:w-24 lg:flex lg:justify-center lg:inline-flex lg:items-center lg:py-12 lg:px-2 lg:mr-2 lg:tracking-widest"
        >
          <img src={Pics} alt="my logo" />
        </Link>

        <button
          class="hidden text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
          data-target="#navigation"
        >
          <i class="material-icons">menu</i>
        </button>
        <div
          class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
          id="navigation"
        >
          <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link
              to="/"
              class="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded sans-serif text-2xl text-white items-center justify-center hover:bg-green-200 hover:text-black"
            >
              <span>Home</span>
            </Link>
            <Link
              to="/works"
              class="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded sans-serif text-2xl text-white items-center justify-center hover:bg-green-200 hover:text-black"
            >
              <span>About</span>
            </Link>
            <Link
              to="/Testimonials"
              class="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded sans-serif text-2xl text-white items-center justify-center hover:bg-green-200 hover:text-black"
            >
              <span>Services</span>
            </Link>

            <Link
              to= "/Testimony"
              class="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded sans-serif text-2xl text-white items-center justify-center hover:bg-green-200 hover:text-black"
            >
              <span>Projects</span>
            </Link>
            <Link
              to="#"
              class="lg:inline-flex lg:w-auto w-full px-8 py-2 rounded sans-serif text-2xl text-white items-center justify-center hover:underline hover:text-green-200"
            >
              <span>Blog</span>
            </Link>
            {/* Blur background button */}
            
            <Link
              to="#"
              class="text-white lg:bg-green-400 lg:inline-flex items-center lg:w-auto w-full px-4 rounded py-2 rounded sans-serif text-2xl text-whititems-center justify-center hover:bg-green-600 hover:text-white"
            >
           
              <span>Hire me Today </span>
              <span>
                <img
                  width="20px"
                  src={Next}
                  alt="my logo"
                  className="pl-1 hover:text-white"
                />
              </span>
            </Link>
            </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
