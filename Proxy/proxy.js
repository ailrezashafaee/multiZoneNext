const http = require("http");
const httpProxy = require("http-proxy");

// Create a proxy server with custom application logic
const proxy = httpProxy.createProxyServer({});
const BASE_PATH = "/blog";

http
  .createServer(function (req, res) {
    req.headers["X-Base-Path"] = BASE_PATH;
    if (req.url.includes(BASE_PATH)) {
      proxy.web(req, res, { target: "http://localhost:4000", ws: true });
    } else {
      proxy.web(req, res, { target: "http://localhost:3000", ws: true });
    }
  })
  .listen(5000);
