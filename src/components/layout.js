import '../styles/style.css';

class Layout {
  createKeys() {
    const FRAGMENT = document.createDocumentFragment();
    const KEY_LAYOUT = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
      'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del',
      'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
      'shiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'arrowUp', 'shiftRight',
      'ctrlLeft', 'win', 'altLeft', 'space', 'altRight', 'arrowLeft', 'arrowDown', 'arrowRight', 'ctrlRight'
    ];

    const createIconHTML = (name) => {
      return `<span class="material-icons">${name}</span>`;
    };

    KEY_LAYOUT.forEach(key => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['backspace', 'del', 'enter', 'shiftRight', 'ctrlRight'].indexOf(key) !== -1;

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
        keyElement.classList.add('keyboard__key-shift_left');
        keyElement.textContent = 'Shift';
      };

      if (key === 'arrowUp') {
        keyElement.innerHTML = createIconHTML('keyboard_arrow_up');
      };

      if (key === 'shiftRight') {
        keyElement.classList.add('keyboard__key-wide');
        keyElement.classList.add('keyboard__key-shift_right');
        keyElement.textContent = 'Shift';
      };

      if (key === 'ctrlLeft') {
        keyElement.classList.add('keyboard__key-ctrl_left');
        keyElement.textContent = 'Ctrl';
      };

      if (key === 'win') {
        keyElement.textContent = 'Win';
      };

      if (key === 'altLeft') {
        keyElement.classList.add('keyboard__key-alt_left')
        keyElement.textContent = 'Alt';
      };

      if (key === 'space') {
        keyElement.classList.add('keyboard__key-space');
        keyElement.textContent = '';
      }

      if (key === 'altRight') {
        keyElement.classList.add('keyboard__key-alt_right')
        keyElement.textContent = 'Alt';
      };

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
        keyElement.classList.add('keyboard__key-ctrl_right');
        keyElement.textContent = 'Ctrl';
      };

      if (key === '.') {
        keyElement.classList.add('keyboard__key-dot');
      }

      FRAGMENT.appendChild(keyElement);

      if (insertLineBreak) {
        FRAGMENT.appendChild(document.createElement('br'));
      };
    });

    return FRAGMENT;
  }
}

export default Layout;