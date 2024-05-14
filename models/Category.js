const mongoose = require("mongoose");
const categorySchame = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Categories = mongoose.model("category", categorySchame);
module.exports = Categories;