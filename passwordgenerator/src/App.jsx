 
/* eslint-disable no-import-assign */
 
/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length ,setLength] = useState(8)
  const[numberAllowed , setNumberAllowed] = useState(false);
  const [characterAllowed , setCharacterAllowed] = useState(false);
  const [password , setPassword] = useState("")
  
  const passwordGenerator = useCallback =(() => { 
    let pass = ""
    let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str +="0123456789"
    if (characterAllowed) str +="!@#$%^&*_+=[]{}~'"

    for (let i = 1 ; i <= length; i++) {
      let char = Math.floor (Math.random() * str.length+1)

      pass += str.charAt(char)
      
    }
    setPassword(pass )

  }, [length, numberAllowed ,characterAllowed , setPassword])

  return (
   <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8  bg-gray-800 text-orange-500' > tests
    
   </div>
   <h1>chai aur react</h1>
  
   
    </>
  )
}

export default App
