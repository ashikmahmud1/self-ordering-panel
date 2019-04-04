import { Routes } from '@angular/router';
import { ModifierFormComponent } from './modifier/modifier-form/modifier-form.component';
import { ModifierListComponent } from './modifier/modifier-list/modifier-list.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { MenuBuilderComponent } from './menu-builder/menu-builder.component';
import { MenuItemFormComponent } from './menu-item/menu-item-form/menu-item-form.component';
import { MenuItemListComponent } from './menu-item/menu-item-list/menu-item-list.component';

export const MenuBuilderRoutes: Routes = [{
  path: 'menu-builder',
  component: MenuBuilderComponent,
},
{
  path: 'category',
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: CategoryListComponent,
    },
    {
      path: 'add/new',
      component: CategoryFormComponent,
    },
    {
      path: 'edit/:id',
      component: CategoryFormComponent,
    },
  ],
},
{
  path: 'modifier',
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: ModifierListComponent,
    },
    {
      path: 'add/new',
      component: ModifierFormComponent,
    },
    {
      path: 'edit/:id',
      component: ModifierFormComponent,
    },
  ],
},
{
  path: 'menu-item',
  children: [
    {
      path: '',
      pathMatch: 'full',
      component: MenuItemListComponent,
    },
    {
      path: 'add/new',
      component: MenuItemFormComponent,
    },
    {
      path: 'edit/:id',
      component: MenuItemFormComponent,
    },
  ],
}];
