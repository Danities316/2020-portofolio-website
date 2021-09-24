import React from "react";
// import { useState } from 'react';
import arrow from '../assets/img/arrow.png';
import works from "../works/Works";

function Topbar() {
  // const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav class="bg-gray-900 shadow dark:bg-gray-800">
      <div class="container px-6 py-8 mx-auto lg:flex lg:justify-between lg:items-center">
        <div class="lg:flex lg:items-center">
          <div class="flex items-center justify-between">
            <div>
              <a
                class="text-2xl font-bold text-white dark:text-white lg:text-3xl hover:text-gray-500 dark:hover:text-gray-300"
                href="#Intro"
              >
                Danitiestech
              </a>
            </div>

            {/*  Mobile menu button */}
            <div class="flex lg:hidden">
              <button
                type="button"
                class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center mt-6 lg:flex lg:mt-0 lg:-mx-4 lg:px-16 lg:flex-row lg:items-center lg:text-2xl hover:text-gray-800 dark:hover:text-gray-200 text-white">
          <a
            href="#"
            class="mx-2 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 lg:pr-12"
            aria-label="Reddit"
          >
            About
          </a>

          <a
            href="#"
            class="mx-2 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 lg:pr-8"
            aria-label="Facebook"
          >
            Portfolio
          </a>
          <a
            href={ works }
            class="mx-2 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 lg:pr-8"
            aria-label="Github"
          >
            Projects
          </a>
          <a
            href="#"
            class="mx-2dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 lg:pr-8"
            aria-label="Github"
          >
            Testimonials
          </a>
          <button class="hidden lg:bg-green-800 lg:hover:bg-green-900 lg:text-white lg:font-bold lg:py-2 lg:px-6 rounded lg:text-xl lg:flex lg:items-center">Hire Me<img class ="lg: mx-2"width= "30px"src ={ arrow } alt ="arrow" /></button>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
