// api_key = ac0c25449fc548cc9d3105646231808

let url = 'http://api.weatherapi.com/v1/current.json?key=ac0c25449fc548cc9d3105646231808&q=London&aqi=no'
async function getData() {
    let response =await fetch(url)
    let data = await response.json()
    console.log(data)
}

getData()
// console.log(response)