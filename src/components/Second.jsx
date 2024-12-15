import React from 'react'
import { features } from '../constants'


const Second = () => {
  return (
    <div className='flex flex-wrap mt-10 lg:mt-20 m-60 justify-center'>
        {features.map((feature, index) => (
            <div key={index} className="w-32 h-30 sm:1/2 lg:w-1/3 mt-32 pt-4 shadow-bar_shadow  justify-between">
                <div className='flex h-6  w-6 p-4 border-neutral bg-[#40196d]
                items-center rounded-full ml-10 '>
                    <img src={feature.icon} />
                </div>
                <div className='icon text-[#40196d] ml-10 mt-5 pb-6 text-base font-black'>
                    <p>{feature.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Second