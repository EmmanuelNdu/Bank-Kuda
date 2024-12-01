import React from 'react'
import { ChevronRight } from 'lucide-react'
import purple from '../assets/purple.png'

const Fee = () => {
  return (
    <div className='flex  flex-wrap mt-10 lg:mt-48 ml-4 '>
         <img  className='ml-48' src={purple} />
      <div className='ml-60'>
        <h1 className='font-black text-4xl text-[#40196d] leading-snug'>
        Fees as clear as glass.
        </h1>
        <p className='mt-10 font-normal  text-lg tracking-tight'>
        We’re serious about free banking, and we will <br />
        never, ever charge you for anything without <br />
        your consent.
        </p>
        <a className='underline inline-flex text-[#40196d] font-semibold' href='https://account.com'>See all our Fees<ChevronRight/></a>
        </div>
    </div>
  )
}

export default Fee