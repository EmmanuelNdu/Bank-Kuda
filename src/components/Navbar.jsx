import React from 'react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 py-3 shadow-bar_shadow border-neutral-700/80 '>
        <div className='container px-4 mx-auto relative text-sm '>
            <div className='flex justify-between items-center text-base '>
                <div className='flex items-center flex-shrink-0'>
                    <img height={90} width={90}  className="ml-4" src={logo}alt="logo"/>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-12 '>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} >{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className='hidden lg:flex justify-center space-x-12 items-center '>
                    <a href='#' className='py-3 px-5  rounded-md '>
                        Sign in 
                    </a>
                    <a href='#' className=' py-3 px-10 border rounded-md bg-[#40196d] text-white text-base'>
                        Join Kuda
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar