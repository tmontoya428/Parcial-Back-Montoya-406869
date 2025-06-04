"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.createUser = void 0;
const User_service_1 = require("../services/User.service");
const userService = new User_service_1.UserService();
const createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        next(err);
    }
};
exports.createUser = createUser;
const getUsers = async (_req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    }
    catch (err) {
        next(err);
    }
};
exports.getUsers = getUsers;
