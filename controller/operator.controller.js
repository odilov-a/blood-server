const Operator = require("../models/Operator.js");
const pagination = require("../utils/pagination.js")

exports.getAllOperator = async (req, res) => {
  try {
    const operator = await pagination(Operator, req.query);
    return res.json(operator);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getOperatorById = async (req, res) => {
  try {
    const operator = await Operator.findById(req.params.operatorId);
    if (!operator) {
      return res.status(404).json({ message: "Operator not found" });
    }
    return res.json({ data: operator });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createOperator = async (req, res) => {
  try {
    const newOperator = await Operator.create({...req.body});
    return res.json({ data: newOperator });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateOperator = async (req, res) => {
  try {
    const updatedOperator = await Operator.findById(req.params.operatorId);
    if (!updatedOperator) {
      return res.status(404).json({ message: "Operator not found" });
    }
    Object.assign(updatedOperator, req.body)
    return res.json({ data: updatedOperator });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteOperator = async (req, res) => {
  try {
    const deletedOperator = await Operator.findByIdAndDelete(req.params.operatorId);
    if (!deletedOperator) {
      return res.status(404).json({ message: "Operator not found" });
    }
    return res.json({ message: "Operator deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};