"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoles = exports.createRole = void 0;
const Role_service_1 = require("../services/Role.service");
const roleService = new Role_service_1.RoleService();
const createRole = async (req, res, next) => {
    try {
        const role = await roleService.createRole(req.body);
        res.status(201).json(role);
    }
    catch (err) {
        next(err);
    }
};
exports.createRole = createRole;
const getRoles = async (_req, res, next) => {
    try {
        const roles = await roleService.getAllRoles();
        res.json(roles);
    }
    catch (err) {
        next(err);
    }
};
exports.getRoles = getRoles;
