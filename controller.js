const helpers = require("./helpers");
const logger = require("./logger")
const api = {};

api["/api/duck"] = require("./api/duck");
api["/api/cat"] = require("./api/cat");
api["/api/person"] = require("./api/person");


module.exports = function(req, res){
    logger(req, res);
    //helpers.send(req, res, {besked: "her kommer beskeden"})

    //const end = req.url
    const endpoint = new URL(req.url, "http://localhost.3003").pathname;

    const regEx = /^\/((css|img|js)\/)?\w+\.(html|css|png|img|jpg|jpe?g|js|gif|tiff|bmp|svg)$/i;
    let result = endpoint.match(regEx);
    
    if(result)
    {
        //helpers.sendfile(req, res, "./static/" + result[0]);
        helpers.streamFile(req, res, "./static/" + result[0]);
        return;
    }
    //
    // hvis jeg er her er der ikke fundet et match
    // /^(?<route>\/api\/\w+)(?<params>(\/\w+)*)$/
    const apiParamRx = /^(?<route>\/api\/\w+)(?<id>(\/\w+)*)$/
    //const apiRX = /^\/api\/\w+$/i;
    result = endpoint.match(apiParamRx);
    //apiparam
    //console.log(result);

    if(result){
        // hvis jeg er her er der fundet et match
        //result[0]]req.method])
        
        if(api[result.groups.route] && result.groups.id == null)
        {
            if(api[result.groups.route][req.method])
            {
                api[result.groups.route][req.method].handler(req, res, result.groups.id);
                return;
            }
            helpers.send(req, res, {msg: "Metode ikke tilladt her"}, 405);
            return;
        }if(api[result.groups.route] && result.groups.id != null)
        {
            if(api[result.groups.route][req.method])
            {
                api[result.groups.route][req.method].handler(req, res, result.groups.id);
                return;
            }
            helpers.send(req, res, {msg: "Metode ikke tilladt her"}, 405);
            return;
        }
        if(api[result[0]]){

            if(api[result[0]][req.method])
            {
                api[result[0]][req.method].handler(req, res);
                return;
            }
            helpers.send(req, res, {msg: "Metode ikke tilladt her"}, 405);
            return;
        }
    }   
    console.log(endpoint);
    helpers.send(req, res, {message: "resource " + endpoint + " Ikke tilgængelig"}, 404);
    // ikke brug code section
    //forbedre api id and grouping
   // (^\/api\/\w+)(\/?\w+$)

   // /(?<Grp1>(?<Grp2>^\/api\/\w+)(?<Grp3>\/?\w+$))/i;
   //(?<Grp1>(?<Grp2>)^\/api\/\w+)(?<Grp3>)(\/?\w+$)
    //if(endpoint === "/index.html")
    //{
    //    helpers.sendfile(req, res, "./static/index.html");
     //   return;
   // }
    
}