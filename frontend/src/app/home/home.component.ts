import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Site is currently being developed. Updates to pipeline 4.4.2020 - additional updates with successful pipeline!',
    image: 'assets/images/Okemo.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
