import { Router } from "express";

import { registerService } from "../controllers/services.controller.js";
import { verifyToken } from "../../../shared/middlewares/verifyToken.js";
import { verifyRole } from "../../../shared/middlewares/verifyRole.js";

const router = Router();

router.post("/", verifyToken, verifyRole("admin"), registerService);

export default router;
