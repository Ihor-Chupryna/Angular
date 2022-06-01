import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {urls} from "../constants/urls";
import {IUser} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[]

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users)
  }
}
