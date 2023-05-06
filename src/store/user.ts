import { makeAutoObservable } from 'mobx';
import { User } from '../model/user';

class UserStore {
  _user?: User;

  constructor() {
    makeAutoObservable(this);
  }

  set user(data: User | undefined) {
    this._user = data;
  }

  get user(): User | undefined {
    return this._user;
  }
}

export default new UserStore();
