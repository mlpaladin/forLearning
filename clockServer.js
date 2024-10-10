//导入所需模块
const http = require("http")
const fs = require("fs")
const path = require("path")

//创建web服务器
const server = http.createServer()

//绑定请求事件
server.on("request",(req,res) =>{
    console.log("someone visited the server");
    //将请求url映射为文件存储地址
    let fpath = path.join(__dirname,req.url)
    //解决中文乱码问题
    res.setHeader("Content-Type","text/html; charset=utf-8")
    //根据fpath路径读取文件资源
    fs.readFile(fpath,"utf-8",(error,dataStr) => {
        //默认响应字符串
        let defaultStr = "404 NOT FOUND 未找到资源"
        if(error) res.end(defaultStr);
        else{
            res.end(dataStr,() =>{
                console.log("访问成功");
            })
        }
    })
})

//启动服务器
server.listen(80,() => {
    console.log("server is running at http://127.0.0.1");
})