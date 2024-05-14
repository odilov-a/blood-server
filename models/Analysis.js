const mongoose = require("mongoose");
const analysisSchame = new mongoose.Schema(
  {
    clientFullName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "client",
      required: true,
    },
    clientCategoryType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Analysis = mongoose.model("analysis", analysisSchame);
module.exports = Analysis;