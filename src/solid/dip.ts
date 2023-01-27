/*
 * Dependency inversion principle
 */

// Interfaces
interface New {
  body: string;
  id: number;
  title: string;
  userId: number;
}

// Data service
class LocalDataBaseService {
  async getFakeNews() {
    return [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
      },
    ];
  }
}

// Classes
class NewsService {
  private news: New[] = [];

  constructor() {}

  async getNews() {
    const jsonDB = new LocalDataBaseService();
    this.news = await jsonDB.getFakeNews();

    return this.news;
  }
}

// Implement
(async () => {
  const newsServices = new NewsService();

  const news = await newsServices.getNews();

  console.log({ news });
})();
