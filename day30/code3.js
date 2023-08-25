// code 3
import os from "os"
import fs from 'fs'

let counter = 0
let str = ''
let i = 0
setInterval(() => {
    if (counter == 10) {
        console.log(str)
        counter = 0
        fs.appendFile("os.txt", `Set ${i}\n` + str, (err) => {
            if (err) throw err
            console.log("Data added")
        })
        i++
    }
    str = str + String(os.freemem()) + '\n'
    counter++
    console.log(counter)
}, 1000)  