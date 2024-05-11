const mongoose = require("mongoose");
const analysisSchame = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    analysisType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    file: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const Analysis = mongoose.model("analysis", analysisSchame);
module.exports = Analysis;
