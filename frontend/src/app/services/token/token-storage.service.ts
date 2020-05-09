import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { routes } from 'src/app/models/routes';
import { Observable } from 'rxjs';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  isLoggedIn = false;
  constructor(private http: HttpClient) { }
  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public validToken(): Observable<any> {
    return this.http.post(`${routes.authApi.auth}tokencheck`, sessionStorage.getItem(TOKEN_KEY), {observe: 'body'});
  }
}
