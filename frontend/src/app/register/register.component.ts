import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/auth/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }
  form: any = {};
  model: User = {firstName: '', lastName: '', password: '',
                roles: [], username: '', email: '', id: 0};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  submitted = false;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    /**
    this.authService.register(this.form).subscribe(
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
    */
  }

}
