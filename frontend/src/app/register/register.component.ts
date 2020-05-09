import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth/authentication.service';
import { User, NewUser } from '../models/user';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required, Validators.minLength(3)],
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(3)]
  });

  constructor(private authService: AuthenticationService, private fb: FormBuilder) { }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm);
    const user: NewUser = {username: this.registerForm.controls['username'].value,
      password: this.registerForm.controls['password'].value,
      firstName: this.registerForm.controls['firstName'].value,
      lastName: this.registerForm.controls['lastName'].value,
      email: this.registerForm.controls['email'].value,
      roles: ['USER']};
    this.authService.register(user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
