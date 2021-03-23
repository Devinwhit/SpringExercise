import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  image = 'assets/images/Site Diagram.jpg';
  new_image = 'assets/images/Current_network.jpg';
  constructor() { }

  ngOnInit() {
  }

}
