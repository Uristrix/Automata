import { Group } from './group';
import { Test } from './test';

export interface User {
  id?: number;
  login: string;
  password: string;
  name: string;
  group_id: number;
  role: boolean;
}

export interface exUser {
  user: User;
  group: Group;
  test: Array<Test>;
}
