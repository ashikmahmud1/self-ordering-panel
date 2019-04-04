import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guard/admin.guard';
import { AuthResolver } from './core/auth.resolver';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboards/dashboard/dashboard.module#DashboardModule', resolve: { auth: AuthResolver }, canActivate: [AdminGuard] },
      { path: 'outlet', loadChildren: './modules/outlet/outlet.module#OutletModule', resolve: { auth: AuthResolver }, canActivate: [AdminGuard] },
      { path: 'brand', loadChildren: './modules/brand/brand.module#BrandModule', resolve: { auth: AuthResolver }, canActivate: [AdminGuard] },
      {path:'payment',loadChildren:'./payment/payment.module#PaymentModule',resolve: { auth: AuthResolver }, canActivate: [AdminGuard] }
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './authentication/authentication.module#AuthenticationModule',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/auth/404',
  }];

@NgModule({
  imports: [RouterModule.forRoot(Approutes, { useHash: false })],
  exports: [RouterModule],
  providers: [AuthResolver, AdminGuard],
})
export class AppRoutingModule { }
