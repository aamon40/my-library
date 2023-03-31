// set up all the routes for the index of our application
const express = require("express");
// call the router function of express
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

module.exports = router;
