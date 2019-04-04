import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './404/not-found.component';
import { AuthenticationRoutes } from './authentication.routing';
import { EmailVerifyComponent } from './email-verify/email-verify.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
  ],
  declarations: [
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    EmailVerifyComponent,
  ],
})

export class AuthenticationModule { }
