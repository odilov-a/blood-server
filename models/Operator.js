const mongoose = require("mongoose");
const operatorSchema = new mongoose.Schema(
  {
    filial: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Filial",
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

const Operators = mongoose.model("Operator", operatorSchema);
module.exports = Operators;