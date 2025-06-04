import { Request, Response, NextFunction } from "express";
import { RoleService } from "../services/Role.service";

const roleService = new RoleService();

export const createRole = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const role = await roleService.createRole(req.body);
    res.status(201).json(role);
  } catch (err) {
    next(err);
  }
};

export const getRoles = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const roles = await roleService.getAllRoles();
    res.json(roles);
  } catch (err) {
    next(err);
  }
};
