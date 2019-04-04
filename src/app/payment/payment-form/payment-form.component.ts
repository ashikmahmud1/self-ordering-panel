import { Component, OnInit } from '@angular/core';
import {PaymentModel} from "../payment.model";
import {NgForm} from "@angular/forms";
import {FirestoreService} from "../../core/firestore.service";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {

  paymentId:any;
  paymentType = [
    {id:1, name:"Paypal"},
    {id:2, name:"Stripe"},
    {id:3, name:"Cash"}
  ];
  payment:PaymentModel = {
    condition: {
      applyType: {
        isDelivery: false,
        isPickup: false,
        isTableRes: false
      },
      ordAmnt:{
        min:0,
        max:0
      }
    },
    type:'',
    config:{
      id:'',
      key:'',
      salt:''
    },
    others:{
      currency:''
    }
  };
  constructor(public fireDB: FirestoreService,
              public toastr: ToastrService,
              public route:ActivatedRoute,
              public router:Router) { }

  ngOnInit() {
    this.paymentId = this.route.snapshot.paramMap.get('id');
    if (this.paymentId) {
      this.fireDB.doc$(`payment/${this.paymentId}`).subscribe((paymentData: PaymentModel) => {
        this.payment = paymentData;
      });
    }
  }
  addPayment(paymentForm:NgForm) {

    //validate the payment form

    //check already the payment method exist or not.
    if (this.paymentId){
      //update the payment
      this.fireDB.set(`payment/${this.paymentId}`, this.payment);
      this.toastr.success('Payment Updated', 'Success!');
    }
    else {
      //add a new payment
      this.fireDB.add(`payment`, this.payment);
      this.toastr.success('Payment Added', 'Success!');
    }
    this.router.navigate(['../..'], { relativeTo: this.route })

  }

}
