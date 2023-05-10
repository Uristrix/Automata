import { makeAutoObservable } from 'mobx';
import { NotificationManager } from 'react-notifications';

class NotificationStore {
  constructor() {
    makeAutoObservable(this);
  }

  public setMessage = (message: string, type: string) => {
    switch (type) {
      case 'info':
        NotificationManager.info(message);
        break;
      case 'success':
        NotificationManager.success(message);
        break;
      case 'error':
        NotificationManager.error(message);
        break;
    }
  };
}

export default new NotificationStore();
