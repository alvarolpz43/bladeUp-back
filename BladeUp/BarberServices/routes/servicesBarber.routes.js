import { Router } from "express";
import { registerService } from "../controller/servicesBarberController.js";

import { verifyToken } from "../../../shared/middlewares/verifyToken.js";
import { verifyRole } from "../../../shared/middlewares/verifyRole.js";

const router = Router();

router.post("/", verifyToken, verifyRole("Barber"), registerService);

export default router;
