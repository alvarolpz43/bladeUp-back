import { Router } from "express";
import {
  getAllClients,
  getClientById,
} from "../controller/clientController.js";

import { verifyToken } from "../../../shared/middlewares/verifyToken.js";
import { verifyRole } from "../../../shared/middlewares/verifyRole.js";

const router = Router();

router.get("/", verifyToken, getAllClients);
router.get("/:id", verifyToken, getClientById);

export default router;
