import { Routes } from '@angular/router';
import { AdminGuard } from '../../../core/guard/admin.guard';
import { PosItemComponent } from './pos-item/pos-item.component';
import { PosModifierComponent } from './pos-modifier/pos-modifier.component';

export const PosRoutes: Routes = [
  {
    path: 'pos/pos-item',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PosItemComponent,
      },
    ],
  },
  {
    path: 'pos/pos-modifier',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PosModifierComponent,
      },
    ],
  },
];
