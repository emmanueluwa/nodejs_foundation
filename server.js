// most basic nodejs script that can be written, to create a server
// at one point in time this would have taken many more lines of code

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000; // usually 443 when browsing the web

const server = http.createServer((req, res) => {
  res.statusCode = 200; // main success state

  res.setHeader("Content-Type", "text/html");

  res.end("Obota Ngu");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
