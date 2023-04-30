const ALT_LAYOUT = {
  '`': '~',
  '1': '!',
  '2': '@',
  '3': '#',
  '4': '$',
  '5': '%',
  '6': '^',
  '7': '&',
  '8': '*',
  '9': '(',
  '0': ')',
  '_': '-',
  '+': '=',
  '[': '{',
  ']': '}',
  '\\': '|',
  ';': ':',
  '\'': '\"',
  ',': '<',
  '.': '>',
  '/': '?',
};

class Model {
  constructor() {
    this.str = '';
    this.capsLock = false;
  }

  toggleCaps() {
    this.capsLock = !this.capsLock;
    const KEYS = Array.from(document.querySelectorAll('.keyboard__key'));

    for (let key of KEYS) {
      if (key.textContent.length === 1) {
        key.textContent = this.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      };
    };
  };

  pressShift() {
    const KEYS = Array.from(document.querySelectorAll('.keyboard__key'));

    KEYS.forEach((key) => {
      for (let k in ALT_LAYOUT) {
        if (key.textContent === k) {
          key.textContent = ALT_LAYOUT[k];
        }
      }
    });
  }

  unpressShift() {
    const KEYS = Array.from(document.querySelectorAll('.keyboard__key'));

    KEYS.forEach((key) => {
      for (let k in ALT_LAYOUT) {
        if (key.textContent === ALT_LAYOUT[k]) {
          key.textContent = k;
        }
      }
    });
  }

  init() {
    const KEYS = Array.from(document.querySelectorAll('.keyboard__key'));
    const T_AREA = document.querySelector('.t_area');
    const ARROW_LEFT = document.createTextNode('\u2190');
    const ARROW_RIGHT = document.createTextNode('\u2192');
    const ARROW_UP = document.createTextNode('\u2191');
    const ARROW_DOWN = document.createTextNode('\u2193');

    // T_AREA.addEventListener('input', (e) => {
    //   console.log(e);
    //   this.str = T_AREA.value;
    //   console.log(this.str);
    // });

    KEYS.forEach((key) => {
      key.addEventListener('mousedown', () => {
        const CAPS = document.querySelector('.keyboard__key-activatable');
        let value = key.textContent.toLowerCase();
        let cursorPos = T_AREA.selectionStart;
        let str_1;
        let str_2;
        T_AREA.focus();

        switch (value) {
          case 'backspace':
            if (cursorPos === 0) break;
            str_1 = this.str.slice(0, cursorPos - 1);
            str_2 = this.str.slice(cursorPos);
            this.str = str_1 + str_2;
            cursorPos -= 1;
            break;

          case 'tab':
            str_1 = this.str.slice(0, cursorPos);
            str_2 = this.str.slice(cursorPos);
            this.str = str_1 + '    ' + str_2;
            cursorPos += 4;
            break;

          case 'del':
            str_1 = this.str.slice(0, cursorPos);
            str_2 = this.str.slice(cursorPos + 1);
            this.str = str_1 + str_2;
            break;

          case 'keyboard_capslock':
            this.toggleCaps();
            CAPS.classList.add('keyboard__key-active');
            break;

          case 'enter':
            str_1 = this.str.slice(0, cursorPos);
            str_2 = this.str.slice(cursorPos);
            this.str = str_1 + '\n' + str_2;
            cursorPos = str_1.length + 1;
            break;

          case '':
            str_1 = this.str.slice(0, cursorPos);
            str_2 = this.str.slice(cursorPos);
            this.str = str_1 + ' ' + str_2;
            cursorPos += 1;
            break;

          case 'shift':
            this.toggleCaps();
            CAPS.classList.toggle('keyboard__key-active', this.capsLock);
            this.pressShift();
            break;

          case 'ctrl':
            break;

          case 'win':
            break;

          case 'alt':
            break;

          case 'keyboard_arrow_up':
            str_1 = this.str.slice(0, cursorPos);
            str_2 = this.str.slice(cursorPos);
            this.str = str_1 + ARROW_UP.textContent + str_2;
            cursorPos += 1;
            break;

          case 'keyboard_arrow_left':
            str_1 = this.str.slice(0, cursorPos);
            str_2 = this.str.slice(cursorPos);
            this.str = str_1 + ARROW_LEFT.textContent + str_2;
            cursorPos += 1;
            break;

          case 'keyboard_arrow_down':
            str_1 = this.str.slice(0, cursorPos);
            str_2 = this.str.slice(cursorPos);
            this.str = str_1 + ARROW_DOWN.textContent + str_2;
            cursorPos += 1;
            break;

          case 'keyboard_arrow_right':
            str_1 = this.str.slice(0, cursorPos);
            str_2 = this.str.slice(cursorPos);
            this.str = str_1 + ARROW_RIGHT.textContent + str_2;
            cursorPos += 1;
            break;

          default:
            str_1 = this.str.slice(0, cursorPos);
            str_2 = this.str.slice(cursorPos);
            if (this.capsLock) {
              this.str = str_1 + value.toUpperCase() + str_2;
            } else {
              this.str = str_1 + value + str_2;
            }
            cursorPos += 1;
        }

        key.classList.add('active');
        T_AREA.value = this.str;
        T_AREA.selectionStart = T_AREA.selectionEnd = cursorPos;
      });
    });

    document.addEventListener('mouseup', (e) => {
      const KEYS = Array.from(document.querySelectorAll('.keyboard__key'));
      KEYS.forEach((key) => {
        if (key.classList.contains('active')) {
          key.classList.remove('active');
        }
      });
      if (e.target.textContent === 'Shift') {
        this.toggleCaps();
        document.querySelector('.keyboard__key-activatable').classList.remove('keyboard__key-active', this.capsLock);
        this.unpressShift();
      }
    });

    document.addEventListener('keydown', (e) => {
      KEYS.forEach((key) => {
        if (e.key === key.textContent) {
          key.classList.add('active');
        }
      });

      this.str = T_AREA.value;
    });

    document.addEventListener('keyup', (e) => {
      KEYS.forEach((key) => {
        if (e.key === key.textContent) {
          key.classList.remove('active');
        }
      });
    });
  }
}

export default Model;