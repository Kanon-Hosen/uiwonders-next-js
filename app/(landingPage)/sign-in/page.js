"use client"

import Link from "next/link";
import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebaseConfig";

function SignIn() {


  return (
    <div className="flex items-center justify-center w-full md:h-screen mt-7 md:mt-0">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl border">
        <h1 className="text-2xl font-bold text-center">Sign in</h1>
        <form novalidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label for="username" className="block dark:text-gray-400">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              required
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-200 focus:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border-2 border-gray-200 focus:border-violet-400"
            />
            <div className="flex justify-end text-xs underline cursor-pointer">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm bg-gradient-to-r  to-blue-500 from-blue-800  text-white ">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-800">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            aria-label="Log in with Google"
            className="p-3 rounded-md border"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <Link href="/sign-up" className="underline text-gray-800 font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
