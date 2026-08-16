const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'


const myserver = http.createServer((req , res)=>{
    res.end("hay shakib , im your server")
    //! Ekhane html code o use kora jaite pare ....
    //res.end("<h1>Hello SHakib</h1>");
});

myserver.listen(port , hostname , ()=>{
    console.log(`server is running Successfully at http://${hostname}:${port}`);
});
