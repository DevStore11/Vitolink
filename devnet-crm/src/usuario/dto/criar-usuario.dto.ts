import { IsString, IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CriarUsuarioDto {
  // O nome do usuário não pode estar vazio
  @IsNotEmpty({ message: "O nome é obrigatório" })
  @IsString()
  nome!: string;

  // O email deve ser válido e não pode estar vazio
  @IsNotEmpty({ message: "O email é obrigatório" })
  @IsEmail()
  email!: string;

  // A senha deve ter pelo menos 6 caracteres
  @IsNotEmpty({ message: "A senha é obrigatória" })
  @MinLength(6, { message: "A senha deve ter pelo menos 6 caracteres" })
  password!: string;

  // O role_id é necessário para associar o usuário a um role específico
  @IsNotEmpty({ message: "O role é obrigatório" })
  role_id!: number;
}
