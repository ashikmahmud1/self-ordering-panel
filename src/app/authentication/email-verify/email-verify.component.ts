import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.css'],
})
export class EmailVerifyComponent implements AfterViewInit {

  constructor(public auth: AuthService,
    private router: Router,
    public toastr: ToastrService) { }

  ngAfterViewInit() {
    $(() => {
      $('.preloader').fadeOut();
    });
    this.auth.user.subscribe((userData) => {
      if (!userData) {
        this.router.navigate(['/auth/login']);
      } else {
        this.refreshEmailVerification();
      }
    });
  }

  sendEmailVerification() {
    this.refreshEmailVerification();
    const emailVerifyProm = this.auth.sendEmailVerification();
    if (emailVerifyProm) {
      emailVerifyProm
        .then(() => this.afterSignIn())
        .catch((error: any) => this.toastr.error(error.message, 'Error!'));
    } else {
      this.afterSignIn();
    }
  }

  async refreshEmailVerification() {
    const userVerified = await this.auth.isUserEmailVerified();
    if (userVerified) {
      this.afterSignIn();
    }
  }

  afterSignIn() {
    this.router.navigate(['/dashboard/main']);
  }

}
