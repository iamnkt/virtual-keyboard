import Keyboard from './keyboard';

class App {
  constructor() {
    this.keyboard = new Keyboard();
  }

  run() {
    this.keyboard.createKeyboard();
  }
}

export default App;