// var os = require('os')
import fs from 'fs'
// import os from "os"
// console.log(os)
// console.log(os.arch())
// console.log(os.platform())
// console.log(os.cpus())
// console.log(os.freemem())
// setInterval(()=>{
//     console.log(os.freemem())
// }, 1000)
// console.log(os.totalmem())
// console.log(os.homedir())
// console.log(os.tmpdir())
// console.log(os.networkInterfaces())
// console.log(os.release())
// console.log(os.hostname())
// console.log(os.uptime())
// console.log(os.userInfo())
// console.log(os.platform())
// console.log(os.homedir())


// fs.readFile("demo.txt", (err, data)=>{
//     if(err) throw err
//     console.log(data.toString())
// })

// fs.writeFile("demo2.txt", "This is yet another line", (err, data)=>{
//     if (err) throw err
//     console.log("data added")
// })

// fs.appendFile("demo2.txt", "\nThis is yet another another line", (err, data)=>{
//     if (err) throw err
//     console.log("Data appended")
// })

// let counter = 0
// let str = ''
// let x = setInterval(()=>{
//     if(counter == 10) {
//         clearInterval(x)
//         console.log(str)
//         fs.appendFile("freemem.log", str, (err, data)=>{
//             if (err) throw err
//             console.log("Data added")
//         })
//     }
//     str = str + String(os.freemem()) + '\n'
//     // console.log(os.freemem())
//     counter++
// }, 1000)

let char = [0,1,2,3,4,5,6,7,8,9, 'a', 'b', 'c', 'd', 'e', 'f']
let arr = []
let counter = 0
let str = '#'
let x = setInterval(()=>{
    if (counter == 10) {
        clearInterval(x)
        console.log(str)
        fs.appendFile("colors.txt", str, (err)=>{
            if (err) throw err
            console.log("Data added")
        })
    }
    for(let i=0; i<6; i++) {
        str = str + char[Math.floor(Math.random() * char.length)]
    }
    str = str + "\n#"
    counter++
})