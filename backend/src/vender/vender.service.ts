import { Injectable } from '@nestjs/common';
import { CreateVenderDto } from './dto/create-vender.dto';
import { UpdateVenderDto } from './dto/update-vender.dto';
import { Vender } from './entities/vender.entity';
import { VenderRepository } from './repository/vender.repository';

@Injectable()
export class VenderService {

  constructor(private VenderREpository:VenderRepository){}
 //Create New Vender
  create(createVenderDto: CreateVenderDto) {
    let vender : Vender =  new Vender();
    vender.name=createVenderDto.name;
    vender.email=createVenderDto.email;
    vender.password=createVenderDto.password;
    vender.whatsappnumber=createVenderDto.whatsappnumber;
    return this.VenderREpository.save(vender)
  }

  // Display All venders
  findAll() {
    return this.VenderREpository.find();
  }

  // Display Vender by ID
  findOne(id: number) {
    return this.VenderREpository.findOne(id);
  }

  // Update Vender Records 
  update(id: number, updateVenderDto: UpdateVenderDto) {
    return `This action updates a #${id} vender`;
  }

  // Delete Vender
  remove(id: number) {
    return this.VenderREpository.delete(id)
  }

  // Vender will create their Services
  FindbyID(id:number){
    return this.VenderREpository.findOneOrFail({where:{id:id}})
  }
}
