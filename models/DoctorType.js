const mongoose = require("mongoose");
const doctorTypeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const doctorTypes = mongoose.model("DoctorType", doctorTypeSchema);
module.exports = doctorTypes;