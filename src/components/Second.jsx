import React from 'react'
import { features } from '../constants'

const Second = () => {
  return (
    <div className='flex flex-wrap mt-10 lg:mt-20 m-60 justify-center '>
        {features.map((feature, index) => (
            <div key={index} className="w-40 h-30 sm:1/2 lg:w-1/3 mt-32 shadow-bar_shadow  border-2 justify-between">
                <div className='flex h-6  w-6 p-4 bg-[#40196d] 
                justify-center items-center rounded-full ml-10 '>
                    {feature.icon}
                </div>
                <div>
                    <p className=' text-[#40196d] ml-10 mt-5 mb-10 text-base font-black'>Order a Kuda card on the app with <br />
                    pickup and delivery options.</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Second