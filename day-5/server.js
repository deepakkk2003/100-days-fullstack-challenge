const http=require('http')

// const server=http.createServer((req,res)=>{
//     res.end("Hello from server from deepak")
// })

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
    
  } else if(req.url === '/pages'){
    res.end("this page is used for storing the pages data")
  } else {
    res.end("Page Not Found");
  }
});

server.listen(3000);
