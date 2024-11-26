import {React, useState} from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import nija_logo from '../assets/nija.svg'
import { navItems, navItems_m } from '../constants'
import { nija } from '../constants'

const NaijaLogo = () => {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <circle opacity="0.3" cx="15" cy="15" r="15" fill="#008751" />
        <mask
          id="mask0_37774_3385_bc"
          maskUnits="userSpaceOnUse"
          x="6"
          y="7"
          width="18"
          height="16"
          style={{ maskType: 'alpha' }}
        >
          <rect
            x="6.91406"
            y="7.29712"
            width="16.1724"
            height="15.4023"
            rx="3"
            fill="#E94D1E"
          />
        </mask>
        <g mask="url(#mask0_37774_3385_bc)">
          <path
            d="M0.324219 4.1355H29.5134V26.0274H0.324219V4.1355Z"
            fill="#008751"
          />
          <path
            d="M11.1875 4.05444H19.2956V25.9463H11.1875V4.05444Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_37774_3385_bc">
            <rect
              width="29.1892"
              height="21.8919"
              fill="white"
              transform="translate(0.324219 4.1355)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  };

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
                    <img className="h-15 w-20 ml-4" src={logo} alt="logo"/>
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
                    <NaijaLogo />
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