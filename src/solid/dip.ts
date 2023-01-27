/*
 * Dependency inversion principle
 */

import jsonNews from '../data/data.json';
import { localData } from '../data/local';

// Interfaces
interface New {
  body: string;
  id: number;
  title: string;
  userId: number;
}

interface NewsDataProvider {
  getNews: () => Promise<New[]>;
}

// Data services
class LocalDBService implements NewsDataProvider {
  async getNews() {
    return localData;
  }
}

class JsonDBService implements NewsDataProvider {
  async getNews() {
    return jsonNews;
  }
}

class RemoteDBService implements NewsDataProvider {
  async getNews() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
    return resp.json();
  }
}

// Classes
class NewsService {
  private news: New[] = [];

  constructor(private dataProvider: NewsDataProvider) {}

  async getNews() {
    return this.dataProvider.getNews();
  }
}

// Implement
(async () => {
  const dataProviderLocal = new LocalDBService();
  const dataProviderJson = new JsonDBService();
  const dataProviderRemote = new RemoteDBService();

  const newsServiceLocal = new NewsService(dataProviderLocal);
  const newsServiceJson = new NewsService(dataProviderJson);
  const newsServiceRemote = new NewsService(dataProviderRemote);

  const newsLocal = await newsServiceLocal.getNews();
  const newsJson = await newsServiceJson.getNews();
  const newsRemote = await newsServiceRemote.getNews();

  console.log({ newsLocal, newsJson, newsRemote });
})();
