import React from 'react'
import tempPic from '../../assets/hero.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  
  return (
    <section id="about" className="bg-[#F9FAFB]">
      <div className="lg:bg-gray-50 lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
        <div className="mx-8 md:7/12 lg:w-1/2">
        <h2 className="mb-4 text-3xl font-bold text-secondary sm:text-4xl md:text-[42px]">
        የሚሸጥ እና የሚከራይ ቤት ይፈልጋሉ?
              </h2>
          <p className="my-8 text-gray-600">
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>

          <Link to='/search' className="self-center w-auto px-8 mr-4 border-0 text-white text-lg btn hover:bg-secondary bg-primary hover:text-white">
            Get started
          </Link>
          <Link to='/about' className="self-center w-auto px-8 font-semibold tmr-16 text-[#9333EA] hover:text-secondary">
           About
          </Link>
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
            className="rounded-3xl animate-pulse animate-[pulse_15s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero