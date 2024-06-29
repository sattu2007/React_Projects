import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter , setCounter] = useState(15)
const addvalue =()=>{
  if(counter<20){
  counter = counter+1;
  } 
  setCounter(counter)}

  const removeValue =()=>{
    if(counter>0){
      counter = counter-1
    }
    setCounter(counter)
  }
  

  return (
    <>
      <h1>Radhe Radhe</h1>
      <h2>Counter value: {counter} </h2>
      <button  onClick={addvalue}
      >Add value</button>
      <br/>
      <button onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
