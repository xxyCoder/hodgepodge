import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class Users {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: "username", nullable: false })
    username: string;
    @Column({ name: "account", nullable: false, unique: true })
    account: string;
    @Column({ name: "password", nullable: false })
    password: string;
}
