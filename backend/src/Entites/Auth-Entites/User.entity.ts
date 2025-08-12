import {Column, PrimaryGeneratedColumn, Entity} from 'typeorm'

@Entity()

export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', nullable: true})
    fullName: string

    @Column({type: 'varchar', nullable: true})
    email: string

    @Column({type: 'text', nullable: true})
    password: string
}