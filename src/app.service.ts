import { Injectable } from '@nestjs/common';

function mockUser() {
  return {
    login: (Math.random() + 1).toString(36).substring(7),
    id: (Math.random() + 1).toString(36).substring(2),
    roles: ['user'],
  };
}

export interface User {
  login: string;
  id: string;
  roles: string[];
}

@Injectable()
export class AppService {
  async getUsers(): Promise<User[]> {
    return [mockUser(), mockUser(), mockUser()];
  }
}
