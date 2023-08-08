// let opacity_red = 1
// let opacity_yellow = 0
// let opacity_green = 0
// let counter = 0
// let x = setInterval(() => {
//     // opacity_red = opacity_red - 0.1
//     // opacity_green = opacity_green + 0.1
//     counter = counter + 1
//     console.log(counter)
//     // document.getElementById('demo').innerText = counter
//     // if (counter >= 1) {
//     //     document.getElementById('red').style.opacity = 1
//     //     document.getElementById('green').style.opacity = 0
//     //     document.getElementById('demo').style.color = 'red'
//     // }
//     if (counter == 10) {
//         let red = setInterval(() => {
//             opacity_red = opacity_red - 0.1
//             // document.getElementById('red').style.opacity = opacity_red
//             console.log(opacity_red)
//             if (opacity_red <= 0) {
//                 clearInterval(red)
//                 console.log("Yellow starting")
//                 let yellow = setInterval(() => {
//                     opacity_yellow = opacity_yellow + 0.1
//                     console.log(opacity_yellow)
//                     if (opacity_yellow >= 1) {
//                         clearInterval(yellow)
//                         console.log("Green starting")
//                         let green = setInterval(() => {
//                             console.log(opacity_yellow, 'yellow')
//                             opacity_yellow = opacity_yellow - 0.1
//                             opacity_green = opacity_green + 0.1
//                             // document.getElementById('green').style.opacity = opacity_green
//                             console.log(opacity_green)
//                             if (opacity_green >= 1) {
//                                 clearInterval(green)
//                             }
//                         }, 60)
//                     }
//                 })
//             }
//         }, 60)
        
//         // document.getElementById('demo').style.color = 'green'
//         clearInterval(x)
//         // counter = 0
//     }
// }, 100)
        


setTimeout(()=>{
    console.log("Hello world")
}, 1000)