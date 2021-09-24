import React from "react";

function ContactForms() {
  return (
    <>
      <div class="bg-gradient-to-tl from-green-600 via-green-400 to-yellow-500 h-auto flex items-center text-lg pb-24">
          
        <form action="" class="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
        <div >
              <h1 className="flex items-center text-4xl font-bold p-2 mb-4">Ready To Start A Project Together?</h1>
              <p className="flex items-center text-l font-bold justify-center mb-8">We believe in continuous improvement, which means we'll create your new super-fast headless website and then keep helping you to make it better.</p>
          </div>

          <div class="shadow">
            <div class="flex mb-4 items-center bg-white rounded-full border-gray-600 border-b py-2">
              <label
                for="name"
                class="w-28 text-right pr-8 mr-12 text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Put in your name"
                class="flex-1 px-8 py-2 pl-10 bg-transparent placeholder-gray-400  outline-none text-gray-900 overflow-ellipsis overflow-hidden"
              />
            </div>
            <div class="flex items-center bg-white  rounded-full border-gray-500 border-gray-600 border-b mb-4">
              <label
                for="email"
                class="w-28 text-right pr-8 mr-12 text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="hello@danitiestech.com"
                class="flex-1 px-2 py-4 pl-10 bg-transparent placeholder-gray-400 outline-none text-gray-900 overflow-ellipsis overflow-hidden"
              />
            </div>
            <div class="flex items-center bg-white rounded-full border-gray-900 border-gray-600 border-b mb-10">
              <label for="danities" class="w-28 text-right mr-12 text-gray-900">
                Company
              </label>
              <input
                type="text"
                name="danities"
                id="danities"
                placeholder="Danitiestech Digitsl"
                class="flex-1 px-4 py-4 pl-10 bg-transparent placeholder-gray-400 outline-none text-gray-900 overflow-ellipsis overflow-hidden"
              />
            </div>

            <div>
              <label
                for="message"
                class="w-28 -mt-4 text-left text-white text-xl"
              >
                Tell me about your project
              </label>
              <div class="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  class="shadow-lg pl-4 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full text-lg sm:text-sm border-gray-900 rounded-lg"
                  placeholder="Hi Danities, I've got a WordPress project that needs delivery professionally, on time and on budget"
                ></textarea>
              </div>
              <p class="mt-0 mb-4 text-lg text-white">
                Peoject from N200,000 | $500
              </p>
            </div>
          </div>
          <button class="bg-gray-900 rounded-full block w-72 rounded py-4 text-white font-bold shadow">
            Lets Your Perfect Website
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForms;
