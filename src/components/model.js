const RU_LAYOUT = {
  'Backquote': 'ё',
  'Digit1': '1',
  'Digit2': '2',
  'Digit3': '3',
  'Digit4': '4',
  'Digit5': '5',
  'Digit6': '6',
  'Digit7': '7',
  'Digit8': '8',
  'Digit9': '9',
  'Digit0': '0',
  'Minus': '-',
  'Equal': '=',
  'KeyQ': 'й',
  'KeyW': 'ц',
  'KeyE': 'у',
  'KeyR': 'к',
  'KeyT': 'е',
  'KeyY': 'н',
  'KeyU': 'г',
  'KeyI': 'ш',
  'KeyO': 'щ',
  'KeyP': 'з',
  'BracketLeft': 'х',
  'BracketRight': 'ъ',
  'Backslash': '\\',
  'KeyA': 'ф',
  'KeyS': 'ы',
  'KeyD': 'в',
  'KeyF': 'а',
  'KeyG': 'п',
  'KeyH': 'р',
  'KeyJ': 'о',
  'KeyK': 'л',
  'KeyL': 'д',
  'Semicolon': 'ж',
  'Quote': 'э',
  'KeyZ': 'я',
  'KeyX': 'ч',
  'KeyC': 'с',
  'KeyV': 'м',
  'KeyB': 'и',
  'KeyN': 'т',
  'KeyM': 'ь',
  'Comma': 'б',
  'Period': 'ю',
  'Slash': '.',
}

const EN_LAYOUT = {
  'Backquote': '`',
  'Digit1': '1',
  'Digit2': '2',
  'Digit3': '3',
  'Digit4': '4',
  'Digit5': '5',
  'Digit6': '6',
  'Digit7': '7',
  'Digit8': '8',
  'Digit9': '9',
  'Digit0': '0',
  'Minus': '-',
  'Equal': '=',
  'KeyQ': 'q',
  'KeyW': 'w',
  'KeyE': 'e',
  'KeyR': 'r',
  'KeyT': 't',
  'KeyY': 'y',
  'KeyU': 'u',
  'KeyI': 'i',
  'KeyO': 'o',
  'KeyP': 'p',
  'BracketLeft': '[',
  'BracketRight': ']',
  'Backslash': '\\',
  'KeyA': 'a',
  'KeyS': 's',
  'KeyD': 'd',
  'KeyF': 'f',
  'KeyG': 'g',
  'KeyH': 'h',
  'KeyJ': 'j',
  'KeyK': 'k',
  'KeyL': 'l',
  'Semicolon': ';',
  'Quote': '\'',
  'KeyZ': 'z',
  'KeyX': 'x',
  'KeyC': 'c',
  'KeyV': 'v',
  'KeyB': 'b',
  'KeyN': 'n',
  'KeyM': 'm',
  'Comma': ',',
  'Period': '.',
  'Slash': '/',
}

const EN_SHIFT_LAYOUT = {
  'Backquote': '~',
  'Digit1': '!',
  'Digit2': '@',
  'Digit3': '#',
  'Digit4': '$',
  'Digit5': '%',
  'Digit6': '^',
  'Digit7': '&',
  'Digit8': '*',
  'Digit9': '(',
  'Digit0': ')',
  'Minus': '_',
  'Equal': '+',
  'BracketLeft': '{',
  'BracketRight': '}',
  'Backslash': '|',
  'Semicolon': ':',
  'Quote': '\"',
  'Comma': '<',
  'Period': '>',
  'Slash': '?',
};

const EN_ALT_LAYOUT = {
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
  '-': '_',
  '=': '+',
  '[': '{',
  ']': '}',
  '\\': '|',
  ';': ':',
  '\'': '\"',
  ',': '<',
  '.': '>',
  '/': '?',
};

const RU_ALT_LAYOUT = {
  '1': '!',
  '2': '"',
  '3': '№',
  '4': ';',
  '5': '%',
  '6': ':',
  '7': '?',
  '8': '*',
  '9': '(',
  '0': ')',
  '-': '_',
  '=': '+',
  '\\': '/',
  '.': ',',
};

const RU_SHIFT_LAYOUT = {
  'Backquote': 'Ё',
  'Digit1': '!',
  'Digit2': '"',
  'Digit3': '№',
  'Digit4': ';',
  'Digit5': '%',
  'Digit6': ':',
  'Digit7': '?',
  'Digit8': '*',
  'Digit9': '(',
  'Digit8': '*',
  'Digit9': '(',
  'Digit0': ')',
  'Minus': '_',
  'Equal': '+',
  'BracketLeft': 'Х',
  'BracketRight': 'Ъ',
  'Backslash': '/',
  'Semicolon': 'Ж',
  'Quote': 'Э',
  'Comma': 'Б',
  'Period': 'Ю',
  'Slash': ',',
};

