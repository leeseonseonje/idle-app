import {makeAutoObservable} from 'mobx';

export default class NameSotre {
  constructor() {
    makeAutoObservable(this);
  }

  text: string = '';

  setText = (text: string) => {
    this.text = text;
  };
}
