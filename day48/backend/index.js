// imports
var express = require('express')
var cors = require('cors')
var { MongoClient, ClientEncryption } = require('mongodb')

// mongoDb connection
let url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)
const dataBase = "FullStack400"

var app = express()
app.use(cors())
app.use(express.json())

app.get("/show", async(req, res) => {
    let result = await client.connect()
    let db = result.db(dataBase)
    let collection = db.collection('ReactDB')
    let find = await collection.find().toArray()
    console.log(find)
    res.send(find)
})

async function dataCheck(email) {
    let result = await client.connect()
    let db = result.db(dataBase)
    let collection = db.collection('ReactDB')
    let find = await collection.find({ "email": email }).toArray()
    console.log(find)
    if (find.length == 0) {
        return "Ok"
    } else {
        return "Data exists"
    }
}


async function storeDatainDB(fullName, email, password, res) {
    let result = await client.connect()
    let db = result.db(dataBase)
    let collection = db.collection('ReactDB')
    let check =await dataCheck(email)
    console.log(check)
    if (check == "Ok") {
        let insert = await collection.insertOne({
            "email": email,
            "full name": fullName,
            "password": password
        })
        console.log(insert)
    } else {
        console.log("Cannot add")
    }
}

app.post('/send', async (req, res) => {
    let response = req.body
    let fullName = req.body[0]
    let email = req.body[1]
    let password = req.body[2]
    console.log(fullName, email, password)
    storeDatainDB(fullName, email, password, res)
})

app.listen(8080, () => console.log("Backend is running"))