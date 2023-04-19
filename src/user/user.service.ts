import { Injectable } from '@nestjs/common';
import { mockUsers } from '../mocks';

@Injectable()
export class UserService {
  getUsers() {
    return mockUsers;
  }
}
