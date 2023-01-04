import { Service } from "src/service/entities/service.entity";
import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Vender {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name: String;
    @Column()
    email:string;
    @Column()
    password:string;
    @Column()
    whatsappnumber:string;
    @OneToMany(()=>Service,(service)=>service.vender)
    service:Service[]
}
