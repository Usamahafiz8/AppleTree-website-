import { Injectable } from '@nestjs/common';
import { VenderService } from 'src/vender/vender.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { servicerepository } from './repository/service.repository';

@Injectable()
export class ServiceService {
  constructor(
    private servicerepository: servicerepository,
    private venderservice: VenderService,
  ) {}
  // Create sales and Services accroding to vender demand and on Vender's ID 
  async create(createServiceDto: CreateServiceDto, ID : number) {
    let service : Service = new Service();
    service.name = createServiceDto.name;
    service.description=createServiceDto.description;
    service.price=createServiceDto.price;
    service.vender = await this.venderservice.FindbyID(ID);
    return this.servicerepository.save(service)
  }

  findAll() {
    return this.servicerepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
