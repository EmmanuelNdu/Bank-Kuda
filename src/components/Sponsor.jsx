import React from 'react'
import techcrunch from '../assets/techcrunch.png'
import eco from '../assets/eco.png'
import fintech2 from '../assets/fintech2.png'
import bbc from '../assets/bbc.png'
import cnbc from '../assets/cnbc.png'
import euro from '../assets/euro.png'

const Sponsor = () => {
  return (
    <div className='flex'>
      <img src={techcrunch} />
      <img src={eco} />
      <img src={fintech2} />
      <img src={bbc} />
      <img src={cnbc} />
      <img src={euro} />

    </div>
  )
}

export default Sponsor