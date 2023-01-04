import { EntityRepository, Repository } from 'typeorm';
import { Vender } from '../entities/vender.entity';

@EntityRepository(Vender)
export class VenderRepository extends Repository<Vender> {}