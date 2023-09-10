import Link from "next/link";
import React from "react";
import bg from '../images/bg.png'
import Image from "next/image";

function Hero() {
  return (
    <div className="md:px-8 md:h-[80vh] h-[75vh] relative px-5 my-10 flex md:items-center items-start justify-center flex-col gap-3">
      <Image src={bg} fill alt="bg" className="blur-2xl"/>
      {/* <div className="w-64 md:h-[500px]  h-[350px] z-10 blur-2xl rounded-full -rotate- bg-gradient-radial from-blue-100 to-blue-300 shadow-2xl shadow-blue-500 absolute top-0 left-72"></div>
      <div className="w-36  md:h-[500px]  h-[350px]  hidden md:block z-0 blur-2xl -rotate-90 bg-gradient-to-tl blur- shadow-2xl shadow-blue-500 rounded-full from-blue-100 to-blue-300 ml-10 absolute top-36 "></div>
      <div className="w-64 md:h-[500px]  h-[350px]   md:block z-10 bg-gradient-to-tl blur-2xl shadow-2xl shadow-blue-500 rounded-full from-blue-100 to-blue-300 absolute top-0  right-60 "></div> */}
      {/* <h1 className="capitalize text-black z-40">
        Downloads any web design and app design file free
      </h1> */}
      <h1 className="font-black drop-shadow-xl z-40 md:text-6xl text-6xl md:text-center leading-tight text-black">
        Welcome to  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
          UI Wonders
        </span>{" "}
      </h1>
      <p className="text-xl mt-1  text-black z-40 font-semibold">
      Explore free templates and UI kits to kickstart your next big project.
      </p>
      <Link
        href="/"
        className="px-4 py-3 bg-gradient-to-r z-40 mt-4 from-blue-500 via-indigo-500 to-violet-700 font-semibold rounded-md text-white"
      >
        Sign up for free
      </Link>
    </div>
  );
}

export default Hero;
