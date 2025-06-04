import { AppDataSource } from "../../config/database";
import { Role } from "../Role.entity";

export const RoleRepo = AppDataSource.getRepository(Role);
