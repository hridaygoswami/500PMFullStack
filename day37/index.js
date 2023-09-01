var express = require('express')
var nodemailer = require('nodemailer')
var { MongoClient } = require('mongodb')
let url = 'mongodb://127.0.0.1:27017'
let client = new MongoClient(url)
const dataBase = "FullStack400"
var app = express()
var data = {
    "fname":"Hriday",
    "lname":"Goswami",
    "Age":500,
    "Married":false
}

// routing


app.get("/login", async (req, res)=>{
    let result = await client.connect()
    let db = result.db(dataBase)
    let collection = db.collection('UsingNODE')
    let response = await collection.find().toArray()
    // console.log(response)
    // res.send(response)
    let str = ''
    response.map((re)=>{
        str = str + re.Married
    })
    res.send(str)
})

app.get("/signup", async (req, res)=>{
    let result = await client.connect()
    let db = result.db(dataBase)
    let collection = db.collection('UsingNODE')
    let response = await collection.insertOne(data)
    console.log(response)
    res.send(response)
    // res.send(req.url)
})

app.get("/update", async (req, res)=>{
    let result = await client.connect()
    let db = result.db(dataBase)
    let collection = db.collection('UsingNODE')
    let response = await collection.updateMany({"fname":data.fname}, {$rename: {"Age":"Umar"}})
    res.send(response)
})


app.get("/sendMail", (req, res)=>{
    var transpoter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'captaindeath123456@gmail.com',
            pass: ''
        }
    })

    var mailOptions = {
        from: 'captaindeath123456@gmail.com',
        to: ['jitenoza930@gmail.com', 'rohittarang512005@gmail.com'],
        subject: "Hello world",
        // text: 'This is a mail send through NODEJS'
        // html: `<h1 style="color:red; border: 1px solid blue;">${data.fname} ${data.lname} ${data.Age} ${data.Married} has been added to our database successfully</h1>`
        html: `<h1 style="color:red; border: 1px solid blue;">${data.fname+data.lname+data.Age+data.Married} has been added to our database successfully</h1>`

        // html: data
    }

    transpoter.sendMail(mailOptions, (error, info) => {
        if (error) throw error
        console.log("Mail send")
        res.send("Mail sent")
    })
})

app.listen(8080, ()=>console.log("Backend is running"))

