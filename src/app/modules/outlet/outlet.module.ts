import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { QuillModule } from 'ngx-quill';
import { SharedModule } from '../../core/shared.module';
import { ModifierFormComponent } from './builder/modifier/modifier-form/modifier-form.component';
import { ModifierListComponent } from './builder/modifier/modifier-list/modifier-list.component';
import { CategoryFormComponent } from './builder/category/category-form/category-form.component';
import { CategoryListComponent } from './builder/category/category-list/category-list.component';
import { MenuBuilderComponent } from './builder/menu-builder/menu-builder.component';
import { MenuItemFormComponent } from './builder/menu-item/menu-item-form/menu-item-form.component';
import { MenuItemListComponent } from './builder/menu-item/menu-item-list/menu-item-list.component';
import { MenuFormComponent } from './menu/menu-form/menu-form.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { OutletRouteComponent } from './outlet-route/outlet-route.component';
import { OutletRoutes } from './outlet.routing';
import { OutletFormComponent } from './outlets/outlet-form/outlet-form.component';
import { OutletListComponent } from './outlets/outlet-list/outlet-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { PosItemComponent } from './pos/pos-item/pos-item.component';
import { PosModifierComponent } from './pos/pos-modifier/pos-modifier.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    NgSelectModule,
    QuillModule,
    NgbModule,
    RouterModule.forChild(OutletRoutes),
  ],
  declarations: [
    OutletFormComponent,
    OutletListComponent,
    OutletRouteComponent,
    MenuBuilderComponent,
    CategoryFormComponent,
    CategoryListComponent,
    MenuItemFormComponent,
    MenuItemListComponent,
    ModifierFormComponent,
    ModifierListComponent,
    MenuListComponent,
    MenuFormComponent,
    UserFormComponent,
    UserListComponent,
    PosItemComponent,
    PosModifierComponent,
  ],
})
export class OutletModule { }
