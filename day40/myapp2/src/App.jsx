import { useState } from 'react'
// import './App.css'
import './self.css'

// npm create vite@latest -- --template react "app name"

function App() {
  const [count, setCount] = useState(0)
  let home = 'Hriday'
  return (
    <>
     <div id="container">
      <div id="navbar">
        <ul>
          <li>{home}</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>FAQ</li>
        </ul>
      </div>
     </div>
    </>
  )
}

export default App
