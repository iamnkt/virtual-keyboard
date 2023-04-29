import Page from './page';
import Layout from './layout';
import Model from './model';

class App {
  constructor() {
    this.page = new Page();
    this.layout = new Layout();
    this.model = new Model();
  }

  run() {
    this.page.createPage();
    document.querySelector('.keyboard__keys').appendChild(this.layout.createKeys());
    this.model.init();
  }
}

export default App;