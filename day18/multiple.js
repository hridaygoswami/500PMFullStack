let string = ''
for(let i=1; i<=200; i++) {
    if(i%3==0 && i%5==0) {
        // console.log(i)
        string =string + ' ' + i
    } 
}

console.log(string)