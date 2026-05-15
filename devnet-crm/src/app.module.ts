import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { databaseConfig } from "./database.config"; // ajusta o caminho
import { TicketsModule } from "./tickets/tickets.module";
import { ClientesModule } from "./clientes/clientes.module";
import { LogsModule } from "./logs/logs.module";
import { AuthModule } from "./auth/auth.module";
import { UsuarioModule } from "./usuario/usuario.module";
import { RoleModule } from "./role/role.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(databaseConfig),
    TicketsModule,
    ClientesModule,
    LogsModule,
    AuthModule,
    UsuarioModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}