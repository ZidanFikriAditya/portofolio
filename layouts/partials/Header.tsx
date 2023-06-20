import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className={`bg-slate-300 relative z-0 duration-300 py-[5rem] pb-[6rem]  px-10 text-center grid grid-cols-12`}>
        <div className='bg-[url("/header.png")] bg-[50%,0] bg-[left] bg-no-repeat blur-sm absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.2)]'></div>
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5),rgba(0,0,0,0.0))]'></div>
        <div className='col-span-12 md:col-span-4 w-[250px] z-10 h-[250px] rounded-full bg-[url("/my-profile.jpeg")] bg-cover mx-auto' ></div>
        <div className='col-span-12 md:col-span-8 z-10 text-center md:text-left'>
            <h2 className='text-3xl font-semibold  text-white mt-5'>
            Zidan Fikri Aditya | Web Developer
            </h2>
           <p className='text-center md:text-left text-white my-1 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur placeat incidunt, molestias quidem corporis numquam eius ut sit, suscipit id nihil quae earum blanditiis ea, temporibus debitis a minima?</p>
          <div className='mt-4'><Link href={'#contact'} className="px-10 py-3 bg-slate-400 hover:bg-slate-600 hover:duration-300 rounded-2xl text-white font-semibold" >Contact</Link></div>
        </div>
      </div>
  )
}

export default Header