const mongoose = require("mongoose");
const categorySchame = new mongoose.Schema(
  {
    analysisType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("category", categorySchame);
module.exports = Category;