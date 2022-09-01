const protocol = require("http");

const promises = require('fs').promises;

const listener = function (request, response) {
  console.log(request.url);

  if (request.url === "/") 
  {
    promises.readFile(__dirname + "/jsapp.html")
      .then(contents => 
      {
        response.setHeader("Content-Type", "text/html; charset=UTF-8");
        response.writeHead(200);
        response.end(contents);
      });
  } 
  else 
  {
    promises.readFile(__dirname + "/jsappdata.json")
      .then(contents => 
      {
        response.setHeader("Content-Type", "application/json; charset=UTF-8");
        response.writeHead(200);
        response.end(contents);
      });

  }
  
};

const fred = protocol.createServer(listener);

const hostname = "0.0.0.0";
const portnum = "8080";

fred.listen(
  portnum, hostname, () => 
  {
    console.log(`This server is running on the address http://${hostname}:${portnum}`);
  }
);