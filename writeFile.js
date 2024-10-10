const fs = require("fs")

fs.writeFile("./resources/write.txt","hello node.js",function(error){
    console.log(error);
})