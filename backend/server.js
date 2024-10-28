const express = require("express");
const cors = require("cors");
const app = express()
const PORT = 2020
const Database = require("./configuration/Database")
const productRoute =require("./routes/productRoute")
const userRoute =require("./routes/userRoute")
const {verifyToken,restrict}=require("./middlewares/authorization")
app.use(express.json())
app.use(cors())
app.use("/api/auth",userRoute)
app.use("/api/products",productRoute)
app.use("/uploads",express.static("uploads"))


// app.get("/data",verifyToken,restrict("admin"),(req,res)=>{
//     res.status(201).json({message:"welcome admin"})
// })
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})