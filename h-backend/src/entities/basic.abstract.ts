import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class Basic {
    @PrimaryGeneratedColumn()
    id: number;
    @Column("number")
    userId: number;
    @Column("string")
    username: string;
    @Column("string")
    title: string;
    @CreateDateColumn({ name: 'date' })
    date: Date
}