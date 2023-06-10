import AppController from '../controller/controller';
import AppView, { IDrawNewsData, IDrawSourcesData } from '../view/appView';
import Footer from '../view/footer/footer';

class App {
  private controller: AppController;
  private view: AppView;
  private footer: Footer;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
    this.footer = new Footer();
  }

  public start(): void {
    const sources = document.querySelector('.sources') as HTMLDivElement;
    if (sources) {
      sources.addEventListener('click', (e) => this.handleSourcesClick(e));
    }
    this.controller.getSources((data?: IDrawSourcesData) =>
      this.view.drawSources(data)
    );
    this.footer.render();
  }

  private handleSourcesClick(e: MouseEvent): void {
    this.controller.getNews(e, (data?: IDrawNewsData) =>
      this.view.drawNews(data)
    );
  }
}

export default App;
