var macaddress = require('macaddress');


exports.index = function(req, res) {
    macaddress.one(function (err, mac) {
        console.log("Mac address for this host: %s", mac);  
      });
};