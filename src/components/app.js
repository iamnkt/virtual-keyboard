  import Keyboard from './keyboard';
  import Keys from './keys';

class App {
  constructor() {
    this.keyboard = new Keyboard();
    this.keys = new Keys();
  }

  run() {
    this.keyboard.createKeyboard();
    document.querySelector('.keyboard__keys').appendChild(this.keys.createKeys());
  }
}

export default App;