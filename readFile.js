const fs = require("fs")

fs.readFile("./resources/fs.txt","utf8",function(error,dataStr){
    console.log(error);
    console.log("~~~~~~~~~~~~~~~~~~~~~~");
    console.log(dataStr);
})