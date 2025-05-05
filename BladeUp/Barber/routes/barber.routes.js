import { Router } from "express";

import { getAllBarbersWithServices } from "../controller/barber.controller.js";
import { verifyToken } from "../../../shared/middlewares/verifyToken.js";
import { verifyRole } from "../../../shared/middlewares/verifyRole.js";

const router = Router();

router.get("/", verifyToken, getAllBarbersWithServices);

export default router;
