//Products router
'use strict';

module.exports = function(app) {

var product = require('../controllers/controllers-products');

app.route('/rest/v1/products')
.get(product.all_products)
.post(product.create_product);


app.route('/rest/v1/product/:productId')
.get(product.show_product)
.put(product.update_product)
.delete(product.delete_product);
 
};
