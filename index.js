const express = require('express')
const app = express()

app.use(express.static('./public'))

app.set("view engine" , "ejs")

// app.use((req , res ,next)=>{
//     next()


// })
app.get('/'  , (req , res)=>{
    res.render("index" , {name :"santosh"})
    
}) 

// app.get('/profile/:username'  , (req , res)=>{
//     res.send(`Hello from ${req , params ,username}`)
    
// }) 

app.listen (3000 , ()=>{
    console.log("perfect")
})