import { Module } from '@nestjs/common';
import { VenderService } from './vender.service';
import { VenderController } from './vender.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VenderRepository } from './repository/vender.repository';

@Module({
  imports :[TypeOrmModule.forFeature([VenderRepository])],
  controllers: [VenderController],
  providers: [VenderService],
  exports:[VenderService]
})
export class VenderModule {}
