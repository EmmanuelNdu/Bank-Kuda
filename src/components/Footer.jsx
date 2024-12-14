import React from 'react'
import { personal } from '../constants'
import { Business } from '../constants'
import { company } from '../constants'
import { Help } from '../constants'
import { Transparency } from '../constants'
import logo from '../assets/logo.png'



const Footer = () => {
  return (
    <div className='flex justify-center space-x-12 pt-2'>
       <img className="h-16 w-28 ml-4 pt-4" src={logo} alt="logo"/>
        <div>
                <h3 className='text-md font-bold mb-4 text-[#40196d]'>Personal</h3>
                <ul className='space-y-2'>
                    {personal.map((link, index) => (
                        <li key={index}>
                            <a className='hover:text-white'
                             href={link.href}
                             >
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
          </div>

          <div>
                <h3 className='text-md font-bold mb-4 text-[#40196d]'>Business</h3>
                <ul className='space-y-2'>
                    {Business.map((link, index) => (
                        <li key={index}>
                            <a className=' hover:text-white'
                             href={link.href}
                             >
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
          </div>

          <div>
                <h3 className='text-md font-bold mb-4 text-[#40196d]'>Company</h3>
                <ul className='space-y-2'>
                    {company.map((link, index) => (
                        <li key={index}>
                            <a className='hover:text-white'
                             href={link.href}
                             >
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
          </div>

          <div>
                <h3 className='text-md font-bold mb-4 text-[#40196d]'>Help</h3>
                <ul className='space-y-2'>
                    {Help.map((link, index) => (
                        <li key={index}>
                            <a className='hover:text-white'
                             href={link.href}
                             >
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
          </div>

          <div>
                <h3 className='text-md font-bold mb-4 text-[#40196d]'>Transparency</h3>
                <ul className='space-y-2'>
                    {Transparency.map((link, index) => (
                        <li key={index}>
                            <a className='hover:text-white'
                             href={link.href}
                             >
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
          </div>
    
    </div>
  )
}

export default Footer