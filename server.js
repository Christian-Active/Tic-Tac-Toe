const http = require("http");
const fileSys = require("fs");

let server = http.createServer((req, res) => {
  res.getHeader("Content-Type", "text/html");

  let link = "./";
  console.log(req.url);
  switch (req.url) {
    case "/":
      link += "index.html";
      res.statusCode = 200;
      break;
    case "/game":
      link += "game.html";
      res.statusCode = 200;
      break;
    case "/help":
      link += "help.html";
      res.statusCode = 200;
      break;
    case "/credits":
      link += "credits.html";
      res.statusCode = 200;
      break;
    default:
      link += "404.html";
      res.statusCode = 404;
      break;
  }
  console.log(link);

  fileSys.readFile(link, (err, data) => {
    if (err) {
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(5501, "192.168.1.140", () => {
  console.log("Currently listening to any request...");
});
