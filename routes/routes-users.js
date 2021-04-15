//users router
'use strict';

module.exports = function(app) {

var product = require('../controllers/controllers-users');
app.route('/rest/v1/users')
    .get(product.show_users)
    .post(product.create_user);


app.route('/rest/v1/users/:username')
    .get(product.get_details_user)
    .put(product.update_users)
    .delete(product.delete_user);

};
