import '../styles/style.css';

class Keys {
  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
      'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del',
      'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
      'shiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'arrowUp', 'shiftRight',
      'ctrlLeft', 'win', 'alt', 'space', 'alt', 'arrowLeft', 'arrowDown', 'arrowRight', 'ctrlRight'
    ];

    const createIconHTML = (name) => {
      return `<span class="material-icons">${name}</span>`;
    };

    keyLayout.forEach(key => {
      const keyElement = document.createElement('button');
      const lineBreak = ['backspace', 'del', 'enter', 'shiftRight', 'ctrlRight'].indexOf(key) !== -1;

      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');

      keyElement.textContent = key;

      if (key === 'backspace') {
        keyElement.classList.add('keyboard__key-extrawide');
        keyElement.innerHTML = createIconHTML('backspace');
      };

      if (key === 'tab') {
        keyElement.classList.add('keyboard__key-tab');
        keyElement.innerHTML = 'Tab';
      };

      if (key === 'del') {
        keyElement.classList.add('keyboard__key-del');
        keyElement.innerHTML = 'Del';
      };

      if (key === 'caps') {
        keyElement.classList.add('keyboard__key-extrawide', 'keyboard__key-activatable');
        keyElement.innerHTML = createIconHTML('keyboard_capslock');
      };

      if (key === 'enter') {
        keyElement.classList.add('keyboard__key-wide');
        keyElement.textContent = 'Enter';
      };

      if (key === 'shiftLeft') {
        keyElement.classList.add('keyboard__key-extrawide');
        keyElement.textContent = 'Shift';
      };

      if (key === 'arrowUp') {
        keyElement.innerHTML = createIconHTML('keyboard_arrow_up');
      };

      if (key === 'shiftRight') {
        keyElement.classList.add('keyboard__key-wide');
        keyElement.textContent = 'Shift';
      };

      if (key === 'ctrlLeft') {
        keyElement.textContent = 'Ctrl';
      };

      if (key === 'win') {
        keyElement.textContent = 'Win';
      };

      if (key === 'alt') {
        keyElement.textContent = 'Alt';
      };

      if (key === 'space') {
        keyElement.classList.add('keyboard__key-space');
        keyElement.textContent = '';
      }

      if (key === 'arrowLeft') {
        keyElement.innerHTML = createIconHTML('keyboard_arrow_left');
      };

      if (key === 'arrowDown') {
        keyElement.innerHTML = createIconHTML('keyboard_arrow_down');
      };

      if (key === 'arrowRight') {
        keyElement.innerHTML = createIconHTML('keyboard_arrow_right');
      };

      if (key === 'ctrlRight') {
        keyElement.textContent = 'Ctrl';
      };

      fragment.appendChild(keyElement);

      if (lineBreak) {
        fragment.appendChild(document.createElement('br'));
      };
    });

    return fragment;
  }
}

export default Keys;