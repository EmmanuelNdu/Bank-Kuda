import React from 'react'
import { kuda_business } from '../constants'

const More = () => {
  return (
    <div>
        <h1 className='flex font-black text-4xl text-[#40196d] leading-snug mb-20 justify-center mt-12'>More for you</h1>
        <div className='flex '>
          {kuda_business.map((Option, index) =>(
            <div key={index} className='w-full' > 
            <div className='p-10 border shadow-bar_shadow rounded-xl' >
              <p className='font-black text-2xl text-[#40196d]'>
                {Option.title}

              </p>
            </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default More