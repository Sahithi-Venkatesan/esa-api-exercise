//Products-Models
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    
    productId: {
      type: String,
      required: true
    },
    category: {
        type: String,
        required: true
      },
    productName: {
        type: String,
        required: true
    },
    productModel: {
        type: String,
        required: true
      },
    price: {
        type: Number,
        required: true,
        validate(price_prods) 
        {
          if (price_prods < 0) throw new Error("Price can't be negative...please check your price again");
        }
    },
    availableQuantity: {
        type: Number,
        required: true,
        validate(quantity_prods) 
        {
          if (quantity_prods < 0) throw new Error("Quantity can't be negative...please check your available quantity again");
        }
      },
    
  });

module.exports = mongoose.model('Products', ProductSchema);
