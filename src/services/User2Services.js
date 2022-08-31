import axios from "axios";

export class User2Services {
  static fetchAllUsers() {
    let url = "https://jsonplaceholder.typicode.com/users";
    return axios.get(url);
  }
  static fetchUser(userId) {
    let url = "https://jsonplaceholder.typicode.com/users/" + userId;
    return axios.get(url);
  }
}
