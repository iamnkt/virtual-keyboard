  import Keyboard from './keyboard';
  import Keys from './keys';
  import Model from './model';

class App {
  constructor() {
    this.keyboard = new Keyboard();
    this.keys = new Keys();
    this.model = new Model();
  }

  run() {
    this.keyboard.createKeyboard();
    document.querySelector('.keyboard__keys').appendChild(this.keys.createKeys());
    this.model.work();
  }
}

export default App;