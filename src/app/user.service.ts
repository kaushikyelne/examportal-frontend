import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import baseURL from './services/helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * addUser
   */
  public addUser(user: any) {
    return this.http.post(`${baseURL}/user/`,user);
    
  }


}