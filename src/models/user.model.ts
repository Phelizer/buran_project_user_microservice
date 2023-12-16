import { Role } from './role.model';

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  registration_date: Date;
  age: number;
  sex: Sex;
  roles: Role[];
}

type Sex = 'male' | 'female';
