import { Router } from "express";
import { appointmentRequestController } from "../controller/appointmentRequestController.js";

import { verifyToken } from "../../../shared/middlewares/verifyToken.js";
import { verifyRole } from "../../../shared/middlewares/verifyRole.js";

const router = Router();


//Solo el cliente es el que crea las las reqAppoimnet
router.post(
  "/",
  verifyToken,
  verifyRole("client"),
  appointmentRequestController.createRequest
);

// 📌 Ver solicitudes del cliente autenticado
router.get(
  "/client",
  verifyToken,
  verifyRole("client"),
  appointmentRequestController.getRequestsByClient
);

// 📌 Ver solicitudes del barbero autenticado
router.get(
  "/barber",
  verifyToken,
  verifyRole("barber"),
  appointmentRequestController.getRequestsByBarber
);

// 📌 Aceptar una solicitud (barbero)
router.put(
  "/accept/:id",
  verifyToken,
  verifyRole("barber"),
  appointmentRequestController.acceptRequest
);

// 📌 Rechazar una solicitud (barbero)
router.put(
  "/reject/:id",
  verifyToken,
  verifyRole("barber"),
  appointmentRequestController.rejectRequest
);

export default router;
