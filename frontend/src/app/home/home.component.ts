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
    content: 'Site is always changing, now being hosted on kubernetes.',
    image: 'assets/images/Okemo.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
