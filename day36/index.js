import { MongoClient } from "mongodb";
let url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url)
const dataBase = "FullStack400"

// async function getData() {
//     let data = [
//         {
//             "Fname":"Chetan",
//             "Lname":"Shah",
//             "School":"NaN",
//             "Umar":20
//         },
//         {
//             "Fname":"Rajesh",
//             "Lname":"Shah",
//             "School":"London School of Music",
//             "Umar":30
//         },
//         {
//             "Fname":"Suman",
//             "Lname":"Verma",
//             "School":"Harvard",
//             "Umar":25
//         }
//     ]
//     let result = await client.connect()
//     // console.log(result)
//     let db = result.db(dataBase)
//     // console.log(db)
//     let collection = db.collection("Students")
//     // let response = await collection.find({ "Fname": "Purvesh" }).toArray()
//     // let insert = await collection.insertOne({"Fname":"Hriday", "Lname":"Goswami", "School":"Bal mandir", "Umar":500})
//     // let insertMany = await collection.insertMany(data)
//     // let update = await collection.updateOne({'Fname':'Hriday'}, {$inc: {
//     //     "Umar":500
//     // }})
//     // let updateMany = await collection.updateMany({}, {$rename: {"Fname":"Phela Naam"}})
//     // let remove = await collection.deleteOne({"Phela Naam":"Hriday"})
//     let removeMany = await collection.deleteMany({})
//     console.log(removeMany)
// }


// async function getData() {
//     let result = await client.connect()
//     let db = result.db(dataBase)
//     let collection = db.collection("CSV Data")
//     // let count = await collection.estimatedDocumentCount()
//     // console.log(count)
//     let find = await collection.find({"rating":2}).toArray()
//     if (find.length != 0) {
//         let update = await collection.updateMany({"rating":2}, {$set: {
//             "rating":3.5
//         }})
//         console.log(update)
//     }
//     else {
//         console.log("Rating is already good")
//     }
//     // console.log(find.length)
// }

// getData()
async function loginData() {
    let result = await client.connect()
    let db = result.db(dataBase)
    let collection = db.collection("LoginData")
    let email = 'jiten@gmail.com'
    let password = 'Hriday123'
    let find = await collection.find({"email":email, "password":password}).toArray()
    if(find.length == 0){
        console.log("Created an account")
        let insert = await collection.insertOne({"email":email, "password":password})
        console.log(insert)
    } else {
        console.log("Login your account")
    }
}

loginData()
