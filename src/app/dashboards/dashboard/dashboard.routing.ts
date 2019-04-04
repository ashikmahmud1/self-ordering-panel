import { Routes } from '@angular/router';
import { DashboardMainComponent } from './main/main.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'main',
        component: DashboardMainComponent,
      }],
  },
];
