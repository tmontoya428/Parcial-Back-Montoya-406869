"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_controller_1 = require("../controller/User.controller");
const router = (0, express_1.Router)();
router.post("/", User_controller_1.createUser);
router.get("/", User_controller_1.getUsers);
exports.default = router;
