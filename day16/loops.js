// prime number code
// isPrime = 1000000008
// for(let j=0; j<=50; j++) {    // loop for get range
//     for(let i=2; i<j; i++) {  // loop for prime
//         if(j%i == 0) {
//             // console.log("Not prime")
//             break
//         } else {
//             console.log("Prime", j)
//             // break
//         }
//     }
// }


// let flag;

// for (let j = 2; j < 50; j++) {
//     for (let i = 2; i < j; i++) {  // loop for prime
//         if (j % i == 0) {
//             // console.log("Not prime")
//             flag = true
//             break
//         } else {
//             // console.log("Prime")  
//             flag = false
//         }
//     }

//     if (flag) {
//         // console.log("Not prime")
//     } else {
//         console.log("Prime", j)
//     }
// }

// 0, 1, 1, 2, 3, 5, 8

// let n1=0, n2=1 
// let n3

// for(let i=0; i<8; i++) {
//     n3 = n1+n2
//     n2 = n1
//     n1 = n3
//     console.log(n3)
// }

//star pattern building 

// filled square
// let str = ""
// for(let row=0; row<5; row++) {
//     for(let col=0; col<5; col++) {
//         str = str + ' * ' 
//     }
//     str = str + '\n'
// }

// console.log(str)


// hollow square

let str = ""
let n = 10
for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        if(row == 0 || col == 0 || row == n-1 || col == n-1 || row == col || col == (n-1)-row) {
            str = str + ' * '
        } else {
            str = str + '   '
        }
    }
    str = str + '\n'
}

console.log(str)