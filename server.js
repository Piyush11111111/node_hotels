const http = require('http');
const fs = require('fs');
const path = require('path');


const port = 3000;


const server  = http.createServer((req ,res) => {
    const filepath = path.join(__dirname, req.url ==='/'? "index.html":req.url);

    console.log(filepath);
    

   const extName =  String(path.extname(filepath)).toLowerCase();

   const minetypes ={
    '.html':'text/html',
    '.css':'text/css',
    '.js':'text/javascript',
    '.png':'text/png',
   };

   const contenttype =minetypes[extName]||'application/octet-stream';


   fs.readFile(filepath,(err,content) => {
    if (err) {
        if(err.code === "ENOENT"){
            res.writeHead(404,{"Content-Type": "text/html"});
            res.end("404:file not found brooooo");
        }
        
    } else{
        res.writeHead(200,{'Content-Type':contenttype});
        res.end(content,"utf-8");
    }
   });

});


server.listen(port , () =>{
    console.log(`server is listening on port ${port}`);
    
});