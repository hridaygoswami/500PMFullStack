import Axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("")
  async function backendConnect() {
    const response = await Axios.get("http://localhost:8080/")
    console.log(response.data)
    setDisplay("Temperature in London is: "+ response.data)
  }

  return (
    <>
      <div>{display}<sup>o</sup>C</div> <br /><br />
      <button onClick={()=>backendConnect()}>Connected</button>
    </>
  )
}

export default App
// AXIOS