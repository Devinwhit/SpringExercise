import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { UserProfileDTO } from 'src/app/models/user';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements AfterViewInit {

  displayedColumns: string[] = ['username', 'email', 'firstName', 'lastName'];
  data: UserProfileDTO[] = [];

  resultsLength = 0;
  isLoadingResults = true;


  constructor(private userService: UserService) { }

  ngAfterViewInit() {
    this.userService.getAllUsers().subscribe(result => {
      this.isLoadingResults = false;
      this.data = result;
      this.resultsLength = this.data.length;
    });
  }

}
