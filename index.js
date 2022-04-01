const express = require('express')
const { path } = require('path')
const app = express()
app.set('views',`${__dirname}/views`)
app.set('view engine','pug')
app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
app.get("/",(req,res)=>{
    res.render('index')
})
app.post("/test",(req,res)=>{
    console.log(req.body)
    res.send("")
})