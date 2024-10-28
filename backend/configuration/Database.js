const mongoose = require("mongoose")

const Database = mongoose.connect("mongodb://localhost:27017/Ecommerce")
.then(() => {
    console.log("Database connected")
})
.catch((error) => {
    console.log("Disconnected database ", error)
})

module.exports  = Database;
