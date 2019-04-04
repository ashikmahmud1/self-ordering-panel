import { Routes } from '@angular/router';
import { MenuBuilderRoutes } from './builder/builder.routing';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { OutletRouteComponent } from './outlet-route/outlet-route.component';
import { OutletFormComponent } from './outlets/outlet-form/outlet-form.component';
import { OutletListComponent } from './outlets/outlet-list/outlet-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { PosItemComponent } from './pos/pos-item/pos-item.component';
import { PosModifierComponent } from './pos/pos-modifier/pos-modifier.component';
import { PosRoutes } from './pos/pos.route';

export const OutletRoutes: Routes = [
  {
    path: 'outlets',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: OutletListComponent,
      },
      {
        path: 'add/new',
        component: OutletFormComponent,
      },
      {
        path: 'edit/:id',
        component: OutletFormComponent,
      },
    ],
  },
  {
    path: 'dash/:outletid',
    component: OutletRouteComponent,
    children: [
      ...MenuBuilderRoutes,
      {
        path: 'menu',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: MenuListComponent,
          },
          {
            path: 'add/new',
            component: MenuFormComponent,
          },
          {
            path: 'edit/:id',
            component: MenuFormComponent,
          },
        ],
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: UserListComponent,
          },
          {
            path: 'add/new',
            component: UserFormComponent,
          },
        ],
      },
      {
        path: 'pos-item',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: PosItemComponent,
          },

        ],
      },
      {
        path: 'pos-modifier',
        children: [
          {
            path: '',
            pathMatch: 'full',
            component: PosModifierComponent,
          },

        ],
      },
    ],
  },
];
