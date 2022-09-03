import { HttpClient } from "../HttpClient";

class AuthService extends HttpClient {
  constructor() {
    super("http://139.59.136.149:8080");
  }

  login(body) {
    return this.post("login", body);
  }

  register(body) {
    return this.post("register", body);
  }
}

export const authService = new AuthService();
