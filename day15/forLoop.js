// console.log("Hello world")
// console.log("Hello world")
// console.log("Hello world")
// console.log("Hello world")
// console.log("Hello world")


/* There are 2 types of loops:
    1. for loop  -> commonly used
    2. while loop -> scable
    3. for...of, for...in
*/



/* Syntax for for loop:
    for(start, end, increment/steps) {
        code
    }
*/
// for(let i=1; i<=100; i++) {
//     console.log("Hello world", i)
// }

let arr = [1,2,3,4]

// console.log(arr[arr.length-1])

// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i])
// }

// let arrObj = [
//     {
//         "fname":"Hriday",
//         "lname":"Goswami"
//     },
//     {
//         "fname":"Rohit",
//         "lname":"Tarang"
//     }
// ]

// for(let i=0; i<arrObj.length; i++) {
//     console.log("Fname:", arrObj[i].fname)
// }

// let str = ''
// for(let i=0; i<=100; i++) {
//     if(i%2 == 0) {
//         // console.log(i)
//         str = str+ " " + i   // "" + i -> "0"
//                             // "0" + 2 -> "0 2" 
//     }
// }

// console.log(str)

// 6! = 6*5*4*3*2*1 = 240

// let num = 10
// let fact = 1
// for(let i=1; i<=num; i++) {
//     fact = fact * i
// }

// console.log(fact)

// 0, 1, 1, 2, 3, 5, 8 -> fibonacci series

// let n1=0, n2=1, n3;
// console.log(n1, n2, n3)
// let num = 60;
// console.log(n1,"\n" ,n2)
// for(let i=0; i<num; i++) {
//     n3 = n1+n2
//     n2 = n1
//     n1 = n3
//     console.log(n3)
// }


let num = 4
let flag = 0
for(let i=2; i<num; i++){
    if(i%num == 0) {
        // console.log("Not prime")
        flag = 0
    } else {
        // console.log("Prime")
        flag = 1
    }
}

if(flag == 1) {
    console.log("Prime")
} else {
    console.log("Not Prime")
}