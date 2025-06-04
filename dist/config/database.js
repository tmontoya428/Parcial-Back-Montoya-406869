"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_entity_1 = require("../entities/User.entity");
const Role_entity_1 = require("../entities/Role.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite", // Motor de base de datos SQLite
    database: "db.sqlite", // Archivo de la base de datos
    synchronize: true, // Sincroniza automáticamente las tablas
    logging: false, // Deshabilita el log SQL en consola
    entities: [User_entity_1.User, Role_entity_1.Role], // Entidades cargadas en esta conexión
});
