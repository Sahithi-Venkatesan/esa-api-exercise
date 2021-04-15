//Cart-Models
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CartSchema = new Schema({

    username:{
        type:String,
        required:true
    },
    
    productId: {
        type: String,
        required: true
    },

    productName: {
        type: String,
        required:true
    },

    quantity: {
        type: Number,
        required:true,
        default: 0,
        validate(quantity_prods) 
        {
            if (quantity_prods < 0) throw new Error("Quantity can't be neagtive...please check your quantity");
        }
    },
    amount: {
        type: Number,
        required:true,
        validate(amount_prods) 
        {
            if (amount_prods < 0) throw new Error("Amount can't be negative...please check your amount");
        }
    }
});
module.exports = mongoose.model('Cart', CartSchema);
