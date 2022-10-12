import { AddressDto } from './address.dto';
import { InsuranceDto } from './insurance.dto';

export class CreatePatientDto {
  id: string;
  name: string;
  age: number;
  gender: string;
  address: AddressDto;
  insurance: InsuranceDto;

  constructor(
    id: string,
    name: string,
    age: number,
    gender: string,
    address: AddressDto,
    insurance: InsuranceDto,
  ) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.insurance = insurance;
  }
}
