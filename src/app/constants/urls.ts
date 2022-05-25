import {environment} from "../../environments/environment";

const api = environment.API;

export const urls = {
  users: `${api}/users`,
  posts: `${api}/posts`,
  comments: `${api}/comments`,
}
