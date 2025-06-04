import { RoleRepo } from "../entities/repositories/Role.repository";
import { Role } from "../entities/Role.entity";

export class RoleService {
  async createRole(data: Partial<Role>): Promise<Role> {
    const role = RoleRepo.create(data);
    return RoleRepo.save(role);
  }

  async getAllRoles(): Promise<Role[]> {
    return RoleRepo.find();
  }
}
