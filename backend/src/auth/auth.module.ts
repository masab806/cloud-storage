import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Entites/Auth-Entites/User.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '1d' }
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtService, JwtStrategy]
})
export class AuthModule {}
