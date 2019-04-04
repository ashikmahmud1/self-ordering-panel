import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {

  constructor(public auth: AuthService,
    private router: Router,
    public toastr: ToastrService) {
    this.auth.user.subscribe((userData) => {
      if (userData && userData.uid) {
        this.router.navigate(['/dashboard/main']);
      }
    });
  }

  signup(signupForm: any) {
    this.auth.emailSignUp(signupForm.form.value['email'], signupForm.form.value['password'])
      .then(() => this.afterSignIn())
      .catch((error) => this.toastr.error(error.message, 'Error!'));
  }

  private afterSignIn() {
    this.auth.sendEmailVerification();
    this.toastr.success('You are loggedin successfully.', 'Success!');
    this.router.navigate(['/dashboard/main']);
  }
}
