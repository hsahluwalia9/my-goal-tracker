import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Goal extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
}