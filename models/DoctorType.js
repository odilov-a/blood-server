const mongoose = require("mongoose");
const doctorTypeSchame = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const doctorTypes = mongoose.model("doctorType", doctorTypeSchame);
module.exports = doctorTypes;