const { Router } = require("express");
const translationRoutes = require("./translation.routes.js");
const userRoutes = require("./user.routes.js");
const blogRoutes = require("./blog.routes.js");
const analysisRoutes = require("./analysis.routes.js");
const categoryRoutes = require("./category.routes.js");
const router = Router();

router.use("/translations", translationRoutes);
router.use("/users", userRoutes);
router.use("/blogs", blogRoutes);
router.use("/analysis", analysisRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;