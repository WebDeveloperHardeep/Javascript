const express = require('express')
const path = require('path')
const app = express()
const multier = require('multier')
const upload = multier({dest: 'uploads/'})
const port = 3000
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "templates/index.html"))
})

// app.post('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, "templates/index.html"))
// })

app.post('/merge', upload.array('pdfs', 2), function(req, res, next){
    console.log(req.files)
    res.send({data: req.files})
})

app.listen(port, ()=>{
    console.log(`Example app listening on port http://localhost ${port}`)
})

