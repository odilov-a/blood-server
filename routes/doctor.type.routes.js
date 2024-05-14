const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const doctorTypeController = require("../controller/doctor.type.controller.js");
const doctorTypeRoutes = Router();

doctorTypeRoutes.get("/", doctorTypeController.getAllDoctorType);
doctorTypeRoutes.get("/:doctorTypeId", doctorTypeController.getDoctorTypeById);
doctorTypeRoutes.post("/", authMiddleware, doctorTypeController.createDoctorType);
doctorTypeRoutes.put("/:doctorTypeId", authMiddleware, doctorTypeController.updateDoctorType);
doctorTypeRoutes.delete("/:doctorTypeId", authMiddleware, doctorTypeController.deleteDoctorType);

module.exports = doctorTypeRoutes;