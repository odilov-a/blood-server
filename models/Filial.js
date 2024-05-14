const mongoose = require("mongoose");
const filialSchame = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    filialName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    workingTime: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Filials = mongoose.model("filial", filialSchame);
module.exports = Filials;