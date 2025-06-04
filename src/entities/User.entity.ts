import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Role } from "./Role.entity";

@Entity("usuarios")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombres!: string;

  @Column()
  apellidos!: string;

  @Column()
  identificacion!: string;

  @Column()
  correo!: string;

  @ManyToOne(() => Role, role => role.usuarios, { nullable: false })
  @JoinColumn({ name: "rolId" })
  rol!: Role;
}
