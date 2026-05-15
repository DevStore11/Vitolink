import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Role } from "../../role/entities/role.entity";

@Entity("users")
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  email!: string;

  @Column({ length: 255 })
  password!: string;

  @ManyToOne(() => Role, (role) => role.usuarios, { eager: true })
  @JoinColumn({ name: "role_id" })
  role!: Role;
}
