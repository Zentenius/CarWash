"use client"
import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'

type Props = {}

function Navbar({}: Props) {
  return (
    <div className="navbar bg-white z-10 fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li><a href="#hero">Home</a></li>
      <li><a href='#service'>Our Serivces</a></li>
      <li><a href='#footer'> Contact Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl rounded-full">
        <Image src={logo} alt='logo' width={50} height={50} className='rounded-full'/>
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-black font-semibold">
      <li><a href="#hero">Home</a></li>
      <li><a href='#service'>Our Serivces</a></li>
      <li><a href='#footer'> Contact Us</a></li>
      
    </ul>
  </div>
  <div className="navbar-end">
  <a className="btn" href='https://linktr.ee/coolrunningsauto'>Book an appointment</a>
  </div>
</div>
  )
}

export default Navbar 