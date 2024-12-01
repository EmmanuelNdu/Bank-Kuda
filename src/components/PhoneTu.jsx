import React from 'react'
import { ChevronRight } from 'lucide-react'
import lady from '../assets/lady.png'

const PhoneTu = () => {
  return (
    <div className='flex  flex-wrap mt-10 lg:mt-48 ml-4 '>
      <div className='ml-60'>
        <h1 className='font-black text-4xl text-[#40196d] leading-snug'>
        Your phone + <br />
        our app +   <br />
        a debit card = <br />
        a simpler life.<br />
        </h1>
        <p className='mt-10 font-normal  text-lg tracking-tight'>
        We designed a money app for your lifestyle,<br />
         and you can get a debit card to go with it.<br />
          That's all you need to make the right money<br />
           moves.
        </p>
        <a className='underline inline-flex text-[#40196d] font-semibold' href='https://account.com'>Open An Account in Minutes<ChevronRight/></a>
        </div>
        <img  className='ml-48' src={lady} />
    </div>
  )
}

export default PhoneTu