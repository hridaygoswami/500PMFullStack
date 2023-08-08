let opacity_red = 1
let opacity_green = 0
let counter = 0
let x = setInterval(()=>{
    // opacity_red = opacity_red - 0.1
    // opacity_green = opacity_green + 0.1
    counter = counter + 1
    console.log(counter)
    if(counter == 10) {
        let green = setInterval(()=>{
            opacity_green = opacity_green + 0.1
            console.log(opacity_green)
            if(opacity_green>=1) {
                clearInterval(green)
            }
        }, 50)
        let red = setInterval(()=>{
            opacity_red = opacity_red - 0.1
            console.log(opacity_red)
            if(opacity_red<=0) {
                clearInterval(red)
            }
        }, 50)

        clearInterval(x)
    }
}, 1000)