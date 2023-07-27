string = '121'
new_string = ''
for(let i=string.length-1; i>=0; i--) {
    // console.log(string[i])
    new_string = new_string + string[i]
}
if(string == new_string) {
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}