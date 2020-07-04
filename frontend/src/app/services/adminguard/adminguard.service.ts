import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.auth.isAdmin().pipe(map(e => {
      if (!e) {
        this.router.navigate(['unauthorized']);
      }
      return e;
    }), catchError(err =>{
      console.log('caught mapping error and rethrowing', err);
      this.router.navigate(['unauthorized']);
      return throwError(err);
    }));
  }
}
