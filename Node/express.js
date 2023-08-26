const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.get('/', (req, res)=>{
    console.log(req.query.name)
    res.send('Hello World!')
})

app.get('About/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
    // res.send('About')
})
app.get('Contact/', (req, res)=>{
    res.send('Contact')
})
app.get('Map/', (req, res)=>{
    res.send('Map')
})
app.listen(port, ()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})