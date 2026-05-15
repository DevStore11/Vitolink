import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import * as fs from "fs";
import * as path from "path";

export const databaseConfig: TypeOrmModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: "mysql",
    host: config.get("DB_HOST"),
    port: Number(config.get("DB_PORT")),
    username: config.get("DB_USERNAME"),
    password: config.get("DB_PASSWORD"),
    database: config.get("DB_NAME"),

    autoLoadEntities: true,
    synchronize: true,

    ssl: {
      ca: fs.readFileSync(path.join(process.cwd(), "ca.pem")),
      rejectUnauthorized: true,
    },
  }),
};
