import {React, useState} from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import { navItems } from '../constants'

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawerOpen( !mobileDrawerOpen);
    }

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
                    <a href='#' className=' py-3 px-10 border rounded-md bg-[#40196d] text-white text-base
                     transform transition-transform duration-300 hover:translate-y-[-4px]
                     '>
                        Join Kuda
                    </a>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 
                flex flex-col justify-center items-center lg:hidden'>
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index}>
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