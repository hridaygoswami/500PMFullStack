// code2
import fs from 'fs'
let str = ''
let counter = 0

let x = setInterval(() => {
    if (counter == 1000) {
        clearInterval(x)
        fs.appendFile("prime.log", str, (err) => {
            if (err) throw err
            console.log("Data added")
        })
    }
    if (counter == 0 || counter == 1) {
        console.log("Not prime")
    } else {
        let isPrime = true
        for (let i = 2; i < counter; i++) {
            if (counter % i == 0) {
                isPrime = false
                break
            }
        }
        if (isPrime) {
            console.log("Prime", counter)
            str = str + "Prime " + String(counter) + "\n"
        } else {
            // console.log("Not prime")
        }
    }

    counter++
});