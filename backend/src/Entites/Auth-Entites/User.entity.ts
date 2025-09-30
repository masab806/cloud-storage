import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm'
import { FileEntity } from '../File-Entites/file.entity'

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', nullable: true })
    fullName: string

    @Column({ type: 'varchar', nullable: true })
    email: string
    

    @Column({ type: 'text', nullable: true })
    password: string

    @OneToMany(() => FileEntity, (file) => file.owner)
    files: FileEntity[]
}