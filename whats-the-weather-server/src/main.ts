import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const User = require('./config/db.module');

(async () => {
  try {
    await User.sync();
    console.log('Users table created successfully.');
  } catch (error) {
    console.error('Error creating users table:', error);
  }
})();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
