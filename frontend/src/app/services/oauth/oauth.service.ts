import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Foo} from '../../models/foo';
import {Observable} from 'rxjs';
import {User} from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class OauthService {
  private Cookie: any;

  constructor(private http: HttpClient, private router: Router) { }

  baseUrl = 'http://localhost:8080/';

  login(loginPayload) {
    const headers = {
      Authorization: 'Basic ' + btoa('crmClient1:crmSuperSecret'),
      'Content-type': 'application/x-www-form-urlencoded'
    };
    return this.http.post('http://localhost:8080/' + 'oauth/token', loginPayload, {headers});
  }

  getUsers() {
    return this.http.get(this.baseUrl + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  getUserById(id: number) {
    return this.http.get(this.baseUrl + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl + 'user?access_token=' + JSON.parse(window.sessionStorage.getItem('token')).access_token, user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.baseUrl + 'user/' + user.id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token'))
      .access_token, user);
  }

  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + 'user/' + id + '?access_token=' + JSON.parse(window.sessionStorage.getItem('token'))
      .access_token);
  }
}
