import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { ValidationPipe } from "./pipes/validation.pipe";

async function start() {
  const PORT = process.env.PORT || 5000;

  // -- Create App
  const app = await NestFactory.create(AppModule);

  // -- Swagger (documentation)
  const config = new DocumentBuilder()
    .setTitle("Nest Sample")
    .setDescription("Documentation for REST API")
    .setVersion("1.0.0")
    .addTag("RomanWebDev")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("/api/docs", app, document);

  // Global Guards
  // app.useGlobalGuards(new JwtAuthGuard());

  // Global Pipes (validation)
  app.useGlobalPipes(new ValidationPipe())

  // -- Start App (listening)
  await app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
}

start();
