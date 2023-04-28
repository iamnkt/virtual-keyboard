import '../styles/style.css';

class Keys {
  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
      'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del',
      'caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
      'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'arrowup', 'shift',
      'ctrl', 'win', 'alt', 'space', 'alt', 'arrowleft', 'arrowdown', 'arrowright', 'ctrl'
    ];

    const createIconHTML = (name) => {
      return `<span class="material-icons">${name}</span>`;
    };

    keyLayout.forEach(key => {
      const keyElement = document.createElement('button');

      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');
    });
  }
}

export default Keys;