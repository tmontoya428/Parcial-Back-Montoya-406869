import { Router } from "express";
import { createRole, getRoles } from "../controller/Role.controller";

const router = Router();
router.post("/", createRole);
router.get("/", getRoles);
export default router;