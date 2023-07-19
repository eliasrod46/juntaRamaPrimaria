// imports
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { FRONTEND_URL } from "./config.js";

export const app = express();

//---> middlewares
app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

//---> Routes
import authRoutes from "./routes/auth.routes.js";
import docentesRoutes from "./routes/docentes.routes.js";

app.use("/api/auth", authRoutes);
app.use("/api/docentes", docentesRoutes);

//---> client route
if (process.env.NODE_ENV === "production") {
  const path = await import("path");
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    console.log(path.resolve("client", "dist", "index.html"));
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
}
