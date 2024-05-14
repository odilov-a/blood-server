const mongoose = require("mongoose");
const clientSchame = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Clients = mongoose.model("client", clientSchame);
module.exports = Clients;