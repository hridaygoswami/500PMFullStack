import fs from 'fs'
import nodemailer from 'nodemailer'

fs.readFile('confirmation.html', (err, data)=>{
    if(err) throw err
    // console.log(data.toString())
    email(data.toString())
})

// console.log(data1)

function email(data) {

    
    var transpoter = nodemailer.createTransport({
        service: 'gmail',
    auth: {
        user: 'captaindeath123456@gmail.com',
        pass: 'wmhhjgzyjflkzyhk'
    }
})

var mailOptions = {
    from: 'captaindeath123456@gmail.com',
    to: ['adnaan.mansuri2003@gmail.com', 'jitenoza930@gmail.com', 'rohittarang512005@gmail.com'],
    subject: "Hello world",
    // text: 'This is a mail send through NODEJS'
    // html: '<h1 style="color:red; border: 1px solid blue;">hello world</h1>'
    html: data
}

transpoter.sendMail(mailOptions, (error, info)=>{
    if(error) throw error
    console.log("Mail send")
})
}