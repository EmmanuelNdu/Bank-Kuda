import React from 'react'
import valar from '../assets/valar.png'
import entree from '../assets/entree.png'
import sbi from '../assets/sbi.png'
import target from '../assets/target.png'
import visa from '../assets/visa.png'

const Partners = () => {
  return (
    <div className='justify-center items-center bg-[#f9f9f9]'>
        <div className='flex justify-center items-center'>
             <h1 className=" font-black text-4xl text-[#40196d] leading-snug pt-20">Our Partners</h1>
        </div>
         <div className='flex justify-between pl-72 pr-72 pt-24'>
            <a href='valar.com'><img  className='w-20 h-14' src={valar} /></a>
            <a href='entree.com'><img className='w-20 h-14'  src={entree} /></a>
            <a href='sbi.com'><img className='w-20 h-14'  src={sbi} /></a>
            <a href='target.com'><img className='w-20 h-14'  src={target} /></a>
            <a href='visa.com'><img className='w-20 h-14'  src={visa} /></a>
         </div>
    </div>
  )
}

export default Partners