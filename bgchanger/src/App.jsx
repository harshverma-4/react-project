 
 

import { useState } from "react"


function App() {
  const [color, setColor]= useState("pink")

  return (
    <div className="w-full h-screen duration-100"

      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-10 insert-x-0 px-80">
          
          
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("Red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lgs " style={{background: "Red"}}>Red</button>
          <button
           onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lgs " style={{background: "green"}}>green</button>
          <button
           onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lgs " style={{background: "yellow"}}>yellow</button>
          <button
           onClick={() => setColor("black")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lgs " style={{background: "black"}}>black</button>
          <button
           onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lgs " style={{background: "blue"}}>blue</button>
          <button
           onClick={() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lgs " style={{background: "orange"}}>orange</button>
          <button
           onClick={() => setColor("gold")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lgs " style={{background: "gold"}}>gold</button>
                </div>
           </div>
    </div>
  )
}

export default App
