import Axios from 'axios'
import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [password, setPassword] = useState('')
  async function getData() {
    var response = await Axios.get("http://localhost:8080/")
    console.log(response.data)
    setData(response.data)
  }

  let sendData = () => {
    if (!fullName || !email || !password) {
      alert("These fields cannot be empty")
    } else {

      console.log(fullName, email, password)
      fetch("http://localhost:8080/send", {
        method: "POST",
        crossDomain: true,
        headers: {
          'Content-type': 'application/json',
          Accept: "application/json",
          'Access-Control-Allow-Origin': "*"
        },
        body: JSON.stringify([fullName, email, password])
      })
      setEmail('')
      setFullName('')
      setPassword('')
    }
  }

  return (
    <>
      <input type="text" name="name" id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder='Full Name' /> <br /> <br />
      <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' /> <br /> <br />
      <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' /> <br /> <br />
      <button onClick={() => sendData()}>Submit</button>
      {/* <h1>{data}</h1>
      <button onClick={()=>getData()}>Get Data</button> */}
    </>
  )
}

export default App
