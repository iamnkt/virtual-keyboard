import '../styles/style.css';

class Page {
  static createPage() {
    const TITLE = document.createElement('h1');
    const P_1 = document.createElement('p');
    const P_2 = document.createElement('p');
    const T_AREA = document.createElement('textarea');
    const MAIN = document.createElement('div');
    const KEYS_CONTAINER = document.createElement('div');

    TITLE.classList.add('title');
    TITLE.textContent = 'RSS Virtual Keyboard';
    P_1.textContent = 'Keyboard was created for Windows OS';
    P_2.textContent = 'Press Left Ctrl + Left Alt to switch between languages';
    T_AREA.setAttribute('placeholder', 'Please, type any text');
    T_AREA.classList.add('t_area');
    MAIN.classList.add('keyboard');
    KEYS_CONTAINER.classList.add('keyboard__keys');

    document.body.append(TITLE);
    document.body.append(P_1);
    document.body.append(P_2);
    document.body.append(T_AREA);
    MAIN.appendChild(KEYS_CONTAINER);
    document.body.appendChild(MAIN);
  }
}

export default Page;
