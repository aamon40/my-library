const mongoose = require("mongoose");
const Book = require("./book");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Run this method before the delete action. It prevents deleting an author that is still associated with a book
authorSchema.pre("deleteOne", function (next) {
  Book.find({ author: this.id }, (err, books) => {
    if (err) {
      next(err);
    } else if (books.length > 0) {
      next(new Error("This author has books"));
    } else {
      next();
    }
  });
});

module.exports = mongoose.model("Author", authorSchema);
