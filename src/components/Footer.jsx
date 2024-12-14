import React from 'react'
import { personal } from '../constants'
import { Business } from '../constants'
import { company } from '../constants'
import { Help } from '../constants'
import { Transparency } from '../constants'



const Footer = () => {
  return (
    <div>
      <h5>Personal</h5>
      <div>{personal.map((option, index) => (
        <div key={index}>

        </div>
      ))}</div>
    </div>
  )
}

export default Footer