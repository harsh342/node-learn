var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    res.setHeader("200",{"Content-Type":"text/plain"});
    if(req.url == "/text.txt"){
        fs.createReadStream(__dirname+"/text.txt").pipe(res);
    }else{
        res.end("File Not Found!!")
    }
}).listen(process.env.PORT,process.env.IP);

console.log("Server is running !!!!!! PORT:"+process.env.PORT+" HOST:"+process.env.IP);