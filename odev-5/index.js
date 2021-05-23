const http = require("http");

const hostname = "127.0.0.1";
const port = 5000;
const send = (res, statusCode, html) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "text/html");
  res.end(html);
};
const server = http.createServer((req, res) => {
  let html = "<h2>404: Not Found</h2>";
  if (req.url == "/") {
    let html = "<h2>Ana sayfaya hos geldiniz :)</h2>";
    send(res, 200, html);
  } else if (req.url == "/hakkimda") {
    let html = "<h2>Hakkimda sayfasina hos geldiniz :)</h2>";
    send(res, 200, html);
  } else if (req.url == "/iletisim") {
    let html = "<h2>Iletisim sayfasina hos geldiniz :)</h2>";
    send(res, 200, html);
  } else {
    send(res, 404, html);
  }
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
