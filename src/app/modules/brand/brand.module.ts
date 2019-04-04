import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../core/shared.module';
import { BrandRoutes } from './brand.routing';
import { BrandFormComponent } from './brands/brand-form/brand-form.component';
import { AdBannerFormComponent } from './ad-banner/ad-banner-form/ad-banner-form.component';
import { AdBannerListComponent } from './ad-banner/ad-banner-list/ad-banner-list.component';
import { ReportsListComponent } from './reports/reports-list/reports-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';

@NgModule({
  imports: [
    FormsModule,
    QuillModule,
    CommonModule,
    SharedModule,
    NgSelectModule,
    NgbModule,
    RouterModule.forChild(BrandRoutes),
  ],
  declarations: [
    BrandFormComponent,
    AdBannerFormComponent,
    AdBannerListComponent,
    ReportsListComponent,
    UsersListComponent,
  ],
  providers: [],
})
export class BrandModule { }
