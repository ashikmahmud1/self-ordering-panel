import { Routes } from '@angular/router';
import { BrandFormComponent } from './brands/brand-form/brand-form.component';
import { AdBannerFormComponent } from './ad-banner/ad-banner-form/ad-banner-form.component';
import { AdBannerListComponent } from './ad-banner/ad-banner-list/ad-banner-list.component';
import { ReportsListComponent } from './reports/reports-list/reports-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';

export const BrandRoutes: Routes = [
  {
    path: 'brands',
    children: [
      {
        path: 'setting',
        component: BrandFormComponent,
      }],
  },
  {
    path: 'ad-banner',

    children: [
      {
        path: 'list',
        component: AdBannerListComponent,
      },
      {
        path: 'add/new',
        component: AdBannerFormComponent,
      },
      {
        path: 'edit/:id',
        component: AdBannerFormComponent,
      }],
  },
  {
    path: 'users',

    children: [
      {
        path: 'list',
        component: UsersListComponent,
      }],
  },
  {
    path: 'reports',

    children: [
      {
        path: 'list',
        component: ReportsListComponent,
      }],
  },
];
