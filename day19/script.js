// let demo = document.getElementById("demo").innerText
// console.log(demo)
// document.getElementById('demo').innerText = 'Today is a fine day'
// let x = prompt("Enter your name")
// document.getElementById('demo').innerText = 'Hello '+x+' How are you?'
// alert("Today is a fine day")
// console.log(document.getElementById('demo').id)
// function dark() {
//     console.log(document.getElementById('demo').id)
//     if(document.getElementById('demo').className == 'light') {
//         document.getElementById('demo').className = 'dark'

//         document.getElementById('btn').innerText = 'Light Mode'
//     } else {
//         document.getElementById('demo').className = 'light'

//         document.getElementById('btn').innerText = 'Dark Mode'
//     }
// }

// arr = ['Hriday', 'Jiten', 'Rohit', 'Chetan', 'Purvesh']

// let out = document.getElementById('names').innerHTML

// for(let i=0; i<arr.length; i++) {
//     str = str + '<li>'+arr[i]+'</li>'
// }
// let n = Number(prompt("Enter a number"))
// let str = ''
// for (let i = 0; i < n; i++) {
//     if (i % 2 == 0) {
//         str = str + ' ' + i
//     }
// }
// console.log(out)
// document.getElementById('names').innerHTML = str
// console.log(str)
function change() {
    // let pass = document.getElementById('pass').type
    // if(document.getElementById('pass').type == 'password') {
    //     document.getElementById('pass').type = 'text'
    //     console.log(pass)
    // } else {
    //     document.getElementById('pass').type = 'password'
    //     console.log(pass)
    // }
    document.getElementById('demo').style.backgroundColor = 'red';
    document.getElementById('demo').style.height = '600px';
    document.getElementById('demo').style.width = '600px';


}