import React from 'react'
import techcrunch from '../assets/techcrunch.png'
import eco from '../assets/eco.png'
import fintech2 from '../assets/fintech2.png'
import bbc from '../assets/bbc.png'
import cnbc from '../assets/cnbc.png'
import euro from '../assets/euro.png'

const Sponsor = () => {
  return (
    <div className='flex justify-between p-10'>
      
      <a href='techcrunch.com'><img className='w-24 h-24' src={techcrunch} /> </a>
      <a href='eco.com'>  <img className='w-24 h-24' src={eco} /></a>
      <a href='fintech.com'><img className='w-24 h-24' src={fintech2} /></a>
      <a href='bbc.com'><img className='w-24 h-24' src={bbc} /></a>
      <a href='cnbc.com'><img className='w-24 h-24' src={cnbc} /></a>
      <a href='euro.com'><img className='w-24 h-24' src={euro} /></a>
      

    </div>
  )
}

export default Sponsor