"use client"

import Sidebar from "@/components/Dashboard/Sidebar";
import "../globals.css";
import { useState } from "react";
import {FiMenu} from 'react-icons/fi'

export default function RootLayout({ children }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="grid md:grid-cols-5 relative gap-4">
      <div className="md:hidden px-6 h-[8vh] flex items-center font-semibold text-xl bg-slate-100 shadow"  >
        <div onClick={() => setToggle(!toggle)} className="cursor-pointer text-black">
        <FiMenu/>
        </div>
      </div>
      <div className="md:col-span-1 ">
        <Sidebar toggle={toggle} setToggle={setToggle} />
      </div>
      <div className="md:col-span-4">
      {children}

      </div>
    </div>
  );
}
