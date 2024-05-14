const { Router } = require("express");
const authMiddleware = require("../middlewares/auth.middleware.js");
const clientController = require("../controller/client.controller.js");
const clientRoutes = Router();

clientRoutes.get("/", clientController.getAllClient);
clientRoutes.get("/:clientId", clientController.getClientById);
clientRoutes.post("/", authMiddleware, clientController.createClient);
clientRoutes.put("/:clientId", authMiddleware, clientController.updateClient);
clientRoutes.delete("/:clientId", authMiddleware, clientController.deleteClient);

module.exports = clientRoutes;