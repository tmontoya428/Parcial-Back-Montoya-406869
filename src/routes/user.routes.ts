import { Router } from "express";
import { createUser, getUsers } from "../controller/User.controller";

const router = Router();
router.post("/", createUser);
router.get("/", getUsers);
export default router;