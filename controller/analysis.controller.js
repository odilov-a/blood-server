const Analysis = require("../models/Analysis.js");
const pagination = require("../utils/pagination.js")

exports.getAllAnalysis = async (req, res) => {
  try {
    const analysis = await pagination(Analysis, req.query, "clientFullName", "clientCategoryType");
    return res.json(analysis);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getAnalysisById = async (req, res) => {
  try {
    const analysis = await Analysis.findById(req.params.analysisId);
    if (!analysis) {
      return res.status(404).json({ message: "Analysis not found" });
    }
    return res.json({ data: analysis });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.createAnalysis = async (req, res) => {
  try {
    if (req.files && req.files.length > 0) {
      const relativeFilePath =  req.files[0].filename;
      req.body.fileUrl = process.env.URL_FILES + relativeFilePath; 
    }
    const newAnalysis = await Analysis.create({...req.body});
    return res.json({ data: newAnalysis });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateAnalysis = async (req, res) => {
  try {
    if (req.files && req.files.length > 0) {
      const relativeFilePath =  req.files[0].filename;
      req.body.fileUrl = process.env.URL_FILES + relativeFilePath; 
    }
    const updatedAnalysis = await Analysis.findById(req.params.analysisId);
    if (!updatedAnalysis) {
      return res.status(404).json({ message: "Analysis not found" });
    }
    Object.assign(updatedAnalysis, req.body);
    await updatedAnalysis.save();
    return res.json({ data: updatedAnalysis });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.deleteAnalysis = async (req, res) => {
  try {
    const deletedAnalysis = await Analysis.findByIdAndDelete(req.params.analysisId);
    if (!deletedAnalysis) {
      return res.status(404).json({ message: "Analysis not found" });
    }
    return res.json({ message: "Analysis deleted successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};