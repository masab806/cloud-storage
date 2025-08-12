import {Column, PrimaryGeneratedColumn, Entity} from 'typeorm'

@Entity()

export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar'})
    fullName: string

    @Column({type: 'varchar'})
    email: string

    @Column({type: 'text'})
    password: string
}