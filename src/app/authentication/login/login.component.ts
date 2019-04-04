import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {

  constructor(public auth: AuthService,
    private router: Router,
    public toastr: ToastrService) {
    this.auth.user.subscribe((userData) => {
      if (userData && !userData.brandSetup) {
        this.router.navigate(['/brand/brands/setting']);
      } else if (userData) {
        this.router.navigate(['/dashboard/main']);
      }
    });
  }

  ngAfterViewInit() {
    $(() => {
      $('.preloader').fadeOut();
    });
    $('#to-recover').on('click', () => {
      $('#loginform').slideUp();
      $('#recoverform').fadeIn();
    });
    $('#to-recover-close').on('click', () => {
      $('#recoverform').fadeOut();
      $('#loginform').slideDown();
    });
  }

  login(loginForm: any) {
    this.auth.emailLogin(loginForm.form.value['email'], loginForm.form.value['password'])
      .then(() => this.afterSignIn())
      .catch((error) => this.toastr.error(error.message, 'Error!'));
  }

  resetPassword(passwordForm: any) {
    this.auth.resetPassword(passwordForm.form.value['passEmail'])
      .then(() => {
        $('#to-recover-close').click();
      })
      .catch((error: any) => this.toastr.error(error.message, 'Error!'));
  }

  private afterSignIn() {
    this.toastr.success('You are loggedin successfully.', 'Success!');
    this.router.navigate(['/dashboard/main']);
  }

}
