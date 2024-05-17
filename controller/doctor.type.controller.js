const DoctorType = require("../models/DoctorType.js");
const pagination = require("../utils/pagination.js")

exports.getAllDoctorType = async (req, res) => {
  try {
    const doctorTypes = await pagination(DoctorType, req.query);
    return res.json(doctorTypes);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getDoctorTypeById = async (req, res) => {
  try {
    const doctorType = await DoctorType.findById(req.params.doctorTypeId);
    if (!doctorType) {
      return res.status(404).json({ message: "DoctorType not found" });
    }
    return res.json({ data: doctorType });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createDoctorType = async (req, res) => {
  try {
    const newDoctorType = await DoctorType.create({...req.body});
    return res.json({ data: newDoctorType });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateDoctorType = async (req, res) => {
  try {
    const updatedDoctorType = await DoctorType.findById(req.params.doctorTypeId);
    if (!updatedDoctorType) {
      return res.status(404).json({ message: "DoctorType not found" });
    }
    Object.assign(updatedDoctorType, req.body)
    await updatedDoctorType.save();
    return res.json({ data: updatedDoctorType });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteDoctorType = async (req, res) => {
  try {
    const deletedDoctorType = await DoctorType.findByIdAndDelete(req.params.doctorTypeId);
    if (!deletedDoctorType) {
      return res.status(404).json({ message: "DoctorType not found" });
    }
    return res.json({ message: "DoctorType deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};