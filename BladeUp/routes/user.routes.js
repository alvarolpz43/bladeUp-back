import { Router } from "express";

import { getAllBarbersWithServices } from "../controllers/userController.js";
import { verifyToken } from "../../shared/middlewares/verifyToken.js";
import { verifyRole } from "../../shared/middlewares/verifyRole.js";

const router = Router();

router.get("/barbers", verifyToken, getAllBarbersWithServices);

export default router;
