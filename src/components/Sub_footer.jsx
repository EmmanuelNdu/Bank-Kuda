import React from 'react'
import { contact, lagos } from '../constants'
import { London } from '../constants'
import { Capetown } from '../constants'
import { Canada } from '../constants'

const Sub_footer = () => {
  return (
    <div className='pt-20'>
           <p className=' flex justify-center items-center text-[#40196d]'>Products may vary by country or market.</p>
    <div className='flex justify-center space-x-12 pt-20'>
        <div>
                <h3 className='text-md font-bold mb-4 text-[#40196d]'>Contact</h3>
                <ul className='space-y-2'>
                    {contact.map((link, index) => (
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
                <h3 className='text-md font-bold mb-4 text-[#40196d]'>Lagos</h3>
                <ul className='space-y-2'>
                    {lagos.map((link, index) => (
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
                <h3 className='text-md font-bold mb-4 text-[#40196d]'>London</h3>
                <ul className='space-y-2'>
                    {London.map((link, index) => (
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
                <h3 className='text-md font-bold mb-4 text-[#40196d]'>Cape Town</h3>
                <ul className='space-y-2'>
                    {Capetown.map((link, index) => (
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
                <h3 className='text-md font-bold mb-4 text-[#40196d]'>Canada</h3>
                <ul className='space-y-2'>
                    {Canada.map((link, index) => (
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
    </div>
  )
}

export default Sub_footer