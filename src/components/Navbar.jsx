import {React, useState} from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { navItems, navItems_m } from '../constants'
import { nija } from '../constants'

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen( !mobileDrawerOpen);
    }

  return (
    <nav className='sticky top-0 z-50 py-3 shadow-bar_shadow border-neutral-700/80 '>
        <div className='container px-4 mx-auto relative text-sm text-[#40196d]'>
            <div className='flex justify-between items-center text-base '>
                <div className='flex items-center flex-shrink-0'>
                    <img className="h-15 w-20 ml-4" src={logo}alt="logo"/>
                    <ul className='hidden lg:flex ml-14 space-x-12 font-medium '>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} >{item.label}</a>
                        </li>
                    ))}
                </ul>
                </div>
               
                <div className='hidden lg:flex justify-center space-x-12 items-center '>
                    <a href='#' className='py-3 px-5  rounded-md font-medium'>
                        Sign in 
                    </a>
                    <a href='#' className=' py-3 px-10 font-medium border rounded-xl bg-[#40196d] text-white text-base
                     transform transition-transform duration-300 hover:translate-y-[-4px]
                     '>
                        Join Kuda
                    </a>
                    <img className='w-10 h-10' src={nija}/>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className='fixed right-0 z-20 bg-white w-full p-12 
                flex flex-col justify-center items-left lg:hidden'>
                    <div className='flex space-x-6'>
                        <a href='#' className='py-2 px-6 border rounded-md bg-[#40196d] text-white font-medium'>
                            Join kuda
                        </a>
                        <a href='#' className='py-2 px-6 border rounded-md bg-[#eff1ff] text-[#40196d] font-medium'>
                            Sign In
                        </a>
                    </div>
                    <ul>
                        {navItems_m.map((item, index) => (
                            <li key={index} className='py-6  border-b border-gray-300 py-2 font-medium'>
                                <a href={item.href}>{ item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar