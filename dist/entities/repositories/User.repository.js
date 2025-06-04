"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const database_1 = require("../../config/database");
const User_entity_1 = require("../User.entity");
exports.UserRepo = database_1.AppDataSource.getRepository(User_entity_1.User);
