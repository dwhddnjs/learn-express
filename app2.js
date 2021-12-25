const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    console.log('get 요청')
    console.log(`req.baseUrl:${req.baseUrl}`)
    console.log(`req.body:${req.body}`)
    console.log(`req.co0kies:${req.cookies}`)
    console.log(`req.ip:${req.ip}`)
    console.log(`req.method:${req.method}`)
    console.log(`req.params : ${req.params}`);
    console.log(`req.path : ${req.path}`);
    console.log(`req.query : ${req.query}`);
    console.log(req.params); 
    res.send('helloword')
})

app.listen(8080)