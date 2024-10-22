/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>tailwind test</h1>

<Card username="verma jii " btnText="click me"/>
 eslint-disable-next-line no-undef
<Card username="shivam" btnText="click me"/>
    </>
    
  )
}

export default App
