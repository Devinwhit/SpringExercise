import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetService } from '../services/password/reset.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  constructor(private router: ActivatedRoute, private redirect: Router,
    private reset: ResetService) { }

  token: string;
  ngOnInit() {
    this.token = this.router.snapshot.queryParamMap.get('token');
    if (this.token === null){
      this.redirect.navigate(['/']);
    } else {
      this.reset.confirmToken(this.token).subscribe(result => {
        if (result) {
          console.log('Token is valid, can reset password');
        }
        else {
          console.log('Token is no longer valid, cannot reset password');
        }
      });
    }
  }

}
