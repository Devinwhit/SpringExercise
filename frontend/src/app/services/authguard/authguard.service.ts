import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenStorageService } from '../token/token-storage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private token: TokenStorageService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.token.validToken().pipe(map(e => {
      if (!e) {
        this.token.signOut();
        this.router.navigate(['login']);
        window.location.reload();
      }
      return e;
    }));
  }

}
