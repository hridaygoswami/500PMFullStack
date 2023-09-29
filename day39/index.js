var express = require('express')
var fs = require('fs')
var app = express()
var { MongoClient } = require("mongodb")
var url = "mongodb://127.0.0.1:27017"
var dataBase = "FullStack400"
var client = new MongoClient(url)

app.get("/find", async (req, res)=>{
    const response = await client.connect()
    let db = response.db(dataBase)
    let collection = db.collection("Form")
    let find = await collection.find().toArray()
    console.log(find)
    // res.send(find)
    let str = ''
    find.map((f)=>{
        str = str + `<dl><dd>Fname -> ${f.fname}</dd>` + `<dd>Lname ->${f.lname}</dd>` + `<dd>Age-> ${f.Age}</dd>` + `<dd>Married -> ${f.Married}</dd>` + "</dl>" 
    })
    res.send(str)
})

app.get("/insert", async (req, res)=>{
    let data = {
        "fname":"Purvesh",
        "lname":"Panchal",
        "Age":500,
        "Married":true
    }
    const response = await client.connect()
    let db = response.db(dataBase)
    let collection = db.collection("Form")
    let insert = await collection.insertOne(data)
    console.log(insert)
    fs.readFile('insert.html', (err, data) => {
        if (err) throw err
        res.send(data.toString())
    })
})

app.get("/update", async (req, res) => {
    const response = await client.connect()
    let db = response.db(dataBase)
    let collection = db.collection("Form")
    let update = await collection.updateOne({"fname":"Purvesh"}, {$rename: {"Age":"Umar"}})
    console.log(update)
    fs.readFile('update.html', (err, data) => {
        if (err) throw err
        res.send(data.toString())
    })
})

app.get("/delete", async (req, res) => {
    const response = await client.connect()
    let db = response.db(dataBase)
    let collection = db.collection("Form")
    let remove = await collection.deleteOne({"fname":"Purvesh"})
    console.log(remove)
    fs.readFile('delete.html', (err, data) => {
        if (err) throw err
        res.send(data.toString())
    })
})

app.listen(8080, ()=>console.log("Backend is running"))
// var fs = require('fs')
// fs.readFile('index.html', (err, data) => {
//     if (err) throw err
//     // console.log(data.toString())
//     how(data.toString())
// })

// function how(para) {
//     console.log(para)
// }

