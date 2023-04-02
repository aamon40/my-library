// set up all the routes for the index of our application
const express = require("express");
// call the router function of express
const router = express.Router();
const Book = require("../models/book");

router.get("/", async (req, res) => {
  let books;
  try {
    books = await Book.find().sort({ createdAt: "desc" }).limit(10).exec();
  } catch {
    books = [];
  }
  res.render("index", { books: books });
});

module.exports = router;
