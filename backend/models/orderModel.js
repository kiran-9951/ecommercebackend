const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            productId: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    amount:{
        type:Number,
        required:true
    },
    adress:{
        type:Object,
        required:true
    },
    status:{
        type:String,
        enum: ['pending',  'delivered'],
        default: 'pending'
    }

}, { timestamps: true })
const Orders =  mongoose.model("Orders", OrderSchema);
module.exports = Orders;
