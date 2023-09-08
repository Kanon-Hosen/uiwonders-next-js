import Image from 'next/image'
import React from 'react'
// import {HiMiniCheckBadge} from 'react-icons/hi2'
import Link from 'next/link'
function DesignCard({data}) {
  return (
      <Link href={`/design/${data?.name}?id=${data?._id}`} className=' p-2 rounded-md cursor-pointer group'>
      <div className='h-60 bg-slate-100 overflow-hidden rounded-md relative'>
        <Image src={data?.images[0]} fill/>
        <h1 className='text-base font-semibold absolute bottom-0 w-full h-14 bg-gradient-to-b from-black/5 to-black/70 flex items-center p-3 text-white translate-y-full transition-transform group-hover:translate-y-0 duration-300'>{data?.name}</h1>
              
          </div>
      <div className='my-4 flex flex-col gap-1'>
        {/* <div className='flex items-center gap-1'>
          <p className='font-semibold text-sm'>UI Wonders</p>  
          <div className='text-green-500'>
            <HiMiniCheckBadge/>
          </div>
        </div> */}
        <h1 className='font-semibold'>{data?.name}</h1>
        <p className='italic text-sm text-neutral-700'>Design by- <span className='text-blue-500 hover:underline cursor-pointer'>{ data?.authorName}</span></p>
          </div>
    </Link>
  )
}

export default DesignCard