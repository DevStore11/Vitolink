/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from "express";
import { UsuarioService } from "../../usuario/usuario.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usuarioService: UsuarioService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request) => req?.cookies?.["Access_token"] ?? null,
      ]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_KEY ?? "segredo_dev",
    });
  }
  async validate(payload: { sub: number; email: string; role: string }) {
  const usuario = await this.usuarioService.buscarUm(payload.sub);
  if (!usuario) throw new UnauthorizedException('Utilizador não encontrado');
  return usuario; // já vem com role.nome graças ao fix acima
}
}
