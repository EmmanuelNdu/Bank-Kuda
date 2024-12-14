import React from 'react'

const Purple = () => {
  return (
    <div className=' bg-[#eff1ff] m-60 pt-4 rounded-lg shadow-bar_shadow'>
    <div className='flex flex-col items-start pl-20 pt-8 gap-5 pb-24'>
        <h2 className='font-black text-4xl text-[#40196d] gap-4'>The Money app for<br/> Africans</h2>
        <p className=''>Save, spend, send and invest money across borders.</p>
        <a href='#' className=' py-3 px-10 font-medium border rounded-xl bg-[#40196d] text-white text-base
                     transform transition-transform duration-300 hover:translate-y-[-4px]
                     '>
                        Join Kuda
                    </a>
    </div>
    </div>
  )
}

export default Purple