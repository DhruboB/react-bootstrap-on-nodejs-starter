const appName = require("./../package").name;
const http = require("http");
const express = require("express");
const log4js = require("log4js");
const devConfig = require("./config/dev.json");
const path = require("path");

const logger = log4js.getLogger(appName);
logger.level = process.env.LOG_LEVEL || "info";
const app = express();
const server = http.createServer(app);

app.use(log4js.connectLogger(logger, { level: logger.level }));
require("./routers/index")(app, server);

// avoid adding any code here or add with care. You can use index.js instead,
// to invoke your specific API implemnetaion, else feel free to append new APIs in api.js file.

const port = process.env.PORT || devConfig.port;
server.listen(port, function() {
  logger.info(`nodejsreactapp listening on http://localhost:${port}`);
});

app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "404.html"));
});

app.use(function(err, req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "500.html"));
});

module.exports = server;
