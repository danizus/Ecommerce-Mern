const express = require("express")
const app = express() 
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const router = require("./routes/auth/auth-routes")
const port =  5000;

mongoose.connect("mongodb://localhost:27017/").then(()=>console.log("connected")).catch((err)=>console.log("error : ", err));

app.use(cors({
    origin:"http://localhost:5173/",
    methods:['GET','POST','DELETE','PUT'],
    allowedHeaders:[
        "Content-Type",
        "Authorization",
        "Cache-Control",
        "Expires",
        "pragma"
    ],
    credentials:true
}))

app.use(cookieParser())
app.use(express.json())
app.use("api/auth",router)
app.listen(port)