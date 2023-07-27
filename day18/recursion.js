// function hello() {
//     console.log("Hello")
//     hello()
// }
// hello()

let counter = 1
// let x = setInterval(()=>{
//     console.log("Hello", counter)
//     if(counter == 5) {
//         clearInterval(x)
//     }
//     counter++
// }, 1000)
function hello() {
    console.log("Hello", counter)
    if(counter == 5) {
        clearInterval(x)
        clearInterval(y)
    }
    counter++
}

let x = setInterval(hello, 100)
let y = setInterval(hello, 1000)