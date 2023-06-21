"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Navbar from './partials/Navbar'
import Header from './partials/Header';

const AppLayouts = ({ children } : { children: any }) => {
  const [activeNav, setActiveNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (scrollY > 10) {
          setActiveNav(true)
        } else {
          setActiveNav(false)
        }
    })

    if (scrollY > 10) {
      setActiveNav(true)
    }
  }, [])

  return (
    <div className='bg-slate-300 min-h-[1000px]'>
      <Navbar active={activeNav} />
      {children[0] ?? children}
      {children[1]}
    </div>
  )
}

const AddHeader = ({show} : {show : boolean}) => {
  return show ? <Header /> : <></>
}

const LayoutBody = ({children} : {children: React.ReactNode}) => {
  return (
      <div>
      {children}
      </div>
    )
}

AppLayouts.AddHeader = AddHeader
AppLayouts.Body = LayoutBody

export default AppLayouts