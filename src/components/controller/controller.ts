import AppLoader from './appLoader';
import { IDrawNewsData } from '../view/appView';
import { IDrawSourcesData } from '../view/appView';

class AppController extends AppLoader {
    public getSources(callback: ((data?: IDrawSourcesData) => void) | undefined): void {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  public getNews(
    e: MouseEvent,
    callback: ((data?: IDrawNewsData) => void) | undefined
  ): void {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if ((target as HTMLElement).classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
