import React from 'react'
import { features } from '../constants'

const Second = () => {
  return (
    <div className='flex flex-wrap mt-10 lg:mt-20'>
        {features.map((feature, index) => (
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
                <div className='flex mx-6 h-10  w-10 p-2 bg-[#40196d] 
                justify-center items-center rounded-full'>
                    {feature.icon}
                </div>
                <div>
                    <p className='font-medium text-[#40196d]'>{feature.text}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Second