import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth/authentication.service';
import { TokenStorageService } from '../services/token/token-storage.service';
import { FormControl, Validators } from '@angular/forms';
import { ResetService } from '../services/password/reset.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  resetPasswordBool = false;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private authService: AuthenticationService,
              private tokenStorage: TokenStorageService,
              private resetService: ResetService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  logout(){
    this.tokenStorage.signOut();
    this.isLoggedIn = false;
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }

  showResetField() {
    this.resetPasswordBool = true;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  resetPassword() {
    console.log(this.email.value);
    this.resetService.requestReset(this.email.value).subscribe(result => {
      if (result){
        console.log('Request successful');
      } else {
        this.errorMessage = ('Account not found!');
        console.log('Account not found!');
      }
    });
  }
}
