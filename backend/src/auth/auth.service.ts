import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/signup-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entites/Auth-Entites/User.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private usersRepo: Repository<User>
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
}