const ARR_KEYS = [];

class Model {
  constructor() {
    this.str = '';
    this.capsLock = false;
    this.shift = false;
    this.allowed = true;
    this.en = true;
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

    if (this.en) {
      KEYS.forEach((key) => {
        for (let k in EN_ALT_LAYOUT) {
          if (key.textContent === k) {
            key.textContent = EN_ALT_LAYOUT[k];
          }
        }
      });
    } else {
      KEYS.forEach((key) => {
        for (let k in RU_ALT_LAYOUT) {
          if (key.textContent === k) {
            key.textContent = RU_ALT_LAYOUT[k];
          }
        }
      });
    }

    this.shift = true;
  }

  unpressShift() {
    const KEYS = Array.from(document.querySelectorAll('.keyboard__key'));
    
    if (this.en) {
      KEYS.forEach((key) => {
        for (let k in EN_ALT_LAYOUT) {
          if (key.textContent === EN_ALT_LAYOUT[k]) {
            key.textContent = k;
          }
        }
      });
    } else {
      KEYS.forEach((key) => {
        for (let k in RU_ALT_LAYOUT) {
          if (key.textContent === RU_ALT_LAYOUT[k]) {
            key.textContent = k;
          }
        }
      });
    }

    this.shift = false;
  }

  changeLang() {
    const KEYS = Array.from(document.querySelectorAll('.keyboard__key'));

    if (this.en) {
      if (this.capsLock) {
        KEYS.forEach((key) => {
          for (let k in EN_LAYOUT) {
            if (key.textContent.toLowerCase() === EN_LAYOUT[k]) {
              key.textContent = RU_LAYOUT[k].toUpperCase();
            }
          }
        });
      } else {
        KEYS.forEach((key) => {
          for (let k in EN_LAYOUT) {
            if (key.textContent === EN_LAYOUT[k]) {
              key.textContent = RU_LAYOUT[k];
            }
          }
        });
      }

    } else {
      if (this.capsLock) {
        KEYS.forEach((key) => {
          for (let k in RU_LAYOUT) {
            if (key.textContent.toLowerCase() === RU_LAYOUT[k]) {
              key.textContent = EN_LAYOUT[k].toUpperCase();
            }
          }
        });
      } else {
        KEYS.forEach((key) => {
          for (let k in RU_LAYOUT) {
            if (key.textContent === RU_LAYOUT[k]) {
              key.textContent = EN_LAYOUT[k];
            }
          }
        });
        document.querySelector('.keyboard__key-dot').textContent = '.';
      }
    }
  }

