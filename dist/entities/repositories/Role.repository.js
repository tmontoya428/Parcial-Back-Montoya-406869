"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepo = void 0;
const database_1 = require("../../config/database");
const Role_entity_1 = require("../Role.entity");
exports.RoleRepo = database_1.AppDataSource.getRepository(Role_entity_1.Role);
