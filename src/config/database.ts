import { DataSource } from "typeorm";
import { User } from "../entities/User.entity";
import { Role } from "../entities/Role.entity";

export const AppDataSource = new DataSource({
 type: "sqlite", // Motor de base de datos SQLite
 database: "db.sqlite", // Archivo de la base de datos
 synchronize: true, // Sincroniza automáticamente las tablas
 logging: false, // Deshabilita el log SQL en consola
 entities: [User, Role], // Entidades cargadas en esta conexión
});