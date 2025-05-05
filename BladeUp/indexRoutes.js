

import { Router } from "express";
import appointmentReques from "./routes/appointmentReques.routes.js";
import appointmentRoutes from "./routes/appointment.routes.js";
import servicesRoutes from "./routes/service.routes.js";


// import convRoutes from "./routes/convocatoria.routes.js"; keee

const routerPESV = Router();


routerPESV.use('/appointmentReq', appointmentReques);
routerPESV.use('/appointments', appointmentRoutes);
routerPESV.use('/services', servicesRoutes);












export default routerPESV;