import Link from 'next/link'
import React from 'react'

function Sidebar({toggle, setToggle}) {
  return (
    <div className={` ${toggle ? "-translate-x-full duration-300" : "-translate-x-0 duration-300"}  bg-neutral-900 md:w-full w-1/2  absolute md:translate-x-0 text-white p-4 h-screen md:sticky top-[8vh] left-0 flex flex-col gap-1`}>
          <Link onClick={()=>setToggle(true)} href='/' className='px-4 py-2 hover:bg-neutral-700 transition-colors rounded-md w-full'>Home</Link>
          <Link onClick={()=>setToggle(true)} href='/dashboard' className='px-4 py-2 hover:bg-neutral-700 transition-colors rounded-md w-full'>Dashboard</Link>
          <Link onClick={()=>setToggle(true)} href='/dashboard/add-design' className='px-4 py-2 hover:bg-neutral-700 transition-colors rounded-md w-full'>Add Design</Link>
    </div>
  )
}

export default Sidebar