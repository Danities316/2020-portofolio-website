import React from 'react';
import { bool, func} from 'prop-types';

function burger( { open, setOpen}) {
       
    return (
        <div
        open={open}
        onClick={() => {
          var x = document.querySelector("#menu");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
        }}
        className="flex flex-col space-around h-32 w-32 bg-transparent border-none cursor-pointer p-0 z-10 inset-x-0 top-5 inset-x-0 left-8 focus:outline-none absolute">
            <div className="w-14 h-2 mb-2 bg-white border-blue-100 rounded-3xl transition-all relative origin-top-left" /> 
            <div className="w-14 h-2 mb-2 bg-white border-blue-100 rounded-3xl transition-all relative origin-top-left " />
            <div className="w-14 h-2 bg-white border-blue-100 rounded-3xl transition-all relative origin-top-left"/>
        </div>
    )
}
burger.prototype ={
    open: bool.isRequired,
    setOpen: func.isRequired,
};
//https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
export default burger
