import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  //let counter=0

  let addvalue =()=>{
    // counter=counter+1
   setCounter(counter+1)
  }

  let removevalue = ()=>{
    // counter=counter-1
    setCounter(counter-1)
    if(counter<0){
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Counter||By Kunal Gawai</h1>
      <h2>Counter value is {counter}</h2>
      <button onClick={addvalue}>Add value{counter}</button>
      <br/>
      <button onClick={removevalue}>Remove value{counter}</button>
    </>
  )
}

export default App
