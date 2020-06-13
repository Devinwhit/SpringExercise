import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { TokenStorageService } from '../services/token/token-storage.service';
import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  token: boolean;
  constructor(private tokenService: TokenStorageService, private profileServie: ProfileService) { }

  ngOnInit() {
    this.user = this.tokenService.getUser();
    this.tokenService.validToken().subscribe(resp => {
      console.log(resp);
      this.token = resp;
    });
    this.profileServie.getProfile().subscribe(result => {
      console.log(result);
    });
  }

}
