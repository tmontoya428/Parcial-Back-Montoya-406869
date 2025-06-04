import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import userRouter from "./routes/user.routes";
import roleRouter from "./routes/role.routes";
import { AppDataSource } from "./config/database";

const app = express();
app.use(express.json());

// Rutas
app.use("/users", userRouter);
app.use("/roles", roleRouter);

// Middleware de error
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

// Inicialización del servidor
const PORT = process.env.PORT || 3000;
AppDataSource.initialize()
  .then(() => app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`)))
  .catch(err => {
    console.error("DB init error:", err);
    process.exit(1);
  });
