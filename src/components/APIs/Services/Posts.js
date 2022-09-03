import { HttpClient } from "../HttpClient";

class PostsService extends HttpClient {
  constructor() {
    super("http://139.59.136.149:8080");
  }

  getAllPosts() {
    return this.get("posts");
  }

  getCommentsById(id) {
    return this.get(`posts/${id}/comments`);
  }

  createNewPost(body) {
    return this.post("posts", body);
  }

  editPost(id, body) {
    return this.put("posts", body, id);
  }
}

export const postService = new PostsService();
