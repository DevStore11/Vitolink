/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import cookieParser from "cookie-parser";
import { DataSource } from "typeorm";
import { seedRoles } from "./database.seed";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  app.enableCors({
    origin: ["http://localhost:5173"],
    credentials:true,
    methods:["GET","POST","PUT","DELETE","PATCH","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      forbidNonWhitelisted: true, // lança erro se vier campo extra
      whitelist: true,
    }),
  );
  const dataSource=app.get(DataSource)
  await seedRoles(dataSource);
  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Servidor rodando em http://localhost:${process.env.PORT ?? 3000}`);

}
bootstrap();
