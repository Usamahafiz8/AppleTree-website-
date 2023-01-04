import { Vender } from 'src/vender/entities/vender.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Vender, (Vender) => Vender.service)
  vender: Vender;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  price: string;
}
