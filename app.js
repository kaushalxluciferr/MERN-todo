const express=require('express')
const app=express()
const path = require("path");
const cors=require('cors')
app.use(cors())

require('./connection/conn')
const auth=require('./routes/auth')
const list=require('./routes/list')
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/api/v1',auth)
app.use('/api/v2',list)


app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "dist")));
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
app.listen(3000)

module.exports = app;