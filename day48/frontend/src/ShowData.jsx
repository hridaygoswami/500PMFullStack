import Axios from 'axios'
import React, { useState } from 'react'
import Display from './Display'
export default function ShowData() {
    let [arr, setArr] = useState([])

    async function callData() {
        let response =  await Axios.get("http://localhost:8080/show")
        // console.log(response.data)
        let newArr = response.data
        setArr([...arr, ...newArr])
        console.log(arr)
    }
  return (
    <>
    {arr.map((a)=>{
        return <Display data={a.email} fullName={a['full name']}   key={a._id} />
    })}
    <button onClick={()=>callData()}>Call data</button>    
    </>
  )
}
