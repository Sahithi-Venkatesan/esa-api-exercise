'use strict';
//Cart Controller
var mongoose = require('mongoose'),

CartItem = mongoose.model('Cart');

exports.cart_list = function(req, res) {
    CartItem.find({username:req.params.username}, 
      function(err, product) {

      if (err)
        res.send(err);
      res.json(product);
      
    });
  };
  
 exports.cartitemnew = function(req, res) {
    var cartItemnew = new CartItem(req.body);
    cartItemnew.save(function(err, cartItem) {
      if (err)
        res.send(err);
      res.json(cartItem);
    });
  };

exports.show_items_in_cart = function(req, res) {
    CartItem.find({productId:req.params.productId,username:req.params.username}, 
      function(err, product) 
      {
        if (err)
          res.send(err);
        res.json(product);
    });
  };
  
  exports.update_cart = function(req, res) {
    CartItem.findOneAndUpdate({productId: req.params.productId,username:req.params.username}, req.body, {new: true}, 
      function(err, product) 
      {
        if (err)
          res.send(err);
        res.json(product);
    });
  };
  
  exports.delete_cart = function(req, res) {
    CartItem.remove({
      productId: req.params.productId, username:req.params.username},
       function(err, product) 
       {
        if (err)
          res.send(err);
        res.json({ message: 'The product has been deleted!' });
    });
  };
