import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { TokenStorageService } from '../services/token/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  constructor(private tokenService: TokenStorageService) { }

  ngOnInit() {
    this.user = this.tokenService.getUser();
  }

}
