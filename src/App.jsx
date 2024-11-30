import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MoneyApp from './components/MoneyApp'
import Second from './components/Second'
import PhoneTu from './components/PhoneTu'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'

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
    </>
  )
}

export default App
