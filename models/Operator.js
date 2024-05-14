const mongoose = require("mongoose");
const operatorSchame = new mongoose.Schema(
  {
    filial: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "filial",
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Operators = mongoose.model("operator", operatorSchame);
module.exports = Operators;