import React from 'react'
import { f_table } from '../constants'
import { s_table } from '../constants'
import { t_table } from '../constants'

const Need = () => {
  return (
    <div>
        <div className='flex justify-center pt-20'>
        <h1 className=" font-black text-4xl text-[#40196d] leading-snug mb-20 justify-center items-center">Choose the  freedom you need</h1>
        </div>
        <div>
            <h3>My Bank</h3>
            {
              f_table.map((blu, index) => (
              <div key={index} className='' >
                <div className='text-[#40196d] ml-10 mt-5 pb-6 text-base font-black'>
                <p>{blu.text}</p>
                </div>
              </div>
              ))
            }
        </div>
        
    </div>
  )
}

export default Need