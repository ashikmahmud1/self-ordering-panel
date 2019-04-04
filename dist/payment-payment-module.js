(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./src/app/payment/payment-form/payment-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/payment/payment-form/payment-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment/payment-form/payment-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/payment/payment-form/payment-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row page-titles text-center\">\n  <div class=\"col-12\">\n    <h1 class=\"text-center title\" *ngIf=\"!paymentId\">Add Menu</h1>\n    <h1 class=\"text-center title\" *ngIf=\"paymentId\">Edit Menu</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <form class=\"form-horizontal\" id=\"paymentForm\" #PaymentForm=\"ngForm\" (ngSubmit)=\"addPayment(PaymentForm)\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"gateway\">\n                <h3 class=\"custom-heading\">Gateway</h3>\n                <div class=\"form-group\">\n                  <label for=\"payment-type\">Payment Type</label>\n                  <select [(ngModel)]=\"payment.type\" class=\"form-control\" id=\"payment-type\" name=\"payment-type\">\n                    <option *ngFor=\"let type of paymentType\" [ngValue]=\"type.name\">{{type.name}}</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"salt\">Salt</label>\n                  <input type=\"text\" class=\"form-control\" id=\"salt\" name=\"salt\" required [(ngModel)]=\"payment.config.salt\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"key\">Key</label>\n                  <input type=\"text\" class=\"form-control\" id=\"key\" name=\"key\" required [(ngModel)]=\"payment.config.key\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"username\">Currency</label>\n                  <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" required [(ngModel)]=\"payment.others.currency\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"min-amount\">Minimum Order Amount</label>\n                  <input type=\"number\" class=\"form-control\" id=\"min-amount\" name=\"min-amount\" required [(ngModel)]=\"payment.condition.ordAmnt.min\">\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"max-amount\">Maximum Order Amount</label>\n                  <input type=\"number\" class=\"form-control\" id=\"max-amount\" name=\"max-amount\" required [(ngModel)]=\"payment.condition.ordAmnt.max\">\n                </div>\n              </div>\n              <br>\n              <div class=\"apply-for\">\n                <h3 class=\"custom-heading\">Apply For</h3>\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" [(ngModel)]=\"payment.condition.applyType.isDelivery\" (change)=\"payment.condition.applyType.isDelivery != payment.condition.applyType.isDelivery\"   name=\"enable-delivery\" class=\"form-check-input\" id=\"enable-delivery\">\n                  <label class=\"form-check-label\" for=\"enable-delivery\">Enable Delivery</label>\n                </div>\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" [(ngModel)]=\"payment.condition.applyType.isPickup\" (change)=\"payment.condition.applyType.isPickup != payment.condition.applyType.isPickup\"  name=\"enable-pick-up\" class=\"form-check-input\" id=\"enable-pick-up\">\n                  <label class=\"form-check-label\" for=\"enable-pick-up\">Enable PickUp</label>\n                </div>\n                <div class=\"form-check\">\n                  <input type=\"checkbox\" [(ngModel)]=\"payment.condition.applyType.isTableRes\" (change)=\"payment.condition.applyType.isTableRes != payment.condition.applyType.isTableRes\" name=\"table-reservation\" class=\"form-check-input\" id=\"table-reservation\">\n                  <label class=\"form-check-label\" for=\"table-reservation\">Table Reservation</label>\n                </div>\n              </div>\n              <br>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"paymentId\">Update</button>\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"!paymentId\">Submit</button>\n        <button type=\"button\" class=\"btn btn-lg btn-inverse waves-effect waves-light\" [routerLink]=\"['../..']\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/payment/payment-form/payment-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/payment/payment-form/payment-form.component.ts ***!
  \****************************************************************/
/*! exports provided: PaymentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentFormComponent", function() { return PaymentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentFormComponent = /** @class */ (function () {
    function PaymentFormComponent(fireDB, toastr, route, router) {
        this.fireDB = fireDB;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.paymentType = [
            { id: 1, name: "Paypal" },
            { id: 2, name: "Stripe" },
            { id: 3, name: "Cash" }
        ];
        this.payment = {
            condition: {
                applyType: {
                    isDelivery: false,
                    isPickup: false,
                    isTableRes: false
                },
                ordAmnt: {
                    min: 0,
                    max: 0
                }
            },
            type: '',
            config: {
                id: '',
                key: '',
                salt: ''
            },
            others: {
                currency: ''
            }
        };
    }
    PaymentFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentId = this.route.snapshot.paramMap.get('id');
        if (this.paymentId) {
            this.fireDB.doc$("payment/" + this.paymentId).subscribe(function (paymentData) {
                _this.payment = paymentData;
            });
        }
    };
    PaymentFormComponent.prototype.addPayment = function (paymentForm) {
        //validate the payment form
        //check already the payment method exist or not.
        if (this.paymentId) {
            //update the payment
            this.fireDB.set("payment/" + this.paymentId, this.payment);
            this.toastr.success('Payment Updated', 'Success!');
        }
        else {
            //add a new payment
            this.fireDB.add("payment", this.payment);
            this.toastr.success('Payment Added', 'Success!');
        }
        this.router.navigate(['../..'], { relativeTo: this.route });
    };
    PaymentFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-form',
            template: __webpack_require__(/*! ./payment-form.component.html */ "./src/app/payment/payment-form/payment-form.component.html"),
            styles: [__webpack_require__(/*! ./payment-form.component.css */ "./src/app/payment/payment-form/payment-form.component.css")]
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PaymentFormComponent);
    return PaymentFormComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment-list/payment-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/payment/payment-list/payment-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/payment/payment-list/payment-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/payment/payment-list/payment-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-2\"></div>\n  <div class=\"col-lg-8\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"text-center\">\n          <button class=\"btn btn-success\" type=\"button\" [routerLink]=\"['add/new']\">\n            <i class=\"fa fa-plus\"></i> &nbsp; Add Payment</button>\n        </div>\n        <br>\n        <div>\n          <table class=\"table table-bordered\">\n            <thead>\n            <tr>\n              <th>Payment Type</th>\n              <th>Actions</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let payment of paymentList | async\">\n              <td>{{ payment.type }}</td>\n              <td class=\"actionList\">\n                <button class=\"btn btn-sm btn-info\" type=\"button\" [routerLink]=\"['edit', payment.id]\">\n                  <i class=\"fa fa-pencil\"></i>\n                </button>\n                <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"deleteMenu($event, payment.id)\">\n                  <i class=\"fa fa-trash\"></i>\n                </button>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/payment/payment-list/payment-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/payment/payment-list/payment-list.component.ts ***!
  \****************************************************************/
/*! exports provided: PaymentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentListComponent", function() { return PaymentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/firestore.service */ "./src/app/core/firestore.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentListComponent = /** @class */ (function () {
    function PaymentListComponent(fireDB) {
        this.fireDB = fireDB;
    }
    PaymentListComponent.prototype.ngOnInit = function () {
        this.paymentList = this.fireDB.colWithIds$("payment");
    };
    PaymentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment-list',
            template: __webpack_require__(/*! ./payment-list.component.html */ "./src/app/payment/payment-list/payment-list.component.html"),
            styles: [__webpack_require__(/*! ./payment-list.component.css */ "./src/app/payment/payment-list/payment-list.component.css")]
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_1__["FirestoreService"]])
    ], PaymentListComponent);
    return PaymentListComponent;
}());



