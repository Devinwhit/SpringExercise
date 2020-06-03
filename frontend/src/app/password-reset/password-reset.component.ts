import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetService } from '../services/password/reset.service';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { ResetPassword } from '../models/resetPassword';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  constructor(private router: ActivatedRoute, private redirect: Router,
              private reset: ResetService, private fb: FormBuilder) { }

  validToken = false;
  tokenCheckStatus = 'Verifying Token...';
  token: string;
  form: any = {};
  errorMessage = '';
  resetPasswordBool = false;

  ngOnInit() {
    this.form = this.fb.group({
      password: ['', [Validators.required]],
      repassword: ['', [Validators.required]]
     }, { validator: this.checkIfMatchingPasswords('password', 'repassword')});
    this.token = this.router.snapshot.queryParamMap.get('token');
    if (this.token === null){
      this.redirect.navigate(['/']);
    } else {
      this.reset.verifyToken(this.token).subscribe(result => {
        if (result) {
          console.log('Token is valid, can reset password');
          this.validToken = true;
          this.tokenCheckStatus = 'Please enter a new password:';
        } else {
          this.tokenCheckStatus = 'Token is no longer valid, cannot reset password';
        }
      });
    }
  }

  checkIfMatchingPasswords(password: string, repassword: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[password];
      const passwordConfirmationInput = group.controls[repassword];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true});
      } else {
          return passwordConfirmationInput.setErrors(null);
      }
    };
  }

  onSubmit() {
    console.log('tmp');
    const resetRequest: ResetPassword = {token: this.token, newPassword: this.form.password};
    console.log(resetRequest);
    this.reset.resetPassword(resetRequest).subscribe(result => {
      if (result) {
        this.redirect.navigate(['/login']);
      } else {
        this.tokenCheckStatus = 'Unable to reset password, please try again';
      }
    });
  }

}
