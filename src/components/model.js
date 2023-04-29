class Model {
  constructor() {
    this.str = '';
    this.capsLock = false;
  }

  toggleCaps() {
    this.capsLock = !this.capsLock;
    const keys = Array.from(document.querySelectorAll('.keyboard__key'));

    for (let key of keys) {
      if (key.textContent.length === 1) {
        key.textContent = this.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      };
    };
  }

  work() {
    const keys = Array.from(document.querySelectorAll('.keyboard__key'));
    const tArea = document.querySelector('.t_area');
    // console.log(keys);
    keys.forEach((key) => {
      key.addEventListener('click', () => {
        const caps = document.querySelector('.keyboard__key-activatable');
        let value = key.textContent.toLowerCase();

        if (value === 'backspace') {
          this.str = this.str.slice(0, this.str.length - 1);
        } else if (value === 'tab') {
          this.str += '    ';
        } else if (value === 'del') {
          this.str = this.str.slice(0, this.str.length - 1);
        } else if (value === 'keyboard_capslock') {
          this.toggleCaps();
          caps.classList.toggle('keyboard__key-active', this.capsLock);
        } else if (value === 'enter') {
          this.str += '\n';
        } else if (value === '') {
          this.str += ' ';
        } else {
          this.str += this.capsLock ? value.toUpperCase() : value;
        }
        tArea.textContent = this.str;
      });
    });

  }
}

export default Model;