/***/ }),

/***/ "./src/app/payment/payment-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function() { return PaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-form/payment-form.component */ "./src/app/payment/payment-form/payment-form.component.ts");
/* harmony import */ var _payment_list_payment_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-list/payment-list.component */ "./src/app/payment/payment-list/payment-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _payment_list_payment_list_component__WEBPACK_IMPORTED_MODULE_3__["PaymentListComponent"] },
    { path: 'add/new', component: _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_2__["PaymentFormComponent"] },
    { path: 'edit/:id', component: _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_2__["PaymentFormComponent"] }
];
var PaymentRoutingModule = /** @class */ (function () {
    function PaymentRoutingModule() {
    }
    PaymentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PaymentRoutingModule);
    return PaymentRoutingModule;
}());



/***/ }),

/***/ "./src/app/payment/payment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/payment/payment-routing.module.ts");
/* harmony import */ var _payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-form/payment-form.component */ "./src/app/payment/payment-form/payment-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/shared.module */ "./src/app/core/shared.module.ts");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _payment_list_payment_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./payment-list/payment-list.component */ "./src/app/payment/payment-list/payment-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PaymentModule = /** @class */ (function () {
    function PaymentModule() {
    }
    PaymentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _core_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["PaymentRoutingModule"],
            ],
            declarations: [_payment_form_payment_form_component__WEBPACK_IMPORTED_MODULE_3__["PaymentFormComponent"], _payment_list_payment_list_component__WEBPACK_IMPORTED_MODULE_9__["PaymentListComponent"]]
        })
    ], PaymentModule);
    return PaymentModule;
}());



/***/ })

}]);
//# sourceMappingURL=payment-payment-module.js.map