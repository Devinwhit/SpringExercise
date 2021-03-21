import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = 0;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'About Me',
        link: './aboutme',
        index: 0
      },
      {
        label: 'Education',
        link: './education',
        index: 1
      }, {
        label: 'Skills',
        link: './skills',
        index: 2
      }, {
        label: 'Experience',
        link: './work-experience',
        index: 3
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
