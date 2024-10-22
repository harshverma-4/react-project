import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {

 const [counter, setcounter] =useState(0)
  //useState(15)
  
  //let counter =15

  const addValue =() =>{
    if(counter <20){
      setcounter(counter + 1);
      setcounter(prevCounter => prevCounter +1)
      setcounter(prevCounter => prevCounter +1)
      setcounter(prevCounter => prevCounter +1)
      setcounter(prevCounter => prevCounter +1)
    }
    
   // console.log("clicked", Math.random());
    
    //counter = counter +1
    //setcounter(counter + 1)
  }

  const removevalue = () => {
if(counter >0){
    setcounter(counter - 1);
}
  }

  return (
    <>
      <h1>harsh verma</h1>
      <h2>counter value: {counter}</h2>

      <button 
      onClick={addValue}>add value</button>
      <br />
      <button
      onClick={removevalue}> remove value</button>
    
    </>
  )
}
