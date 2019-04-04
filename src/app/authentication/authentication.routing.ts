import { Routes } from '@angular/router';
import { NotFoundComponent } from './404/not-found.component';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '404',
      component: NotFoundComponent,
    }, {
      path: 'login',
      component: LoginComponent,
    }, {
      path: 'signup',
      component: SignupComponent,
    }, {
      path: 'email-verify',
      component: EmailVerifyComponent,
    }],
  },
];
