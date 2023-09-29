var express = require("express")
const cors = require('cors')
var app = express()

app.use(cors())
app.use(express.json())

app.get("/",async (req, res)=>{
    console.log("Connected")
    let response = await fetch("https://api.weatherapi.com/v1/current.json?key=75f11d524d2749e4beb110806231909&q=London")
    let data = await response.json()
    console.log(data.current.temp_c)
    let send = String(data.current.temp_c)
    res.send(send)
})

app.listen(8080, ()=>console.log("Backend is running"))