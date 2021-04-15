//Cart router
'use strict';

module.exports = function(app) {

var cart =require('../controllers/controllers-cart')

app.route('/rest/v1/users/:username/cart')
.get(cart.cart_list)

app.route('/rest/v1/users/:username/cart/:productId')
.get(cart.show_items_in_cart)
.post(cart.cartitemnew)
.put(cart.update_cart)
.delete(cart.delete_cart);

};
