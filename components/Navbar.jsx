"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../images/logo.png";
import Image from "next/image";
function Navbar() {
  return (
    <div className="md:px-16 px-6  flex  md:justify-center justify-between  gap-8 h-[12vh] items-center shadow">
      <div className="md:flex hidden items-center gap-5">
        <Link
          href="/"
          className=" text-black md:flex hidden  font-semibold hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/collection"
          className=" text-black md:flex hidden  font-semibold hover:text-blue-500 transition-colors"
        >
          Collection
        </Link>
      </div>
      <div className="">
        <Link href="/">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-700 to-blue-500 font-extrabold md:text-2xl text-lg">
            UI Wonders
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-5">
        {/* <Link href='/dashboard' className="font-semibold text-black" >Dashboard</Link> */}
        <Link
          href="/collection"
          className=" text-black md:hidden flex  font-semibold hover:text-blue-500 transition-colors"
        >
          Collection
        </Link>
        <Link
          href="/sign-in"
          className=" text-black  font-semibold hover:text-blue-500 transition-colors"
        >
          Log in
        </Link>
        <Link
          href="/sign-up"
          className=" text-black  font-semibold hover:text-blue-500 transition-colors"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
