import { Address } from './address.entiry';
import { Insurance } from './insurance.entity';

export class Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  address: Address;
  insurance: Insurance;

  constructor(
    id: string,
    name: string,
    age: number,
    gender: string,
    address: Address,
    insurance: Insurance,
  ) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.gender = gender;
    this.address = address;
    this.insurance = insurance;
  }
}
