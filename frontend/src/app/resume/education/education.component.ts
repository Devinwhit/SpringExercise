import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      let x = 2;
      if (matches) {
        x = 1;
      }
      return [
        { title: 'Udacity', content: 'Won scholarship from Google to earn an Android Developer nano-degree', cols: x, rows: 1 },
        { title: 'UMass Lowell', content: 'Earned second Bachelors, in Science, in 2017', cols: x, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
