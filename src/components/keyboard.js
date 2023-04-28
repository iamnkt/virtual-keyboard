import '../styles/style.css';

class Keyboard {
  create() {
    const main = document.createElement('div');
    const keysContainer = document.createElement('div');

    main.classList.add('keyboard');
    keysContainer.classList.add('keyboard__keys');
    
    main.appendChild(keysContainer);
    document.body.appendChild(main);
  }
}

export default Keyboard;