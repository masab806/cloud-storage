import { BadRequestException, ConflictException, ForbiddenException, Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/signup-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entites/Auth-Entites/User.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs'
import { LoginDto } from './dto/login-dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private usersRepo: Repository<User>,
        private config: ConfigService,
        private jwt: JwtService
    ){}

    async signup(dto: SignUpDto){
        try {
            const {fullName, email, password, confirmPassword} = dto

            const existingUser = await this.usersRepo.findOneBy({email})

            if(existingUser){
                throw new ConflictException("User Already Exists!")
            }

            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser = this.usersRepo.create({
                fullName,
                email,
                password: hashedPassword
            })
            
            await this.usersRepo.save(newUser)

            return {
                message: 'User Created!',
                newUser
            }


        } catch (error) {
            console.log("Error: ", error)
            throw new BadRequestException("Request Failed!")
        }
    }

    async login(dto: LoginDto){
        try {
            const {email, password} = dto

            const user = await this.usersRepo.findOneBy({email})

            if(!user){
                throw new ForbiddenException("Invalid User!")
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch){
                throw new ForbiddenException("Invalid Credentials!")
            }

            const tokens = await this.signToken(user.id, user.email)

            return {
                message: "User Logged In!",
                tokens
            }

        } catch (error) {
            console.log("Error: ", error)
            throw new BadRequestException("Request Failed!")
        }
    }

    async signToken(
        userId: number,
        email: string
    ): Promise<{access_token: String}>{
        const payload = {
            sub: userId,
            email
        }

        const secret = this.config.get<string>('JWT_SECRET')!

        const token = await this.jwt.signAsync(
            payload,
            {
                expiresIn: '15m',
                secret: secret
            }
        )

        return {
            access_token: token
        }
    }
}
