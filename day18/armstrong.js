// 135  = 1^3 + 3^3 + 5^3 = 1+9+125 = 135

let number = '472335976'
let n = number.length
let sum = 0
let temp = number
while(temp > 0) {
    let reminder = temp % 10;
    sum += reminder**n
    temp = parseInt(temp/10)
    console.log(temp)
}
if(number == sum) {
    console.log("Armstrong")
} else {
    console.log("Not Armstrong")
}