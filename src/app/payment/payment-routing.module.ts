import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentFormComponent} from "./payment-form/payment-form.component";
import {PaymentListComponent} from "./payment-list/payment-list.component";

const routes: Routes = [
  {path:'', component:PaymentListComponent},
  {path:'add/new',component:PaymentFormComponent},
  {path:'edit/:id',component:PaymentFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
