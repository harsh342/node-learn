var fs = require("fs");

if(fs.existsSync("temp")){
    console.log("folder exists");
    if(fs.existsSync("temp/new.txt")){
        fs.unlinkSync("temp/new.txt");
    }
    fs.rmdirSync("temp");
}


fs.mkdirSync("temp");
if(fs.existsSync("temp")){
    process.chdir("temp");
    
    fs.writeFileSync("test.txt","This is a new File");
    fs.renameSync("test.txt","new.txt");
    
    console.log(fs.readFileSync("new.txt").toString("UTF-8"));
}