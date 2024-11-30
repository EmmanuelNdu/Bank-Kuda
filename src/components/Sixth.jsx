import React from 'react'
import { ChevronRight } from 'lucide-react'
import purple from '../assets/purple.png'

const Sixth = () => {
  return (
    <div className='flex  flex-wrap mt-10 lg:mt-48 ml-4 '>
         <img  className='ml-48' src={purple} />
      <div className='ml-60'>
        <h1 className='font-extrabold text-4xl text-[#40196d] leading-snug'>
        Save money as you <br />
        spend it, seriously.
        </h1>
        <p className='mt-10 font-normal  text-lg tracking-tight'>
        You can’t avoid spending. That’s how you pay <br />
        for your needs. But we can help you put money <br />
         away every time you pay for something. Just <br />
         set a percentage to save and watch your <br />
         money grow.
        </p>
        <a className='underline inline-flex text-[#40196d] font-semibold' href='https://account.com'>See all our Savings<ChevronRight/></a>
        </div>
        <img  className='ml-48' src={lady} />
    </div>
  )
}

export default Sixth