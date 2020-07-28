'use strict';

module.exports = function(app) {
    var mac_address = require('../controller/mac_address');
   
    app.route('/mac_addres')
        .get(mac_address.index);

    

};