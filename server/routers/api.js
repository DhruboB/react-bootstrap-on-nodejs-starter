const express = require("express");

module.exports = function(app) {
  const router = express.Router();

  router.use(function(req, res, next) {
    // res.json({ message: "hooray! welcome to our FIRST api!" });
    console.log("hooray! welcome to our FIRST api!");
    next();
  });

  // This is API root path with /api prefix
  router.get("/", function(req, res, next) {
    res.json({ message: "hooray! welcome to our api!" });
    next();
  });

  // Bear API implementation - a GET API
  router
    .route("/bear")
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .get(function(req, res) {
      res.json({ message: "Bear is roaring!" });
    });

  app.use("/api", router);
};
