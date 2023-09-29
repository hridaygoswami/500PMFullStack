import { useState } from 'react'
import './App.css'
import Display from './Display'
// useState
function App() {
  const [fname, useFname] = useState()
  return (
    <div>
      <input type="text" name="fname" id="fname" value={fname} onChange={(e)=>useFname(e.target.value)}/> <br /> <br />
      <Display fname={fname}/>
      <button onClick={()=>useFname("")}>Clear</button>
    </div>
  )
}

export default App
