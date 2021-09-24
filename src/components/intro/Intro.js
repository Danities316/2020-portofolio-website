import React from "react";
import Logo from "../assets/img/hero1.png";
import Blob from "../assets/img/blob.svg";
import Next from "../assets/img/next.png";
import Portfolio from "../portfolio/Portfolio";
import ContactForms from "../forms/ContactForms";
import mark from "../assets/img/mark.png";
import arrowdown from "../assets/img/arrowdown.png";
import arrowf from "../assets/img/arrowf.png";
import Testimonials from "../Testimony";

function Intro() {
  return (
    <>
      <div className="md:hidden grid-rows-1 justify-center items-center pl-32 pt-4 bg-gray-900">
        <img
          className="rounded-full md:rounded-3xl px-8"
          width="250px"
          src={Logo}
          alt="welcome Img"
        />

        
        <p className="md:hidden text-l text-white -mt-2 -ml-2 pt-4 ">
          Freelance Developer, Danities Ichaba
        </p>
      </div>
      <div class="md:hidden bg-gray-900 py-4 px-14" >
      <a
              href="#"
              class="bg-green-400 rounded-full inline-flex ml-24 py-3 px-6 sans-serif text-xl text-white items-center justify-center hover:bg-green-600 hover:text-white"
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
            </a>
      </div>
      <div className="pl-8 bg-gray-900 text-white ">
        <h1 className="md:hidden text-3xl font-bold pt-8 pr-28 pb-8">
          Are You Looking For A Freelance WordPress Developer?
        </h1>
        {/* for desktop views */}

        <div className ="hidden md:flex">
        <div className="pl-8 bg-gray-900 text-white ">
        <h1 className="md:text-5xl text-3xl font-bold pt-8 pr-28 md:pr-14 pb-8">
          Are You Looking For A Freelance Developer?
        </h1>
        </div>

        <img
          className="md:mr-14 rounded-full md:rounded-full px-8"
          width="380px"
          src={Logo}
          alt="welcome Img"
        />
        </div>


        <p className="md:-mt-28 md:font-bold md:text-xl md:pl-8">Do you need:</p>

        <ul className="md:font-bold font-bold pl-4 pr-2 pt-8 md:text-xl">
          <li className="flex md:flex pb-4">

          <div>
          <img
          className="md:mr-1 mr-2"
          width="20px"
          src={mark}
          alt="Mark"
        />
          </div>
          <div>
          A WordPress expert with over 3 years experience?
          </div>

          </li>
          
          <li className="flex md:flex pb-4">
          <div>
          <img
          className="md:mr-1 mr-4 md:pt-4"
          width="28px"
          src={mark}
          alt="Mark"
        />
          </div>
          <div className="md: md:pt-4">
          A reliable, full stack freelance WordPress developer comfortable
            with custom, advanced and enterprise scale work?
          </div>
          </li>
    
          <li className="flex md:flex pb-4">
          <div>
          <img
          className="md:mr-1 mr-4 md:pt-4"
          width="28px"
          src={mark}
          alt="Mark"
        />
          </div>
          <div className="md: md:pt-4">
          A freelance software developer who can help with Gutenberg, the
            REST API and using WordPress as a headless CMS?
          </div>
          </li>

         <li className="flex md:flex pb-4">
          <div>
          <img
          className="md:mr-1 mr-5 md:pt-4"
          width="28px"
          src={mark}
          alt="Mark"
        />
          </div>
          <div className="md: md:pt-4">
          Guaranteed, professional development from 
          someone delivering successful projects for start ups, medium, large and big brands?
          </div>
          </li>
        </ul>
        <h3 className="md:text-xl md:font-bold md:pt-8 pl-8 pb-4 font-bold">
          You're in the right place. Here's what you can do next:
        </h3>
        
        <a
        
          href="#"
          className ="md:mr-4 md:pl-6 md:pr-6 md:pt-2 md:pb-2 md:text-xl md:font-bold md:rounded-2xl bg-green-400 border-2 border-white inline-flex items-center lg:bg-green-400 lg:inline-flex lg:w-auto w-96 rounded-3xl py-2 mt-8 mb-2 sans-serif text-2xl text-white justify-center hover:bg-transparent hover:text-white md:hover:border-2 md:hover:border-white"
        >
           
          <span>Hire me Today </span>
          <img
          className="px-2 pt-2"
          width ="38px"
          src={arrowf}
          alt="welcome Img"
        />
        
        </a>
        <a
          href="#"
          class="md:mr-4 md:pl-6 md:pr-6 md:pt-2 md:pb-2 md:text-xl md:font-bold md:rounded-2xl bg-transparent inline-flex items-center lg:bg-green-400 lg:inline-flex lg:w-auto w-96 border-2 rounded-3xl py-2 mt-2 mb-8 sans-serif text-2xl text-white justify-center hover:bg-green-600 hover:text-white"
        >
          <span>Keep Reading </span>
          <img
          className="px-2 pt-2"
          src={arrowdown}
          alt="welcome Img"
        />
        </a>
      </div>
      <Portfolio />
      
      
    </>
  );
}

export default Intro;
