// non primitive datatypes:
// arr, obj, func
// let arr = [1,2,3,4,5] // 1d array
// let arr2d = [
//                 [1,2], 
//                 [3,4]
//             ] // 2d
// let arr3d = [
//     [
//         [1,2],
//         [3,4]
//     ]
// ] //3d

// let arrND = [1,
//     [
//         2,3
//     ],
//     [
//         4,5,[6,7, [9]]
//     ]
// ]

// console.log(arr[4])
// console.log(arr3d[0][0][1])
// console.log(arrND[2][2][2][0]) // n dim arrays


// let obj = {
//     "name":"Hriday Goswami"
// }

// console.log(obj['name'])

// let obj2D = {
//     "name":"Hriday",
//     "details":{
//         "country":"India"
//     }
// }

// console.log(obj2D.details.country)
// console.log(obj2D['details']['country'])




// there are 2 methods of functions: with parameters, without parameters
// there are three types of functions: arrow functions, normal functions, variable functions


// normal function
// function add(){
//     let a = 10
//     let b = 20
//     console.log(a+b) // normal printing
//     return 'Hello world'  // callback

// } 

// // add()
// console.log(add())


// let add = function() {
//     // console.log("Hello world")
//     let obj = {
//         "fname":"Hriday"
//     }
//     return obj.fname
// }

// // add()
// console.log(add())   // promise



// let add = ()=>{
//     return 'Hello world'
// }

// console.log(add())

// let objFunc = {
//     "fname":"Hriday",
//     "lname":"Goswami",
//     "arr":[1,2,3,4,5],
//     "myFunc": function() {
//         return this.fname + this.lname
//     }
// }

// // let arr = [1,2,3,4]

// console.log(objFunc.arr[0])

// let arrObj = [
//     {
//         "fname":"Hriday",
//         "lname":"Goswami"
//     },
//     {
//         "fname":"Rajesh",
//         "lname":"Shah"
//     }
// ]

// console.log(arrObj[0].fname)
// arrObj.map((ao)=>{
//     console.log(ao.fname)
// })


// function add(a, b) {
//     return a+b
// }

// console.log(add("2", "3"))

// function home() {
//     // how()
//     console.log("This is home")
//     home()
// }

// function how() {
//     console.log("This is how")
// }

// home()


/* 
Syntax for if...else
if (condition) {
    code
} else {
    code
}

*/

// console.log(9>7)
// if(9<7 == true) {
//     // false = false
//     // true
//     console.log("Ok!")
// } else {
//     console.log("not ok")
// }

function add() {
    return false
}

// console.log(typeof(add()))

if(add()) {
    console.log("Ok!")
} else {
    console.log("Not ok!")
}