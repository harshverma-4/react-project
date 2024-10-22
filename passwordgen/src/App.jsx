import { useState, useCallback, useEffect , useRef} from 'react'
import './app.css'


function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] =useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // refhook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
       if (numberAllowed) str +="123456789"
    if (charAllowed) str += "!@#$%^&*~"


    for (let i = 1; i <= length; i++){
      let char =Math.floor (Math.random() * str.length +1)

      pass += str.charAt(char)
1     
    }

    setPassword(pass)

 
  }, [length , numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(length)
    window.navigator.clipboard.writeText(password)
  }, [password])

   useEffect(() => {passwordGenerator()} ,[ length, numberAllowed, charAllowed, passwordGenerator] )
  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4  my-8 text-orange-500 bg-gray-800'> 
    <h2 className='text-white text-center my-3 '> password Generator</h2>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
       type="text" 
       value={password}
       className='outline-none w-full py-1 px-2 '
       placeholder='password'
       readOnly
       ref={passwordRef}
       />
       <button 
       onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
       > copy</button>

    </div>
     <div className='flex text-5m gap-x-1'>
      <div className='flex items-center gap-x-1'>
        <input
         type="range"
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e) => {setlength(e.target.value)}}
         />
         <label> length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" 
        defaultChecked={numberAllowed}
        id="numberInput"
        onChange={() => {
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="numberInput">Numbers </label>
      </div>
      <div className='flex items-center gap-x-1'>
      <input type="checkbox" 
        defaultChecked={charAllowed}
        id="characterInput"
        onChange={() => {
          setCharAllowed((prev) => !prev);
        }}
        />
         <label htmlFor="characterInput">characters </label>
        </div>
     </div>
  </div>
    </>
  )
}

export default App
