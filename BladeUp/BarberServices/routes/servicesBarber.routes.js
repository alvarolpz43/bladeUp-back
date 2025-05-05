import { Router } from "express";
import {
  registerBarberService,
  getAllServices,
} from "../controller/servicesBarberController.js";

import { verifyToken } from "../../../shared/middlewares/verifyToken.js";
import { verifyRole } from "../../../shared/middlewares/verifyRole.js";

const router = Router();

router.post("/", verifyToken, verifyRole("barber"), registerBarberService);
router.get("/", verifyToken, getAllServices);

export default router;
