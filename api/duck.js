const {send}  = require("../helpers");

module.exports = {
    GET: {
        params: ["id"],
        handler: function(req, res){
                send(req, res, {says: "Quack", method: req.method});
       }
   },
    GET: {
        params: ["id"],
        handler: function(req, res, p){
                let parms = p !== ""? p.replace("/", "").split("/"): null;
                send(req, res, {says: "Quack2", method: req.method, parm: parms});
        }
    },  
    POST: {
        handler: function(req, res){
            send(req, res, {says: "Quacksss", method: req.method});
        }
    }
}