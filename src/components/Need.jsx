import React from 'react'
import { f_table } from '../constants'
import { s_table } from '../constants'
import { t_table } from '../constants'
import logo from '../assets/logo.png'

const Need = () => {
  return (
    <div className=''>
        <div className='flex justify-center pt-20'>
        <h1 className=" font-black text-4xl text-[#40196d] leading-snug mb-20 justify-center items-center">Choose the  freedom you need</h1>
        </div>
        <div className='flex items-center justify-center ml-56 mr-56 bg-[#f4f4f4]'>
        <div>
            <h3 className= 'font-black text-2xl text-[#40196d] ml-9'>{"   "}</h3>
            {f_table.map((blu, index) => (
              <div key={index} className='' >
                <div className='text-black ml-10 mt-5 pb-6 text-base font-black items-center'>
                <p>{blu.text}</p>
                </div>
              </div>
              ))
            }
        </div>
        
        <div>
          <h3 className='font-black text-lg text-[#40196d] ml-9'>Other Banks</h3>
          {s_table.map((bli, index) => (
            <div key={index} className=''>
              <div className='text-black ml-10 mt-5 pb-6 text-base font-black' >
                 <p>{ bli.text }</p>
              </div>
            </div>
          ))}
        </div>

        <div>
        <img className="h-15 w-24 ml-9" src={logo} alt="logo"/>
          {t_table.map((bla, index) => (
            <div key={index} className=''>
              <div className='text-black ml-10 mt-5 pb-6 text-base font-black' >
                 <p>{ bla.text }</p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Need