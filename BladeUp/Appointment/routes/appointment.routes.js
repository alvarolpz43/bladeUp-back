import { Router } from "express";
import { appointmentController } from "../controllers/appointmentController.js";

import { verifyToken } from "../../../shared/middlewares/verifyToken.js";
import { verifyRole } from "../../../shared/middlewares/verifyRole.js";

const router = Router();

// 📌 Ver citas  del barber
router.get(
  "/barber",
  verifyToken,
  //   verifyRole("barber"),
  appointmentController.getRequestsByBarber
);

export default router;
