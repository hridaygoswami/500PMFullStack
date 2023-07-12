/* 
Syntax for if...else 
    if(condition )  -> will not be executed unless the condition is true
    {
        code
    }
    else {
        code
    }
    Operators for condition:
    >, <, ==, >=, <=, !=, &&, ||
*/

// let a = 10
// let b = 20

// if(a>b) {
//     console.log("A")
// } else {
//     console.log("B")
// }

// let a = 10
// let b = 200
// let c = 30

// nested if
// if(a>b) {
//     if(a>c) {
//         console.log("A")
//     }
//     else {
//         console.log("C")
//     }
// }else if(b>a) {
//     if(b>c) {
//         console.log("B")
//     } else {
//         console.log("C")
//     }
// }
// else {
//     console.log("C")
// // }

// let a = 100000
// let b = 20000
// let c = 3000
// let d = 400
// let e = 50


// if (a > b) {
//     if (a > c) {
//         if (a > d) {
//             if (a > e) {
//                 console.log("A")
//             } else {
//                 console.log("E")
//             }
//         } else {
//             console.log("D")
//         }
//     } else if (c > d) {
//         if (c > e) {
//             console.log("C")
//         } else {
//             console.log("E")
//         }
//     } else if(d>e){
//         console.log("D")
//     } else {
//         console.log("E")
//     }
// }
// else if (b > a) {
//     if (b > c) {
//         if (b > d) {
//             if(b>e) {
//                 console.log("B")
//             } else {
//                 console.log("E")
//             }
//         } else {
//             console.log("D")
//         }
//     } else if (c > d) {
//         if(c>e) {
//             console.log("C")
//         } else {
//             console.log("E")
//         }
//     } else if(d>e){
//         console.log("D")
//     } else {
//         console.log("E")
//     }
// }
// else if (c > a) {
//     if (c > b) {
//         if (c > d) {
//             if(c>e) {
//                 console.log("C")
//             } else {
//                 console.log("E")
//             }
//         } else {
//             console.log("D")
//         }
//     } else if (b > d) {
//         if(b>e) {
//             console.log("B")
//         } else {
//             console.log("E")
//         }
//     } else if(d>e){
//         console.log("D")
//     } else {
//         console.log("E")
//     }
// }
// else {
//     console.log("E")
// }


// let num = 12

// console.log(num%2)

// if (num % 2 == 0) {
//     console.log("Even")
// } else {
//     console.log("odd")
// }

// if(num%5 == 0) {
//     console.log("Number is divisible by 5")
// } else {
//     console.log("Number is not divisible by 5")
// }


// let inp = 1

// // if...else ladder

// if(inp == 1) {
//     console.log("Monday")
// } else if(inp == 2){
//     console.log("Tuesday")
// } else if(inp == 3) {
//     console.log("Wednesday")
// } else if(inp == 4) {
//     console.log("Thursday")
// } else if(inp == 5) {
//     console.log("Friday")
// } else if(inp == 6) {
//     console.log("Saturday")
// } else if(inp == 7) {
//     console.log("Sunday")
// } else {
//     console.log("Invalid")
// }