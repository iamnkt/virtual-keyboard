import '../styles/style.css';

class Keyboard {
  createKeyboard() {
    const tArea = document.createElement('textarea');
    const main = document.createElement('div');
    const keysContainer = document.createElement('div');

    tArea.classList.add('t_area');
    main.classList.add('keyboard');
    keysContainer.classList.add('keyboard__keys');

    document.body.append(tArea);
    main.appendChild(keysContainer);
    document.body.appendChild(main);
  }
}

export default Keyboard;