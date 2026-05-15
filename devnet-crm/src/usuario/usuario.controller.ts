import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { CriarUsuarioDto } from "./dto/criar-usuario.dto";
import { ActualizarUsuarioDto } from "./dto/actualizar-usuario.dto";

@Controller("usuario")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  criar(@Body() criarUsuarioDto: CriarUsuarioDto) {
    return this.usuarioService.criar(criarUsuarioDto);
  }

  @Get()
  buscarTodos() {
    return this.usuarioService.buscarTodos();
  }

  @Get(":id")
  buscarUm(@Param("id") id: string) {
    return this.usuarioService.buscarUm(+id);
  }

  @Patch(":id")
  actualizar(
    @Param("id") id: string,
    @Body() actualizarUsuarioDto: ActualizarUsuarioDto,
  ) {
    return this.usuarioService.actualizar(+id, actualizarUsuarioDto);
  }

  @Delete(":id")
  remover(@Param("id") id: string) {
    return this.usuarioService.remover(+id);
  }
}
