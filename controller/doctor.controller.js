const Doctor = require("../models/Doctor.js");
const pagination = require("../utils/pagination.js")

exports.getAllDoctor = async (req, res) => {
  try {
    const doctors = await pagination(Doctor, req.query, "doctorType", "filial");
    return res.json(doctors);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    return res.json({ data: doctor });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createDoctor = async (req, res) => {
  try {
    const newDoctor = await Doctor.create({...req.body});
    return res.json({ data: newDoctor });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findById(req.params.doctorId);
    if (!updatedDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    Object.assign(updatedDoctor, req.body)
    await updatedDoctor.save();
    return res.json({ data: updatedDoctor });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findByIdAndDelete(req.params.doctorId);
    if (!deletedDoctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    return res.json({ message: "Doctor deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};