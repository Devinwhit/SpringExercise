import { Component, OnInit } from '@angular/core';
import { UserProfileDTO } from '../models/user';
import { TokenStorageService } from '../services/token/token-storage.service';
import { ProfileService } from '../services/profile/profile.service';
import { Validators, FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserProfileDTO;
  token: boolean;

  updateForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required]
    });
  constructor(private tokenService: TokenStorageService, private profileServie: ProfileService,
              private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.user = this.tokenService.getUser();
    this.tokenService.validToken().subscribe(resp => {
      console.log(resp);
      this.token = resp;
    });
    this.profileServie.getProfile().subscribe(result => {
      console.log(result);
      this.user = result;
      this.updateForm.controls.firstName.setValue(this.user.firstName);
      this.updateForm.controls.lastName.setValue(this.user.lastName);
      this.updateForm.controls.username.setValue(this.user.username, Validators.length > 3);
      this.updateForm.controls.email.setValue(this.user.email);
    });
  }

  onSubmit() {
    const user: UserProfileDTO = {username: this.updateForm.controls.username.value,
      firstName: this.updateForm.controls.firstName.value,
      lastName: this.updateForm.controls.lastName.value,
      email: this.updateForm.controls.email.value};
    this.profileServie.updateProfile(user).subscribe(up => {
      if (up){
        this.openSnackBar('Successfully Updated Account!', 'Close');
      } else {
        this.openSnackBar('Whoops, Something Went Wrong, Try Again', 'Close');
      }
    }, error => {
      this.openSnackBar('Whoops, Something Went Wrong, Try Again', 'Close');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
