const helpers = require("../helpers");
const mssql = require("../data/mssql");

module.exports = {
    GET: {
        //params: ["id"],
        handler: async function(req, res, param){
                let parms = param !== ""? param.replace("/", "").split("/"): null;
                if(parms == null)
                {
                    let viewresult = await mssql.Getall();
                    console.log(viewresult);
                    helpers.send(req, res, viewresult);
                }
                if (parms != null)
                {
                    let viewresult = await mssql.Getbyid(parms);
                    console.log(viewresult);
                    helpers.send(req, res, viewresult);
                }
                
        }
    }, 
    // GET: {
    //     params: ["id"],
    //     handler: function(req, res, p){
    //             let parms = p !== ""? p.replace("/", "").split("/"): null;
    //             helpers.send(req, res, {id: parms});
    //             mssql.Getid();
    //     }
    // }, 
    POST: {
        //params: ["id"],
        handler: async function(req, res, p){
                let parms = p !== ""? p.replace("/", "").split("/"): null;
                let parm1 = parms[0];
                let parm2 = parms[1];
               // console.log(parm2)
                mssql.insert(parm1, parm2);
                helpers.send(req, res, {id: parms});
               // mssql.insert(parm1, parm2);
        }
    }, 
    DELETE: {
        //params: ["id"],
        handler: async function(req, res, p){
            let parms = p !== ""? p.replace("/", "").split("/"): null;
            let parm1 = parms[0];
           // console.log(parm2)
            mssql.Delete(parm1);
            helpers.send(req, res, {id: parms});
           // mssql.insert(parm1, parm2);
    }
    }, 
    PUT: {
        //params: ["id"],
        handler: async function(req, res, p){
            let parms = p !== ""? p.replace("/", "").split("/"): null;
            let parm1 = parms[0];
            let parm2 = parms[1];
            let parm3 = parms[2];
           // console.log(parm2)
            mssql.update(parm1, parm2, parm3);
            helpers.send(req, res, {id: parms});
           // mssql.insert(parm1, parm2);
    }
    }
    
}

