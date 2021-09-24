import React from "react";
import Logo from "../assets/img/pics.png";

function Cards() {
  return (
    <div>
      <h1 className="pl-24 text-2xl text-gray-900">
        What people are saying about my Projects
      </h1>
      <div class="container container w-full m-auto flex flex-wrap flex-col md:flex-row items-center justify-start">
        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-48 border shadow shadow-2xl">
            <img
              class="lg:w-48 m-4 rounded-full py-3 px-2 border-blue-700 border-2  h-24"
              src={Logo}
            />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r pb-4 pt-8 pl-8 pr-8 flex flex-col justify-between">
              <div class="text-black text-sm">
                Dan's core strength is his ability to adapt and apply critical
                thinking to a problem. He doesn't just take a project and do it,
                he will break it down, check it ticks all the boxes (including
                the ones you forgot about!), and then deliver something beyond
                your expectations. Work with him without hesitation!
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border shadow shadow-2xl">
            <img
              class="lg:w-48 m-4 rounded-full py-3 px-2 border-blue-700 border-2 h-24"
              src={Logo}
            />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between">
              <div class="text-black text-sm p-2 mb-2">
                Dan's core strength is his ability to adapt and apply critical
                thinking to a problem. He doesn't just take a project and do it,
                he will break it down, check it ticks all the boxes (including
                the ones you forgot about!), and then deliver something beyond
                your expectations. Work with him without hesitation!
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-2xl">
            <img
              class="lg:w-48 m-4 rounded-full py-3 px-2 border-blue-700 border-2 h-24"
              src={Logo}
            />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="text-black text-sm mb-2">
                Dan's core strength is his ability to adapt and apply critical
                thinking to a problem. He doesn't just take a project and do it,
                he will break it down, check it ticks all the boxes (including
                the ones you forgot about!), and then deliver something beyond
                your expectations. Work with him without hesitation!
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border shadow shadow-2xl">
            <img
              class="lg:w-48 m-4 rounded-full py-3 px-2 border-blue-700 border-2 h-24"
              src={Logo}
            />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="text-black text-sm mb-2 leading-tight">
                Dan's core strength is his ability to adapt and apply critical
                thinking to a problem. He doesn't just take a project and do it,
                he will break it down, check it ticks all the boxes (including
                the ones you forgot about!), and then deliver something beyond
                your expectations. Work with him without hesitation!
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-2xl">
            <img
              class="lg:w-48 m-4 rounded-full py-3 px-2 border-blue-700 border-2 h-24"
              src={Logo}
            />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="text-black text-sm mb-2 leading-tight">
                Dan's core strength is his ability to adapt and apply critical
                thinking to a problem. He doesn't just take a project and do it,
                he will break it down, check it ticks all the boxes (including
                the ones you forgot about!), and then deliver something beyond
                your expectations. Work with him without hesitation!
              </div>
            </div>
          </div>
        </div>

        <div class="w-full lg:w-1/2 p-3">
          <div class="flex flex-col lg:flex-row-reverse rounded overflow-hidden h-auto lg:h-32 border shadow shadow-2xl">
            <img
              class="lg:w-48 m-4 rounded-full py-3 px-2 border-blue-700 border-2 h-24"
              src={Logo}
            />
            <div class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="text-black text-sm mb-2 leading-tight">
                Dan's core strength is his ability to adapt and apply critical
                thinking to a problem. He doesn't just take a project and do it,
                he will break it down, check it ticks all the boxes (including
                the ones you forgot about!), and then deliver something beyond
                your expectations. Work with him without hesitation!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
