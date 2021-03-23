import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  picture = {
    me_and_amanda: "assets/images/amanda_and_me.jpg",
    bread: "assets/images/bread.jpg",
    pizza: "assets/images/pizza.jpg",
    cat: "assets/images/cat.jpg"

  }

  constructor() { }

  ngOnInit() {
  }

}
