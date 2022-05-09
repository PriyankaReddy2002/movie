const http = require('http');
const fs = require('fs');
const url = require('url');
let result;
 function write(result)
 {
     fs.writeFile("Student.json",JSON.stringify(result),function(err){
         console.log(err);
     });
 }
 const server = http.createServer(function(req,res)
 {
     if(req.url=='/')
     {
         res.write("<h1>Welcome to Student webpage</h1>");
         res.end();
     }
     if(req.url=="/stddata"&&req.method=="GET")
     {
         fs.readFile("Student.json",function(err,data))
     }
 })
