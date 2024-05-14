const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const operatorController = require("../controller/operator.controller.js");
const operatorRoutes = Router();

operatorRoutes.get("/", operatorController.getAllOperator);
operatorRoutes.get("/:operatorId", operatorController.getOperatorById);
operatorRoutes.post("/", authMiddleware, operatorController.createOperator);
operatorRoutes.put("/:operatorId", authMiddleware, operatorController.updateOperator);
operatorRoutes.delete("/:operatorId", authMiddleware, operatorController.deleteOperator);

module.exports = operatorRoutes;