import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routes } from 'src/app/models/routes';
import { UserProfileDTO } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get(`${routes.user.getprofile}`);
  }

  updateProfile(user: UserProfileDTO): Observable<any> {
    return this.http.post(`${routes.user.updateProfile}`, user);
  }
}
