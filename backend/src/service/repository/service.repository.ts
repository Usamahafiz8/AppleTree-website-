import { EntityRepository, Repository } from "typeorm";
import { Service } from "../entities/service.entity";
@EntityRepository(Service)
export class servicerepository extends Repository<Service> {}
