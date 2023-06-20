import Link from 'next/link'
import React from 'react'

interface NavbarProps {
  active: boolean
}
const Navbar = (props : NavbarProps) => {
  const {active} = props
  return (
    <div className={`fixed top-0 left-0 right-0 py-2 z-50 md:px-10 px-2 ${active ? 'bg-slate-900 text-white shadow-lg duration-300' : 'bg-transparent text-black shadow-none duration-300' }`}>
        <div className='flex p-2 items-center'>
            <div className={`font-medium ${active ? 'w-[40px] h-[40px] rounded-full bg-[url("/logo.png")] bg-cover' : "bg-transparent"}`}>
              {/* {!active && 'Zidan Fikri Aditya'} */}
            </div>
            <div className='ml-auto'>
              <ul className='flex gap-3 font-semibold text-white'>
                <li><Link href={'#'}>Home</Link></li>
                <li><Link href={'#about'}>About</Link></li>
                <li><Link href={'#contact'}>Contact</Link></li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar