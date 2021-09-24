import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./assets/img/house.svg";
import about from "./assets/img/nerd.svg";
import project from "./assets/img/project.svg";
import menu from "./assets/img/menu.svg";
import Testimony from "../components/testimonials/Testimonials";
import Works from "../components/works/Works";
import Menu from "./menu/Menu";

const MobileNavbar = () => {
  return (
    <>
      <nav class="lg:hidden fixed bottom-2 left-2 right-2 w-full border border-t-8 border-gray-900 bg-white flex-row flex overflow-x-hidden ">
        <div
          class="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-100 py-2"
        >
          <NavLink to="/" activeStyle={{ color: "purple" }} exact>
            <img width="18px" src={Home} alt="home" />
            <span class="text-sm capitalize">Home</span>
          </NavLink>
        </div>

        <div
          class="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-100 py-2"
        >
          <NavLink to="/Works" activeStyle={{ color: "purple" }}>
            <img width="24px" src={about} alt="about-pics" />

            <span class="text-sm capitalize">About</span>
          </NavLink>
        </div>

        <div
          class="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-100"
        >
          <NavLink to="/Testimony" activeStyle={{ color: "purple" }}>
            <img
              width="18px"
              src={project}
              alt="projects-pics"
              className="items-center justify-center"
            />
            <span class="text-sm capitalize">Projects</span>
          </NavLink>
        </div>

        <div class="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-100 visited:text-purple-600">
        <NavLink
          to= { <Menu /> }
          activeStyle = {{color: "purple"}}
          >

         <img width="18px" src = { menu } alt= "menu-pics"/>
          <span class="text-sm capitalize">More</span>
        </NavLink>
        </div>
        {/* <NavLink
        to = '/'
        activeStyle={{ color: "purple" }}
        >
          <div>
            <button class="outline-none mobile-menu-button">
              <svg
                class="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <pathName d="M4 6h16M4 12h16M4 18h16"></pathName>
              </svg>
            </button>
          </div>
        </NavLink> */}
      </nav>
    </>
  );
};

export default MobileNavbar;
