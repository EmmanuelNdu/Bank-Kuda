import React from 'react'
import { ChevronRight } from 'lucide-react'
import lady from '../assets/lady.png'

const Seventh = () => {
  return (
    <div className='flex  flex-wrap mt-10 lg:mt-48 ml-4 '>
      <div className='ml-60'>
        <h1 className='font-black text-4xl text-[#40196d] leading-snug'>
        We’re always happy to<br />
        help you.
        </h1>
        <p className='mt-10 font-normal  text-lg tracking-tight'>
        You can chat with us on the app, slide into our <br />
        DMs, tweet, leave an Instagram comment, <br />
        send an email or call. However you choose to <br />
        reach out, there’ll always be a friendly person <br />
        there to make your life easy.
        </p>
        <a className='underline inline-flex text-[#40196d] font-semibold' href='https://account.com'>Get Help<ChevronRight/></a>
        </div>
        <img  className='ml-48' src={lady} />
    </div>
  )
}

export default Seventh