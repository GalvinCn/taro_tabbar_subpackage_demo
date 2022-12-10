import { observable, action, computed, makeObservable } from "mobx";
//import { observer } from "mobx-react-lite";

export class CounterStore {
  @observable
  count = 0;

  @observable
  selected = 0; //tabbar当前选项索引号

  constructor() {
    makeObservable(this); //mbox 6后需要添加这个组件才会更新
  }

  @action
  setSelected(val) {
    this.selected = val;
  }

  @action
  setCount(val) {
    this.count = val;
  }

  @action
  increment() {
    this.count++;
  }

  @action
  decrement() {
    this.count--;
  }

  @computed
  get doubleCount() {
    return this.count * 2;
  }
}

export class ThemeStore {
  @observable
  theme = "light";

  @action
  setTheme(newTheme) {
    this.theme = newTheme;
  }
}
