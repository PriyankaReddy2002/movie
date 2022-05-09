var http=require('http')
var fs=require('fs ')
const { stringify } = require('querystring')
var server=http.create server (function(req,res)){
    if(req.url=='\'){
fs.readFile('welcome.txt',function(err,data)){
    res.write(data.to string());
    res.end();
})
else if (req.url=='\it-c'){
    fs.readFile('/*+74')
}
    }
}
