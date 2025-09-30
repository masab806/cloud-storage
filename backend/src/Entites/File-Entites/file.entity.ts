import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "../Auth-Entites/User.entity";

export enum FileCategory {
    DOCUMENT = 'document',
    IMAGE = 'image',
    MEDIA = 'media',
    OTHERS = 'others'
}


@Entity()

export class FileEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    fileName: string;

    @Column()
    size: number;

    @Column()
    url: string;

    @Column()
    mimetype: string

    @Column({
        type: 'enum',
        enum: FileCategory,
        default: FileCategory.OTHERS
    })
    category: FileCategory


    @ManyToOne(() => User, (user) => user.files, { onDelete: 'CASCADE' })
    owner: User

    @CreateDateColumn()
    createdAt: Date
}