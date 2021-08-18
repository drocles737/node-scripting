const {send}  = require("../helpers");

module.exports = {
    GET: {
        //req, res, param
        //param: "eksempel";
        handler: function(req, res){
                send(req, res, {says: "miau", method: req.method});
        }
    },
    POST: {
        handler: function(req, res){
            send(req, res, {says: "miau", method: req.method});
        }
    }
}