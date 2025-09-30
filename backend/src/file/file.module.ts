import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from 'src/Entites/File-Entites/file.entity';
import { FileService } from './file.service';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])], 
  providers: [FileService],
  controllers: [FileController],
  exports: [FileService], 
})
export class FileModule {}