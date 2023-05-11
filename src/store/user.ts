import { makeAutoObservable } from 'mobx';
import { User } from '../model/user';
import { Group } from '../model/group';

class UserStore {
  private _user?: User;
  private _group?: Group;

  constructor() {
    makeAutoObservable(this);
  }

  set user(data: User | undefined) {
    this._user = data;
  }

  get user(): User | undefined {
    return this._user;
  }

  set group(data: Group | undefined) {
    this._group = data;
  }

  get group(): Group | undefined {
    return this._group;
  }

  getExUser() {
    return { ...this._user, GroupName: this._group?.name };
  }
}

export default new UserStore();
