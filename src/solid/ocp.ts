// import axios from 'axios';

// Classes
class HttpClient {
  // async get(url: string) {
  //   const { data, status } = await axios.get(url);
  //   return { data, status };
  // }

  async get(url: string) {
    const resp = await fetch(url);
    const data = resp.json();

    return { data, status: resp.status };
  }
}

class TodoService {
  constructor(private httpClient: HttpClient) {}

  async getTodoItems() {
    const { data } = await this.httpClient.get(
      'https://jsonplaceholder.typicode.com/todos/'
    );
    return data;
  }
}

class PostService {
  constructor(private httpClient: HttpClient) {}

  async getPosts() {
    const { data } = await this.httpClient.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return data;
  }
}

class PhotosService {
  constructor(private httpClient: HttpClient) {}

  async getPhotos() {
    const { data } = await this.httpClient.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    return data;
  }
}

// Implement
(async () => {
  const httpClient = new HttpClient();

  const todoService = new TodoService(httpClient);
  const postService = new PostService(httpClient);
  const photosService = new PhotosService(httpClient);

  const todos = await todoService.getTodoItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log({ todos, posts, photos });
})();
