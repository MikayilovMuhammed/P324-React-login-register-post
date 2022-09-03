import { HttpClient } from "../HttpClient";

class CardsService extends HttpClient {
  constructor() {
    super("http://139.59.136.149:8080");
  }

  getAllPosts() {
    return this.get("posts");
  }

  getCommentsById(id) {
    return this.get(`posts/${id}/comments`);
  }

  postNewPosts(body) {
    return this.post("posts", body);
  }

  editPost(id, body) {
    return this.put("posts", body, id);
  }
}

export const cardService = new CardsService();
