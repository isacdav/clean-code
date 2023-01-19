import axios from 'axios';

// Classes
class TodoService {
  async getTodoItems() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/'
    );
    return data;
  }
}

class PostService {
  async getPosts() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return data;
  }
}

class PhotosService {
  async getPhotos() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/photos'
    );
    return data;
  }
}

// Implement
(async () => {
  const todoService = new TodoService();
  const postService = new PostService();
  const photosService = new PhotosService();

  const todos = await todoService.getTodoItems();
  const posts = await postService.getPosts();
  const photos = await photosService.getPhotos();

  console.log({ todos, posts, photos });
})();
