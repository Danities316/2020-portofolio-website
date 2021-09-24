import React from "react";
import { bool } from "prop-types";

function Menu() {
  return (
    <div
     id = "menu"
      className="lg:hidden flex flex-col justify-center bg-green-400 h-full w-full rounded-br-full text-left -mt-24 absolute transition duration-150 ease-in-out"
    >
      <a
       id = "menu"
        href="/"
        className="pl-48 pb-4 uppercase text-white font-bold tracking-tighter no-underline transition-color duration-150 ease-linear text-2xl"
      >
        <span role="img" aria-aria-label="home"></span>
        Home
      </a>

      <a
       id = "menu"
        href="/"
        className="pl-48 pb-4 text-white uppercase font-bold tracking-tighter no-underline transition-color duration-150 ease-linear text-2xl"
      >
        <span role="img" aria-aria-label="Projects"></span>
        Projects
      </a>

      <a
       id = "menu"
        href="/"
        className="pl-48 pb-4 text-white uppercase font-bold tracking-tighter no-underline transition-color duration-150 ease-linear text-2xl"
      >
        <span role="img" aria-aria-label="about us"></span>
        About Us
      </a>

      <a
       id = "menu"
        href="/"
        className="pl-48 pb-4 text-white uppercase font-bold tracking-tighter no-underline transition-color duration-150 ease-linear text-2xl"
      >
        <span role="img" aria-aria-label="contact us"></span>
        Contact Us
      </a>
    </div>
  );
}
Menu.prototype = {
  open: bool.isRequired,
};

export default Menu;
