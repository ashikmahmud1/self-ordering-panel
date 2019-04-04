import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../core/shared.module";
import {QuillModule} from "ngx-quill";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgSelectModule} from "@ng-select/ng-select";
import { PaymentListComponent } from './payment-list/payment-list.component';

@NgModule({
  imports: [
    FormsModule,
    QuillModule,
    CommonModule,
    SharedModule,
    NgSelectModule,
    NgbModule,
    PaymentRoutingModule,
  ],
  declarations: [PaymentFormComponent, PaymentListComponent]
})
export class PaymentModule { }
