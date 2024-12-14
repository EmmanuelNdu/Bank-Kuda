import React from 'react'
import { kuda_business } from '../constants'
import { ChevronRight } from 'lucide-react'

const More = () => {
  return (
    <div className=''>
        <h1 className='flex font-black text-4xl text-[#40196d] leading-snug mb-20 justify-center mt-12'>More for you</h1>
        <div className='flex pl-60 pr-60 space-x-8'>
          {kuda_business.map((Option, index) =>(
            <div key={index} className='w-full flex-grow-0' > 
            <div className='p-10 border shadow-bar_shadow rounded-xl' >
              <p className='font-black text-2xl text-[#40196d] pt-6'>
                {Option.title}
              </p>
              <p className='mb-8 pt-4'>
                <span>{Option.features}</span>
              </p>
              <a className='underline inline-flex text-[#40196d] font-bold' href='https://account.com'>Learn More<ChevronRight/></a>
            </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default More