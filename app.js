import express from "express";
import cors from "cors";
import authRouter from "./auth/routes/auth.routes.js";
import bladeRoutes from "./BladeUp/indexRoutes.js";

// import convocatoriasRouter from "./convocatorias/routes/convocatoria.routes.js";
import morgan from "morgan";

const app = express();

const corsOptions = {
  origin: [
    "http://localhost:5173",
   
  ],
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use("/api/auth", authRouter);
app.use("/api", bladeRoutes);

export default app;