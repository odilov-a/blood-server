const Client = require("../models/Client.js");
const pagination = require("../utils/pagination.js")

exports.getAllClient = async (req, res) => {
  try {
    const clients = await pagination(Client, req.query);
    return res.json(clients);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.clientId);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    return res.json({ data: client });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createClient = async (req, res) => {
  try {
    const newClient = await Client.create({...req.body});
    return res.json({ data: newClient });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateClient = async (req, res) => {
  try {
    const updatedClient = await Client.findById(req.params.clientId);
    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    Object.assign(updatedClient, req.body)
    return res.json({ data: updatedClient });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.clientId);
    if (!deletedClient) {
      return res.status(404).json({ message: "Client not found" });
    }
    return res.json({ message: "Client deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};