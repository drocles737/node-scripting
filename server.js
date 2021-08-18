const http = require("http");
const controller = require("./controller");

http.createServer(controller).listen(3003, function(){
    console.log("Server Started, gå til http://localhost:3003");
});

//.listen(3003);


//res.statusCode = 200;
  //  res.setHeader("Content-type", "text/plain");
    ////res.write("hello world..");
    // example af forskellige res.end("hello world");
    //res.end("hej verden...");
//server.listen(3003);