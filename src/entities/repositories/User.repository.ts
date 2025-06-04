import { AppDataSource } from "../../config/database";
import { User } from "../User.entity";

export const UserRepo = AppDataSource.getRepository(User);
