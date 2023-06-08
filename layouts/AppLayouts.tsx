"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Navbar from './partials/Navbar'

const AppLayouts = ({ children } : { children: React.ReactNode }) => {
  const [activeNav, setActiveNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (scrollY > 10) {
          setActiveNav(true)
        } else {
          setActiveNav(false)
        }
    })
  }, [])

  return (
    <div className='bg-slate-600 min-h-[1000px]'>
      <Navbar active={activeNav} />
      <div className={`bg-slate-300 relative z-0 duration-300 py-[5rem] pb-[6rem]  px-10 text-center grid grid-cols-12`}>
        <div className='bg-[url("/header.png")]  bg-[50%,0] bg-[left] bg-no-repeat blur-sm absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.2)]'></div>
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.2)]'></div>
        <div className='col-span-4 w-[200px] z-10 h-[200px] rounded-full bg-[url("/logo.png")] bg-cover mx-auto' ></div>
        <div className='col-span-8 text-left z-10'>
            <h2 className='text-3xl font-semibold text-white mt-5'>
            Zidan Fikri Aditya
            </h2>
           <p className='text-left text-white my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur placeat incidunt, molestias quidem corporis numquam eius ut sit, suscipit id nihil quae earum blanditiis ea, temporibus debitis a minima?</p>
          <div className='mt-4'><Link href={'#contact'} className="px-10 py-3 bg-slate-400 hover:bg-slate-600 hover:duration-300 rounded-2xl text-white font-semibold" >Contact</Link></div>
        </div>
      </div>
      <div className='md:px-12 px-2'>
      {children}
      </div>
    </div>
  )
}

export default AppLayouts