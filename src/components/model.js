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
  }

  init() {
    const KEYS = Array.from(document.querySelectorAll('.keyboard__key'));
    const T_AREA = document.querySelector('.t_area');
    let cursorPos = T_AREA.selectionStart;

    // T_AREA.addEventListener('input', (e) => {
    //   console.log(e);
    //   this.str = T_AREA.value;
    //   console.log(this.str);
    // });

    KEYS.forEach((key) => {
      key.addEventListener('click', () => {
        const caps = document.querySelector('.keyboard__key-activatable');
        let value = key.textContent.toLowerCase();
        let arrowLeft = document.createTextNode('\u2190');
        let arrowRight = document.createTextNode('\u2192');
        let arrowUp = document.createTextNode('\u2191');
        let arrowDown = document.createTextNode('\u2193');

        switch (value) {
          case 'backspace':
            if (T_AREA.selectionStart) {
              let str1 = this.str.slice(0, T_AREA.selectionStart - 1);
              let str2 = this.str.slice(T_AREA.selectionStart);
              this.str = str1 + str2;
              T_AREA.focus();
              cursorPos -= 1;
              console.log(T_AREA.selectionStart)
            } else this.str = this.str.slice(0, this.str.length - 1);
            break;

          case 'tab':
            this.str += '    ';
            break;

          case 'del':
            
            break;

          case 'keyboard_capslock':
            this.toggleCaps();
            caps.classList.toggle('keyboard__key-active', this.capsLock);
            break;

          case 'enter':
            this.str += '\n';
            break;

          case '':
            this.str += ' ';
            break;

          case 'shift':
            break;

          case 'ctrl':
            break;

          case 'win':
            break;

          case 'alt':
            break;

          case 'keyboard_arrow_up':
            this.str += arrowUp.textContent;
            break;
          
          case 'keyboard_arrow_left':
            this.str += arrowLeft.textContent;
            break;

          case 'keyboard_arrow_down':
            this.str += arrowDown.textContent;
            break;

          case 'keyboard_arrow_right':
            this.str += arrowRight.textContent;
            break;

          default:
            this.str += this.capsLock ? value.toUpperCase() : value;
        }
        
        T_AREA.value = this.str;
        T_AREA.selectionStart = T_AREA.selectionEnd = cursorPos;
      });
    });

    document.addEventListener('keydown', (e) => {
      // T_AREA.focus();
      KEYS.forEach((key) => {
        if (e.key === key.textContent) {
          key.classList.add('active');
        }
      });
      this.str = T_AREA.value;
    });

    document.addEventListener('keyup', (e) => {
      // T_AREA.focus();
      KEYS.forEach((key) => {
        if (e.key === key.textContent) {
          key.classList.remove('active');
        }
      });
    });
  }
}

export default Model;