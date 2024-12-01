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
    </>
  )
}

export default App
