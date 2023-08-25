import http from 'http'
import url from 'url'
http.createServer(async function(req, res){
    var q = url.parse(req.url)
    console.log(q.pathname)
    let str = String(q.pathname)
    let location = str.split('/')[1]
    let weather = `http://api.weatherapi.com/v1/current.json?key=ac0c25449fc548cc9d3105646231808&q=${location}&aqi=no`
    console.log(weather)
    let response = await fetch(weather)
    let data = await response.json()
    console.log(data.current.temp_c)
    res.write(String(data.current.temp_c))
    res.end()
}).listen(8080)


// import express from 'express'
// let app = express()

// app.get("/", function(req, res){
//     console.log(req.url)
// })

// app.get('/home', (req,res)=>{
//     console.log("On home")
//     res.send("This is home")
// })

// app.post('/', (req, res)=>{
//     let fname = document.getElementById("name").value
//     console.log("Connected", fname)
// })

// app.listen(8080, ()=>console.log("Backend is running"))