import React from 'react'
import { personal } from '../constants'
import { Business } from '../constants'
import { company } from '../constants'
import { Help } from '../constants'
import { Transparency } from '../constants'



const Footer = () => {
  return (
    <div>
        <div>
                <h3 className='text-md font-semibold mb-4'>Personal</h3>
                <ul className='space-y-2'>
                    {personal.map((link, index) => (
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white'
                             href={link.href}
                             >
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
          </div>

          <div>
                <h3 className='text-md font-semibold mb-4'>Business</h3>
                <ul className='space-y-2'>
                    {Business.map((link, index) => (
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white'
                             href={link.href}
                             >
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
          </div>

          <div>
                <h3 className='text-md font-semibold mb-4'>Company</h3>
                <ul className='space-y-2'>
                    {company.map((link, index) => (
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white'
                             href={link.href}
                             >
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
          </div>

          <div>
                <h3 className='text-md font-semibold mb-4'>Help</h3>
                <ul className='space-y-2'>
                    {Help.map((link, index) => (
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white'
                             href={link.href}
                             >
                                {link.text}
                                </a>
                        </li>
                    ))}
                </ul>
          </div>

          <div>
                <h3 className='text-md font-semibold mb-4'>Transparency</h3>
                <ul className='space-y-2'>
                    {Transparency.map((link, index) => (
                        <li key={index}>
                            <a className='text-neutral-300 hover:text-white'
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