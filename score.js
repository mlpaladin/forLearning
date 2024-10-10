const fs = require("fs")
let score = null

fs.readFile("./resources/成绩.txt","utf-8",function(error,dataStr){
    if(error){
        console.log(error);
    }
    score = dataStr.split(" ")
    for(let i=0; i<score.length; i++){
        score[i].replace("=",":")
    }
    score = score.join("\n")
    console.log(score);
    fs.writeFile("./resources/成绩-OK.txt",score,function(error){
        console.log(error);
    })
})