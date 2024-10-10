const fs = require("fs")
const path = require("path")

//抽取css的正则表达式
let cssStyle = /<style>([\s\S]*)<\/style>/
//抽取js的正则表达式
let jsStyle = /<script>([\s\S]*)<\/script>/

//读取index.html文件
fs.readFile(path.join(__dirname,"./index.html"),"utf-8",function(error,htmlStr){
    if(error){
        console.log(error.message);
        return
    }
    resolveCSS(htmlStr)
    resolveJS(htmlStr)
    resolveHTML(htmlStr)
})

//CSS处理函数
function resolveCSS(htmlStr){
    //匹配CSS代码
    let css = cssStyle.exec(htmlStr)
    //写入新文件
    fs.writeFile(path.join(__dirname,"./clock/index.css"),css[1],function(error){
        if(error){
            console.log(error.message);
        }else{
            console.log("写入CSS文件成功");
        }
    })
}

//JS处理函数
function resolveJS(htmlStr){
    //匹配JS代码
    let js = jsStyle.exec(htmlStr)
    //写入新文件
    fs.writeFile(path.join(__dirname,"./clock/index.js"),js[1],function(error){
        if(error){
            console.log(error.message);
        }else{
            console.log("写入JS文件成功");
        }
    })
}

//将index.html内的代码改为外联css和js文件
function resolveHTML(htmlStr){
    //替换为CSS外联代码
    htmlStr = htmlStr.replace(cssStyle,'<link rel="stylesheet" href="./clock/index.css"></link>')
    //替换为JS外联代码
    htmlStr = htmlStr.replace(jsStyle,'<script src="./clock/index.js"></script>')
    //重新写入文件
    fs.writeFile(path.join(__dirname,"./newIndex.html"),htmlStr,function(error){
        if(error){
            console.log(error.message);
        }else{
            console.log("已生成newIndex.html");
        }
    })
}