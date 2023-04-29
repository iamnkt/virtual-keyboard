import '../styles/style.css';

class Page {
  createPage() {
    const TITLE = document.createElement('h1');
    const T_AREA = document.createElement('textarea');
    const MAIN = document.createElement('div');
    const KEYS_CONTAINER = document.createElement('div');

    TITLE.classList.add('title');
    TITLE.textContent = 'RSS Virtual Keyboard';
    T_AREA.setAttribute('placeholder', 'Please, type some text');
    T_AREA.classList.add('t_area');
    MAIN.classList.add('keyboard');
    KEYS_CONTAINER.classList.add('keyboard__keys');

    document.body.append(TITLE);
    document.body.append(T_AREA);
    MAIN.appendChild(KEYS_CONTAINER);
    document.body.appendChild(MAIN);
  }
}

export default Page;