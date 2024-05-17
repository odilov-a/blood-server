const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Clients = mongoose.model("Client", clientSchema);
module.exports = Clients;