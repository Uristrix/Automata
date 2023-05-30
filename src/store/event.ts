import { makeAutoObservable } from 'mobx';
import { exEvent } from '../model/event';

class event {
  private _event: exEvent | undefined;

  constructor() {
    makeAutoObservable(this);
  }
  set event(e) {
    this._event = e;
  }
  get event() {
    return this._event;
  }
}

export default new event();
