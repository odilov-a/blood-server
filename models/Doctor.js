const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
  {
    doctorType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DoctorType",
      required: true,
    },
    filial: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Filial",
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

const Doctors = mongoose.model("Doctor", doctorSchema);
module.exports = Doctors;