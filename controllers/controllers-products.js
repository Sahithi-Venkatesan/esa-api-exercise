'use strict';
//Products Controller
var mongoose = require('mongoose'),

Product = mongoose.model('Products');

exports.all_products = function(req, res) {
  Product.find({}, function(err, product) 
  {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.create_product = function(req, res) {
  var newProduct = new Product(req.body);
  newProduct.save(function(err, product) 
  {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.show_product = function(req, res) {
  Product.find({productId:req.params.productId}, function(err, product) 
  {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.update_product = function(req, res) {
  Product.findOneAndUpdate({productId: req.params.productId}, req.body, {new: true}, function(err, product) 
  {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.delete_product = function(req, res) {
  Product.remove({
    _id: req.params.productId},
     function(err, product) 
     {
      if (err)
        res.send(err);
      res.json({ message: 'The product has been deleted' });
  });
};
