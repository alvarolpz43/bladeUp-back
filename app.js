import express from "express";
import cors from "cors";
import authRouter from "./auth/routes/auth.routes.js";

//BarberRoutes
import barberRoutes from "./BladeUp/Barber/routes/barber.routes.js";
import requestAppointment from "./BladeUp/RequestAppointment/routes/appointmentReques.routes.js";
import appointmentRoutes from "./BladeUp/Appointment/routes/appointment.routes.js";
import barberServicesRoutes from "./BladeUp/BarberServices/routes/servicesBarber.routes.js";



// import convocatoriasRouter from "./convocatorias/routes/convocatoria.routes.js";
import morgan from "morgan";

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173"],
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use("/api/auth", authRouter);

//Barbers
app.use("/api/barbers", barberRoutes);
app.use("/api/requestAppointment", requestAppointment);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/barberServices", barberServicesRoutes);




export default app;