  init() {
    const KEYS = Array.from(document.querySelectorAll('.keyboard__key'));
    const T_AREA = document.querySelector('.t_area');
    const ARROW_LEFT = document.createTextNode('\u2190');
    const ARROW_RIGHT = document.createTextNode('\u2192');
    const ARROW_UP = document.createTextNode('\u2191');
    const ARROW_DOWN = document.createTextNode('\u2193');

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
            CAPS.classList.toggle('keyboard__key-active');
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
      const CAPS = document.querySelector('.keyboard__key-activatable');
      let caps_on = e.getModifierState('CapsLock');
      let cursorPos = T_AREA.selectionStart;
      let str_1;
      let str_2;
      T_AREA.focus();
      e.preventDefault();

      KEYS.forEach((key) => {
        if (e.key.toLowerCase() === key.textContent.toLowerCase()) {
          key.classList.add('active');
        } else if (e.key === 'CapsLock') {
          document.querySelector('.keyboard__key-activatable').classList.add('active');
        } else if (e.key === 'Delete') {
          document.querySelector('.keyboard__key-del').classList.add('active');
        } else if (e.code === 'ShiftLeft') {
          document.querySelector('.keyboard__key-shift_left').classList.add('active');
          document.querySelector('.keyboard__key-shift_right').classList.remove('active');
        } else if (e.code === 'ShiftRight') {
          document.querySelector('.keyboard__key-shift_right').classList.add('active');
          document.querySelector('.keyboard__key-shift_left').classList.remove('active');
        } else if (e.code === 'ControlLeft') {
          document.querySelector('.keyboard__key-ctrl_left').classList.add('active');
          document.querySelector('.keyboard__key-ctrl_right').classList.remove('active');
        } else if (e.code === 'ControlRight') {
          document.querySelector('.keyboard__key-ctrl_right').classList.add('active');
          document.querySelector('.keyboard__key-ctrl_left').classList.remove('active');
        } else if (e.code === 'AltLeft') {
          document.querySelector('.keyboard__key-alt_left').classList.add('active');
          document.querySelector('.keyboard__key-alt_right').classList.remove('active');
        } else if (e.code === 'AltRight') {
          document.querySelector('.keyboard__key-alt_right').classList.add('active');
          document.querySelector('.keyboard__key-alt_left').classList.remove('active');
        } else if (e.key === 'Meta') {
          if (key.textContent === 'Win') {
            key.classList.add('active');
          }
        } 
        else if (e.key === 'ArrowUp') {
          if (key.textContent === 'keyboard_arrow_up') {
            key.classList.add('active');
          }
        } 
        else if (e.key === 'ArrowLeft') {
          if (key.textContent === 'keyboard_arrow_left') {
            key.classList.add('active');
          }
        } 
        else if (e.key === 'ArrowDown') {
          if (key.textContent === 'keyboard_arrow_down') {
            key.classList.add('active');
          }
        } 
        else if (e.key === 'ArrowRight') {
          if (key.textContent === 'keyboard_arrow_right') {
            key.classList.add('active');
          }
        } else if (e.key === ' ') {
          document.querySelector('.keyboard__key-space').classList.add('active');
        }
      });

      switch (e.code) {
        case 'Backspace':
          if (cursorPos === 0) break;
          str_1 = T_AREA.value.slice(0, cursorPos - 1);
          str_2 = T_AREA.value.slice(cursorPos);
          T_AREA.value = str_1 + str_2;
          cursorPos -= 1;
          break;

        case 'Tab':
          str_1 = T_AREA.value.slice(0, cursorPos);
          str_2 = T_AREA.value.slice(cursorPos);
          T_AREA.value = str_1 + '    ' + str_2;
          cursorPos += 4;
          break;

        case 'Delete':
          str_1 = T_AREA.value.slice(0, cursorPos);
          str_2 = T_AREA.value.slice(cursorPos + 1);
          T_AREA.value = str_1 + str_2;
          break;

        case 'CapsLock':
          if (e.repeat != undefined) {
            this.allowed = !e.repeat;
          }
          if (!this.allowed) return;
          this.allowed = false;   
          this.toggleCaps();
          CAPS.classList.toggle('keyboard__key-active');
          break;

        case 'Enter':
          str_1 = T_AREA.value.slice(0, cursorPos);
          str_2 = T_AREA.value.slice(cursorPos);
          T_AREA.value = str_1 + '\n' + str_2;
          cursorPos = str_1.length + 1;
          break;

        case 'Space':
          str_1 = T_AREA.value.slice(0, cursorPos);
          str_2 = T_AREA.value.slice(cursorPos);
          T_AREA.value = str_1 + ' ' + str_2;
          cursorPos += 1;
          break;

        case 'ShiftLeft':
          if (e.repeat != undefined) {
            this.allowed = !e.repeat;
          }
          if (!this.allowed) return;
          this.allowed = false;
          this.toggleCaps();
          CAPS.classList.toggle('keyboard__key-active', this.capsLock);
          this.pressShift();
          break;
        
          case 'ShiftRight':
            if (e.repeat != undefined) {
              this.allowed = !e.repeat;
            }
            if (!this.allowed) return;
            this.allowed = false;
            this.toggleCaps();
            CAPS.classList.toggle('keyboard__key-active', this.capsLock);
            this.pressShift();
            break;

        case 'ControlLeft':
          if (e.repeat != undefined) {
            this.allowed = !e.repeat;
          }
          if (!this.allowed) return;
          this.allowed = false;
          break;

        case 'ControlRight':
          if (e.repeat != undefined) {
            this.allowed = !e.repeat;
          }
          if (!this.allowed) return;
          this.allowed = false;
          break;

        case 'MetaLeft':
          break;

        case 'AltLeft':
          if (e.repeat != undefined) {
            this.allowed = !e.repeat;
          }
          if (!this.allowed) return;
          this.allowed = false;
          break;

        case 'AltLRight':
          if (e.repeat != undefined) {
            this.allowed = !e.repeat;
          }
          if (!this.allowed) return;
          this.allowed = false;
          break;

        case 'ArrowUp':
          str_1 = T_AREA.value.slice(0, cursorPos);
          str_2 = T_AREA.value.slice(cursorPos);
          T_AREA.value = str_1 + ARROW_UP.textContent + str_2;
          cursorPos += 1;
          break;

        case 'ArrowLeft':
          str_1 = T_AREA.value.slice(0, cursorPos);
          str_2 = T_AREA.value.slice(cursorPos);
          T_AREA.value = str_1 + ARROW_LEFT.textContent + str_2;
          cursorPos += 1;
          break;

        case 'ArrowDown':
          str_1 = T_AREA.value.slice(0, cursorPos);
          str_2 = T_AREA.value.slice(cursorPos);
          T_AREA.value = str_1 + ARROW_DOWN.textContent + str_2;
          cursorPos += 1;
          break;

        case 'ArrowRight':
          str_1 = T_AREA.value.slice(0, cursorPos);
          str_2 = T_AREA.value.slice(cursorPos);
          T_AREA.value = str_1 + ARROW_RIGHT.textContent + str_2;
          cursorPos += 1;
          break;

        default:
          str_1 = T_AREA.value.slice(0, cursorPos);
          str_2 = T_AREA.value.slice(cursorPos);
          console.log(this.shift);

          if (this.en) {
            for (let k in EN_LAYOUT) {
              if (e.code === k) {
                if (this.capsLock) {
                  T_AREA.value = str_1 + EN_LAYOUT[k].toUpperCase() + str_2;
                } else {
                  T_AREA.value = str_1 + EN_LAYOUT[k] + str_2;
                }
              }
            }
            if (this.shift) {
              for (let k in EN_SHIFT_LAYOUT) {
                console.log(e.code)
                if (e.code === k) {
                  console.log('yes')
                  T_AREA.value = str_1 + EN_SHIFT_LAYOUT[k] + str_2;
                }
              }
            }
          } else {
            for (let k in RU_LAYOUT) {
              if (e.code === k) {
                if (this.capsLock) {
                  T_AREA.value = str_1 + RU_LAYOUT[k].toUpperCase() + str_2;
                } else {
                  T_AREA.value = str_1 + RU_LAYOUT[k] + str_2;
                }
              }
            }
            if (this.shift) {
              for (let k in RU_SHIFT_LAYOUT) {
                console.log(e.code)
                if (e.code === k) {
                  console.log('yes')
                  T_AREA.value = str_1 + RU_SHIFT_LAYOUT[k] + str_2;
                }
              }
            }
          }
          cursorPos += 1;
      }

      ARR_KEYS.push(e.code)
      this.str = T_AREA.value;
      T_AREA.selectionStart = T_AREA.selectionEnd = cursorPos;
    });

    document.addEventListener('keyup', (e) => {
      let cursorPos = T_AREA.selectionStart;
      T_AREA.focus();
      e.preventDefault();

      if (ARR_KEYS.length === 2) {
        if (ARR_KEYS.includes('ControlLeft') && ARR_KEYS.includes('AltLeft')) {
          this.changeLang();
          this.en = !this.en;
        };
      };

      KEYS.forEach((key) => {
        if (e.key.toLowerCase() === key.textContent.toLowerCase()) {
          key.classList.remove('active');
        } else if (e.key === 'CapsLock') {
          document.querySelector('.keyboard__key-activatable').classList.remove('active');
        } else if (e.key === 'Delete') {
          document.querySelector('.keyboard__key-del').classList.remove('active');
        } else if (e.key === 'Control') {
          if (key.textContent === 'Ctrl') {
            key.classList.remove('active');
          }
        } else if (e.key === 'Meta') {
          if (key.textContent === 'Win') {
            key.classList.remove('active');
          }
        } else if (e.key === 'ArrowUp') {
          if (key.textContent === 'keyboard_arrow_up') {
            key.classList.remove('active');
          }
        } 
        else if (e.key === 'ArrowLeft') {
          if (key.textContent === 'keyboard_arrow_left') {
            key.classList.remove('active');
          }
        } 
        else if (e.key === 'ArrowDown') {
          if (key.textContent === 'keyboard_arrow_down') {
            key.classList.remove('active');
          }
        } 
        else if (e.key === 'ArrowRight') {
          if (key.textContent === 'keyboard_arrow_right') {
            key.classList.remove('active');
          }
        } else if (e.key === ' ') {
          document.querySelector('.keyboard__key-space').classList.remove('active');
        }
      });

      if (e.key === 'Shift') {
        this.toggleCaps();
        document.querySelector('.keyboard__key-activatable').classList.remove('keyboard__key-active', this.capsLock);
        this.unpressShift();
        this.allowed = true;
      } else if (e.key === 'CapsLock') {
        this.allowed = true;
      }

      ARR_KEYS.length = 0; 
    });
  }
}

export default Model;