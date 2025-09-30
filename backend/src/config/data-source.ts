import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv'
import { User } from "src/Entites/Auth-Entites/User.entity";
import { FileEntity } from "src/Entites/File-Entites/file.entity";

dotenv.config()

export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    entities: [User, FileEntity],
    synchronize: true
}