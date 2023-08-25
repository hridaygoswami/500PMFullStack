import http from "http"
import url from 'url'
import fs from 'fs'

// http.createServer(function(req, res){
//     // 200 -> success, 404 -> not found, 403 -> forbidden
//     res.writeHead(200, {'Content-type':'text/html'})
//     // res.write("Hello world");
//     // res.write(req.url)
//     res.end();
// }).listen(8080)


// var address = 'http://localhost:8080/default.html?year=2015&month=Jan'

// var q = url.parse(address, true)

// console.log(q.hostname)
// console.log(q.host)
// console.log(q.pathname)
// console.log(q.search)
// console.log(q.query)
// console.log(q.query.year)

http.createServer(function(req, res){
    var q = url.parse(req.url, true)
    var filename = '.'+q.pathname
    fs.readFile(filename, function(err, data){
        if (err) {
            res.writeHead(404, {'Content-type':'text/html'})
            return res.end("404 Not found")
        }
        res.writeHead(200, {'Content-type':'text/html'})
        res.write(data)
        return res.end()
    })
    console.log(q)
}).listen(8080)
