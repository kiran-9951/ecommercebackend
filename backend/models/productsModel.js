const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    size: {
        type: String
    },
    colour: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }

}, { timestamps: true })
const Products =  mongoose.model("Products", ProductsSchema);
module.exports = Products;
