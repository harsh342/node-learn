var http = require("http");

var request = http.request("http://www.google.com/",(response)=>{
    console.log("First Hit>>>>>>")
    console.log(response.statusCode);
    response.pipe(process.stdout);
     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
});
request.end();

var options = {
    host:"www.google.com",
    port:80,
    path:"/",
    method:"GET"
}

var request = http.request(options,(response)=>{
    console.log("\nSecond Hit>>>>>>")
    console.log(response.statusCode);
    response.pipe(process.stdout);
     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
});
request.end();


var options = {
    host:"www.google.com",
    port:80,
    path:"/",
    method:"GET"
}

http.get(options,(response)=>{
    console.log("\nThird Hit>>>>>>")
    console.log(response.statusCode);
    response.pipe(process.stdout);
     console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
});