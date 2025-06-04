"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_repository_1 = require("../entities/repositories/User.repository");
const Role_repository_1 = require("../entities/repositories/Role.repository");
class UserService {
    async createUser(data) {
        const role = await Role_repository_1.RoleRepo.findOneByOrFail({ id: parseInt(data.rolId) });
        const user = User_repository_1.UserRepo.create({
            nombres: data.nombres,
            apellidos: data.apellidos,
            identificacion: data.identificacion,
            correo: data.correo,
            rol: role,
        });
        return User_repository_1.UserRepo.save(user);
    }
    async getAllUsers() {
        return User_repository_1.UserRepo.find({ relations: ["rol"] });
    }
}
exports.UserService = UserService;
