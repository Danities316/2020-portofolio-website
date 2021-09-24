import React from 'react'
import Logo from "../assets/img/pics.png";
import proj1 from "../assets/img/proj1.png";
import proj2 from "../assets/img/proj2.jpg";


function Testimonials() {
    return (
        <div className="grid place-items-center min-h-screen ">
        <div className="p-4 max-w-5xl grid gap-4 sm:grid-cols-2 md:grid-cols-4" id="testimonials">
            <h1 className="text-4xl gap-4 font-extrabold sm:col-span-2 sm:grid sm: grid-cols-2 md:col-span-3 md:text-5xl md:grid-cols-3">
                <span className="bg-green-500 md:col-span-2">PROJECTS</span>
                </h1>
            <p className="md:col-start-1 md:col-span-2 md: pr-12 md: text-lg sm: row-start-2 sm:col-start-2 sm:self-center">Projects i build while learning Projects i build while learning Projects i build while learning Projects i build while learning</p>
            
            <div className="h-16 sm: h-auto sm:quare bg-blue-500">
                <h3 className="p-2 text-white">
                Projects i build while learning Projects
                 i build while learning Projects i build while 
                 learning Projects i build while learning
                </h3>
                <img src={ Logo } alt="personal pics "/>
            </div>
            <div className="h-16 sm: h-auto sm:square bg-green-500">
            <img src={ Logo } alt="personal pics "/>
            <p></p>
            </div>
            <div className="h-16 sm: h-auto sm:square bg-gray-500">
            <img src={ Logo } alt="personal pics "/>
            </div>
            <div className="h-16 md:col-start-2 sm: h-auto sm: square bg-green-500">
            <img src={ Logo } alt="personal pics "/>
            </div>
            <div className="h-16 sm: h-auto sm: square bg-gray-500">
            <img src={ Logo } alt="personal pics "/>
            </div>
            <div className="h-16 sm: h-auto sm: square bg-blue-500">
            <img src={ Logo } alt="personal pics "/>
            </div>
            <div className="h-16 sm: h-auto sm: square bg-gray-500">
            <img src={ Logo } alt="personal pics "/>
            </div>
            <div className="h-16 sm: h-auto sm: square bg-green-500">
            <img src={ Logo } alt="personal pics "/>
            </div>
            <p className="md:text-center md:px-4 self-center md:text-lg md:col-span-2">Projects i build while learning</p>
        </div>
        </div>
    )
}

export default Testimonials
