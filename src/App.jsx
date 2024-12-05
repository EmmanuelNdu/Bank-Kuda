import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MoneyApp from './components/MoneyApp'
import Second from './components/Second'
import PhoneTu from './components/PhoneTu'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import Seventh from './components/Seventh'
import Fee from './components/Fee'
import Last from './components/Last'
import MyCarousel from './components/MyCarousel'
import Freedom from './components/Freedom'
import Sponsor from './components/Sponsor'
import Partners from './components/Partners'
import Need from './components/Need'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <MoneyApp />
    <Second />
    <PhoneTu />
    <Fourth />
    <Fifth  />
    <Sixth />
    <Seventh />
    <Fee />
    <Last />
    <MyCarousel />
    <Freedom />
    <Sponsor />
    <Partners />
    <Need />
    </>
  )
}

export default App
