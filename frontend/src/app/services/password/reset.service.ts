import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { routes } from 'src/app/models/routes';
import { ResetPassword } from 'src/app/models/resetPassword';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(private http: HttpClient) { }

  requestReset(email: string): Observable<any> {
    return this.http.post(`${routes.password.requestEmail}`, email);
  }

  verifyToken(token: string): Observable<any> {
    return this.http.get(`${routes.password.verifyToken}?token=${token}`);
  }

  resetPassword(resetPassword: ResetPassword) {
    return this.http.post(`${routes.password.resetPassword}`, resetPassword);
  }
}
