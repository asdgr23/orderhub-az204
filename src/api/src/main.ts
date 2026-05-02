import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() { 
  console.log('Starting APP...');

  const app = await NestFactory.create(AppModule); 
  
  console.log('APP created');
  
  app.enableCors({ 
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', 
    allowedHeaders: 'Content-Type, Authorization', 
  }); 
 
  
  
  app.getHttpAdapter().get('/', (req, res) => {
    res.send('API running OK');
  });

  const config = new DocumentBuilder() 
    .setTitle('OrderHub API') 
    .setDescription('API base para la Semana 1 de AZ-204') 
    .setVersion('1.0') 
    .build();

  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('swagger', app, document); 

  const port = process.env.PORT || 8080; 

  await app.listen(port, '0.0.0.0');

  console.log('App running on port:', port);
}

bootstrap();