"use client"
import React, { useEffect, useState } from 'react';
import { BsBookmark } from 'react-icons/bs';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import Sppiner from '@/components/Sppiner';
function Details({ params }) {

    const [data, setData] = useState({});
    const [isLoading , setIsloading] = useState(false)
    const { name } = params;
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const url = decodeURI(name)
    useEffect(() => {
        fetch(`/api/design/${name}?id=${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data?.data);
                setIsloading(true)
        })
     },[])
    
    if (!isLoading) {
        return <div className='flex items-center justify-center w-full h-screen'><Sppiner/></div>
    }

  return (
      <div className='md:px-8 px-6 my-10'>
          <div className='w-full flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:px-20'>
              <div className='flex flex-col gap-1'>
                  <h1 className='font-semibold text-3xl'>{url}</h1>
                  <div className='flex items-center gap-6'>
                      <p>Design by <span className='text-blue-500 underline'>{data?.authorName}</span></p>
                      {/* <p className='font-semibold'>Download by 930 people</p> */}
                  </div>
              </div>
              <div className='flex items-center gap-6'>
                  <div className='py-3 px-3 rounded-md  text-lg cursor-pointer hover:bg-gray-100 transition-colors border-2' title='Save'>
                      <BsBookmark/>
                  </div>
                  <a href={data?.downloadLink} target='_blank'>
                  <button className='px-5 py-3 rounded-md bg-gradient-to-l from-blue-500 via-indigo-500 to-violet-700 text-white font-semibold'>Download</button>
                </a>
              </div>
          </div>
          <div className='w-full h-full mt-8 flex items-center justify-center'>
              <Image className='w-full h-full bg-center bg-cover' src={data?.images[0]} width={1100} height={800} alt='Image'/>
          </div>
      </div>
  )
}

export default Details