var fs = require("fs");

if(fs.existsSync("temp")){
    console.log("folder exists");
    if(fs.existsSync("temp/new.txt")){
        fs.unlinkSync("temp/new.txt");
    }
    fs.rmdirSync("temp");
}
fs.mkdir("temp",()=>{
  fs.exists("temp",(check)=>{
    if(check){
        process.chdir("temp");
        fs.writeFile("test.txt","This is new file",()=>{
            fs.rename("test.txt","new.txt",()=>{
                fs.readFile("new.txt",(err,data)=>{
                   if (err) throw err;
                    console.log(data.toString("utf-8"));
                })
            });
        });
    }
})
    
})
