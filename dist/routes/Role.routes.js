"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Role_controller_1 = require("../controller/Role.controller");
const router = (0, express_1.Router)();
router.post("/", Role_controller_1.createRole);
router.get("/", Role_controller_1.getRoles);
exports.default = router;
