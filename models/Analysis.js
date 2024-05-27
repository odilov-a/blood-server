const mongoose = require("mongoose");
const analysisSchema = new mongoose.Schema(
  {
    clientFullName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    clientCategoryType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    fileUrl: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);

const Analysis = mongoose.model("Analysis", analysisSchema);
module.exports = Analysis;