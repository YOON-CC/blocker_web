import { makeObservable, observable, action } from 'mobx';

class AppStore {
  value = 1;

  constructor() {
    makeObservable(this, {
      value: observable,
      setValue: action,
    });
  }

  setValue(newValue: number) {
    this.value = newValue;
  }
}

const appStore = new AppStore();
export default appStore;