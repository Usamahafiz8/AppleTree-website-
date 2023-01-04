import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { servicerepository } from './repository/service.repository';
import { VenderModule } from 'src/vender/vender.module';

@Module({
  imports:[TypeOrmModule.forFeature([servicerepository]), VenderModule],
  controllers: [ServiceController],
  providers: [ServiceService]
})
export class ServiceModule {}
