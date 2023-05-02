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
    Page.createPage();
    document.querySelector('.keyboard__keys').appendChild(Layout.createKeys());
    this.model.init();
  }
}

export default App;
