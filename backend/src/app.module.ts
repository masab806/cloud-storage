import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/data-source';
import { ConfigModule } from '@nestjs/config';
import { FileService } from './file/file.service';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    FileModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
