const mongoose = require("mongoose");
const doctorSchame = new mongoose.Schema(
  {
    doctorType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "doctorType",
      required: true,
    },
    filial: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "filial",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    workingTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Doctors = mongoose.model("doctor", doctorSchame);
module.exports = Doctors;