import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy, ExtractJwt } from "passport-jwt";
import { User } from "src/Entites/Auth-Entites/User.entity";
import { Repository } from "typeorm";

@Injectable()

export class JwtStrategy extends PassportStrategy(
    Strategy,
    'jwt'
){
    constructor(private config: ConfigService, @InjectRepository(User) private usersRepo: Repository<User>){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<string>('JWT_SECRET')!
        })
    }

    async validate(payload: {sub: number, email: string}){
        const user = await this.usersRepo.findOne({
            where: {id: payload.sub},
            select: {
                email: true,
                id: true,
                fullName: true
            }
        })
    }
}