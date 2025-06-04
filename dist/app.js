"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const role_routes_1 = __importDefault(require("./routes/role.routes"));
const database_1 = require("./config/database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Rutas
app.use("/users", user_routes_1.default);
app.use("/roles", role_routes_1.default);
// Middleware de error
app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ message: err.message });
});
// Inicialización del servidor
const PORT = process.env.PORT || 3000;
database_1.AppDataSource.initialize()
    .then(() => app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`)))
    .catch(err => {
    console.error("DB init error:", err);
    process.exit(1);
});
