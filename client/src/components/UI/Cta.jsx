import React from 'react'

const cta = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-[#0d9488] to-primary md:bg-gradient-to-r">
      <div className="container px-6 m-auto text-center md:px-12 lg:px-20">
        <h2 className="mb-8 text-4xl font-bold text-white md:text-4xl">
          Sign to your account to get the full experiance
        </h2>
        <a
          href="#"
          className="relative flex items-center justify-center w-full h-12 px-8 mx-auto before:absolute before:inset-0 before:rounded-full before:bg-secondary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max "
        >
          <span className="relative text-base font-semibold text-white">
            Create an Account now
          </span>
        </a>
      </div>
    </div>
  );
}

export default cta