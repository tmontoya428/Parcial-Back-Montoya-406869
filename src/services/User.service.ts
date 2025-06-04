import { UserRepo } from "../entities/repositories/User.repository";
import { RoleRepo } from "../entities/repositories/Role.repository";
import { User } from "../entities/User.entity";

export class UserService {
  async createUser(data: {
    nombres: string;
    apellidos: string;
    identificacion: string;
    correo: string;
    rolId: string;
  }): Promise<User> {
    const role = await RoleRepo.findOneByOrFail({ id: parseInt(data.rolId) });
    const user = UserRepo.create({
      nombres: data.nombres,
      apellidos: data.apellidos,
      identificacion: data.identificacion,
      correo: data.correo,
      rol: role,
    });
    return UserRepo.save(user);
  }

  async getAllUsers(): Promise<User[]> {
    return UserRepo.find({ relations: ["rol"] });
  }
}
