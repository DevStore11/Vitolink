import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

{
  /** enum  */
}
export enum TipoRole {
  ADMIN = "ADMIN",
  FUNCIONARIO = "FUNCIONARIO",
  TECNICO = "TECNICO",
}
{
  /**entity que referenceia a tabela roles */
}
@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "enum", enum: TipoRole })
  nome!: TipoRole;

  @OneToMany(() => Usuario, (usuario) => usuario.role)
  usuarios!: Usuario[];
}
