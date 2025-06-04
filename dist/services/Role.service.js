"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const Role_repository_1 = require("../entities/repositories/Role.repository");
class RoleService {
    async createRole(data) {
        const role = Role_repository_1.RoleRepo.create(data);
        return Role_repository_1.RoleRepo.save(role);
    }
    async getAllRoles() {
        return Role_repository_1.RoleRepo.find();
    }
}
exports.RoleService = RoleService;
