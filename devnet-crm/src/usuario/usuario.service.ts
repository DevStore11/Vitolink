/* eslint-disable @typescript-eslint/no-unused-vars */
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Usuario } from "./entities/usuario.entity";
import { CriarUsuarioDto } from "./dto/criar-usuario.dto";
import { ActualizarUsuarioDto } from "./dto/actualizar-usuario.dto";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  ///Metodo responsavel por criar usuário (ADMIN,FUNCIONARIO,TECNICO)
  async criar(criarUsuarioDto: CriarUsuarioDto) {
    ///verificar se o email já existe
    const usuarioExistente = await this.usuarioRepository.findOne({
      where: {
        email: criarUsuarioDto.email,
      },
    });
    if (usuarioExistente) {
      throw new BadRequestException("Email já cadastrado");
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(criarUsuarioDto.password, salt);

    const novoUsuario = this.usuarioRepository.create({
      nome: criarUsuarioDto.nome,
      email: criarUsuarioDto.email,
      password: passwordHash,
      role: { id: criarUsuarioDto.role_id },
    });

    const usuarioSalvo = await this.usuarioRepository.save(novoUsuario);

    //Retornar sem password
    const { password, ...resultado } = usuarioSalvo;

    return resultado;
  }

  //Buscar Todos Usuarios
  async buscarTodos(): Promise<Omit<Usuario, "password">[]> {
    const usuarios = await this.usuarioRepository.find();

    return usuarios.map(({ password, ...resto }) => resto);
  }
  //Buscar um usuário por ID
  async buscarUm(id: number): Promise<Omit<Usuario, 'password'>> {
  const usuario = await this.usuarioRepository.findOne({
    where: { id },
    relations: ['role'], 
  });
  if (!usuario) {
    throw new NotFoundException(`Utilizador com ID ${id} não encontrado`);
  }
  const { password, ...resultado } = usuario;
  return resultado;
}

  //Actualizar um usuário
  async actualizar(id: number, actualizarUsuarioDto: ActualizarUsuarioDto) {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });

    if (!usuario) {
      throw new NotFoundException("Usuario não encontrado");
    }
    if (actualizarUsuarioDto.password) {
      const salt = await bcrypt.genSalt(10);
      actualizarUsuarioDto.password = await bcrypt.hash(
        actualizarUsuarioDto.password,
        salt,
      );
    }
    await this.usuarioRepository.update(id, actualizarUsuarioDto);
  }

  // Buscar por email — usado internamente pelo AuthService
  async buscarPorEmail(email: string): Promise<Usuario | null> {
    return this.usuarioRepository.findOne({
      where: { email },
      relations: ["role"],
    });
  }

  //Metodo para remover um usuário
  async remover(id: number): Promise<{ mensagem: string }> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });

    if (!usuario) {
      throw new NotFoundException("Usuario não encontrado");
    }
    await this.usuarioRepository.delete(id);
    return { mensagem: "Usuario removido com sucesso" };
  }
}
