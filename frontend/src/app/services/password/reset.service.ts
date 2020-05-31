import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routes } from 'src/app/models/routes';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(private http: HttpClient) { }

  requestReset(email: string): Observable<any> {
    return this.http.post(`${routes.password.requestEmail}`, email);
  }

  confirmToken(token: string): Observable<any> {
    return this.http.get(`${routes.password.confirmToken}?token=${token}`);
  }
}
