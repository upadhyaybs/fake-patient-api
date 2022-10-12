import { Module } from '@nestjs/common';
import { PatientsService } from './service/patients.service';
import { PatientsController } from './controller/patients.controller';

@Module({
  controllers: [PatientsController],
  providers: [PatientsService]
})
export class PatientsModule {}
