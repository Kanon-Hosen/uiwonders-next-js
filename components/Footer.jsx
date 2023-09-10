import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
      <div className='md:p-10 p-6 flex flex-col-reverse md:flex-row gap-5 items-center justify-between'>
          <p>© 2023 UI Wonders. All rights reserved.</p>
          <div className='flex items-center gap-6 text-neutral-700'>
              <Link href='/'>
                  Privacy
              </Link>
              <Link href='/'>
              Terms & Condition
              </Link>
          </div>
    </div>
  )
}

export default Footer