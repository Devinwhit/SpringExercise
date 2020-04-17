import { Injectable } from '@angular/core';
import { routes } from 'src/app/models/routes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = routes.authApi.roles;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(AUTH_API + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(AUTH_API + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(AUTH_API + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(AUTH_API + 'admin', { responseType: 'text' });
  }
}
