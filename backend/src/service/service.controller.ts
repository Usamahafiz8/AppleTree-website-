import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  // @Post(":Id")//working
  // create(@Body(ValidationPipe)
  //  createAttendanceDto: CreateAttendanceDto,@Param("Id")  //  Id:number) {
  // return this.attendanceService.create(createAttendanceDto,Id);
  // }

  @Post()
  create(@Body(ValidationPipe) createServiceDto: CreateServiceDto, @Param("id") id:number) {
    return this.serviceService.create(createServiceDto, id);
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(+id, updateServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(+id);
  }
}
