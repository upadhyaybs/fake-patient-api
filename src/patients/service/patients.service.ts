import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { Patient } from '../entities/patient.entity';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [];

  create(createPatientDto: CreatePatientDto): Patient {
    createPatientDto.id = uuidv4();
    this.patients.push({
      ...createPatientDto,
      id: uuidv4(),
    });
    return this.patients.at(-1);
  }

  findAll(): Patient[] {
    return this.patients;
  }

  findOne(id: string): Patient {
    return this.patients.find((patient) => patient.id === id);
  }

  update(id: string, updatePatientDto: UpdatePatientDto) {
    const i = this.patients.findIndex((patient) => patient.id == id);
    if (i === -1) return null;
    this.patients[i] = {
      ...this.patients[i],
      ...updatePatientDto,
    };
    return this.patients[i];
  }

  remove(id: string): boolean {
    try {
      const i = this.patients.findIndex((patient) => patient.id == id);
      if (i === -1) return false;
      this.patients.splice(i, 1);
      return true;
    } catch {
      return false;
    }
  }
}
