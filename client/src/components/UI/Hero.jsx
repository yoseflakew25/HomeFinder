import React from 'react'
import tempPic from '../../assets/hero.jpg'
import { useState } from 'react';
const Hero = () => {
  
  return (
    <section id="about" className="bg-[#F9FAFB]">
      <div className="lg:bg-gray-50 lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
        <div className="mx-8 md:7/12 lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl ">
            Nuxt development is carried out by passionate developers
          </h1>
          <p className="my-8 text-gray-600">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>

          <button className="self-center w-auto px-8 mr-4 border-0 text-white text-lg btn hover:bg-primary bg-secondary hover:text-white">
            Browse Now
          </button>
          <button className="self-center w-auto px-8 mr-16 border-0 text-white text-lg btn hover:bg-secondary bg-primary hover:text-white">
            Browse Now
          </button>
        </div>
        {/* <div className="md:5/12 lg:w-1/2">
          <img
            src={tempPic}
            alt="image"
            loading="lazy"
            width=""
            height=""
            className="rounded-3xl"
          />
        </div> */}
        <div className="md:5/12 lg:w-1/2">
          <img
            src={tempPic}
            alt="image"
            loading="lazy"
            width=""
            height=""
            className="rounded-3xl animate-pulse animate-[pulse_7s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero