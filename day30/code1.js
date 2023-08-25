// code 1
import fs from "fs"
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 9, 'a', 'b', 'c', 'd', 'e', 'f']
let counter = 0
let str = '#'
let x = setInterval(() => {
    if (counter == 50) {
        clearInterval(x)
        fs.appendFile("colors.txt", str, (err) => {
            if (err) throw err
            console.log("Data added")
        })
    }
    for (let i = 0; i < 6; i++) {
        str = str + arr[Math.floor(Math.random() * arr.length)]
    }
    str = str + '\n#'
    console.log(str)
    counter++
}, 50)