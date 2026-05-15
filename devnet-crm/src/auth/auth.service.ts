/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UsuarioService } from "../usuario/usuario.service";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const usuario = await this.usuarioService.buscarPorEmail(loginDto.email);

    if (!usuario) {
      throw new UnauthorizedException("Credenciais inválidas");
    }
    const passwordValida = await bcrypt.compare(
      loginDto.password,
      usuario.password,
    );
    if (!passwordValida) {
      throw new UnauthorizedException("Credenciais inválidas");
    }

    const payload = {
      sub: usuario.id,
      email: usuario.email,
      role: usuario.role.nome,
    };
    const token = this.jwtService.sign(payload);

  return {
  access_token: token,
  usuario: {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    role: { nome: usuario.role.nome }, 
  },
};
  }
  async perfil(usuarioId: number) {
    return this.usuarioService.buscarUm(usuarioId);
  }
}
