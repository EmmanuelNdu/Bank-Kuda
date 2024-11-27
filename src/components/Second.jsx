import React from 'react'
import { features } from '../constants'

const Second = () => {
  return (
    <div className='flex flex-wrap mt-10 lg:mt-20 ml-16 justify-center'>
        {features.map((feature, index) => (
            <div key={index} className="w-1/4 h-40 sm:1/2 lg:w-1/3 mt-32 gap-8 shadow-bar_shadow justify-between justify-center">
                <div className='flex mx-6 h-10  w-10 p-2 bg-[#40196d] 
                justify-center items-center rounded-full'>
                    {feature.icon}
                </div>
                <div>
                    <p className='font-medium text-[#40196d] '>Order a Kuda card on the app with <br />
                    pickup and delivery options.</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Second