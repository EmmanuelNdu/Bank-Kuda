import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MoneyApp from './components/MoneyApp'
import Second from './components/Second'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <MoneyApp />
    <Second />
    </>
  )
}

export default App
