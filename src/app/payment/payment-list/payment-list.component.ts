import { Component, OnInit } from '@angular/core';
import {FirestoreService} from "../../core/firestore.service";
import {Observable} from "rxjs/Observable";
import {PaymentModel} from "../payment.model";

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  paymentList:Observable<PaymentModel[]>;
  constructor(public fireDB:FirestoreService) { }

  ngOnInit() {
    this.paymentList = this.fireDB.colWithIds$(`payment`);
  }

}
