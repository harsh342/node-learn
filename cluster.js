var cluster = require("cluster");
var http = require("http");
var numberOfWorkers = 2;

if(cluster.isMaster){
    
for(var i=0;i<numberOfWorkers;i++){
    console.log("About to Fork Worker!!")
    cluster.fork();
}

cluster.on("fork",(worker)=>{
    console.log("master: has forked worker "+worker.id);
})

cluster.on("online",(worker)=>{
    console.log("master: online event "+worker.id);
})

cluster.on("listening",(worker,address)=>{
    console.log("master: listening event "+worker.id+" pid "+worker.process.pid+" address "+address.address+" port "+address.port);
})

cluster.on("exit",(worker,code,signal)=>{
    console.log("master: exit event "+worker.id);
})

}else{
    
    console.log("Cluster Worker id is Ready "+cluster.worker.id);
    
    var count = 0;
    
    http.createServer(function(req,res){
        res.writeHead(200);
        count++;
        console.log("Worker #"+cluster.worker.id+" (pid = "+cluster.worker.process.pid+") with count="+count);
        res.end("Hello from worker "+cluster.worker.id+" (pid "+cluster.worker.process.pid+") with count="+count);
        if(count===3){
            cluster.worker.destroy();
        }
    }).listen(process.env.PORT,process.env.IP);
    
}