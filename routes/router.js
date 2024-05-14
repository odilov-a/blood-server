const { Router } = require("express");
const translationRoutes = require("./translation.routes.js");
const userRoutes = require("./user.routes.js");
const blogRoutes = require("./blog.routes.js");
const analysisRoutes = require("./analysis.routes.js");
const categoryRoutes = require("./category.routes.js");
const clientRoutes = require("./client.routes.js");
const doctorTypeRoutes = require("./doctor.type.routes.js");
const filialRoutes = require("./filial.routes.js");
const doctorRoutes = require("./doctor.routes.js");
const operatorRoutes = require("./operator.routes.js");
const router = Router();

router.use("/translations", translationRoutes);
router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/analysis", analysisRoutes);
router.use("/categories", categoryRoutes);
router.use("/clients", clientRoutes);
router.use("/doctor-types", doctorTypeRoutes);
router.use("/filials", filialRoutes);
router.use("/doctors", doctorRoutes);
router.use("/operators", operatorRoutes);

module.exports = router;