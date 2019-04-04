(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-brand-brand-module"],{

/***/ "./src/app/modules/brand/ad-banner/ad-banner-form/ad-banner-form.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/brand/ad-banner/ad-banner-form/ad-banner-form.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/brand/ad-banner/ad-banner-form/ad-banner-form.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/brand/ad-banner/ad-banner-form/ad-banner-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h1 class=\"text-center title\" *ngIf=\"!adBannerID\">Add Ad Banner</h1>\n    <h1 class=\"text-center title\" *ngIf=\"adBannerID\">Edit Ad Banner</h1>\n    <form class=\"form-horizontal\" id=\"adBannerForm\" #AdBanner=\"ngForm\" (ngSubmit)=\"addAdBannerForm(AdBanner)\">\n      <div class=\"row\">\n        <div class=\"col-sm-4\"></div>\n        <div class=\"col-sm-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n\n\n                <input type=\"file\" (change)=\"uploadFile($event, 'image')\" accept=\".png,.jpg\" />\n                <input type=\"hidden\" name=\"image\" [ngModel]=\"adBanner?.image\">\n                <br>\n                <br>\n                <span class=\"help-block\">\n                  <small> Maximum File Size : 5mb. Supported file formats : .png & .jpg </small>\n                </span>\n                <div *ngIf=\"adBanner?.image\">\n                  <img [src]=\"adBanner?.image\" class=\"adBanner-img-big-icon\">\n                  <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteFile('image')\">Delete</button>\n                </div>\n\n              </div>\n              <div class=\"form-group\">\n                <label>Title\n                  <span>*</span>\n                </label>\n                <input class=\"form-control\" type=\"text\" name=\"title\" required [ngModel]=\"adBanner?.title\" #title=\"ngModel\">\n                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"title.errors.required\">Title is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>URL</label>\n                <input class=\"form-control\" pattern=\"^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$\"\n                  type=\"text\" name=\"url\" [ngModel]=\"adBanner?.url\" #url=\"ngModel\">\n                <div *ngIf=\"url.errors && (url.dirty || url.touched)\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!url.errors.pattern\">\n                    Enter a valid URL!\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Sort Weight\n                </label>\n                <input class=\"form-control\" type=\"number\" name=\"sort\" [ngModel]=\"adBanner?.sort\" #sort=\"ngModel\">\n                <span class=\"help-block\">\n                  <small> Enter higher value to list this item at the top of the category. (Ex. 100) </small>\n                </span>\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-sm-4\"></div>\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"adBannerID\">Update</button>\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"!adBannerID\">Submit</button>\n        <button type=\"button\" class=\"btn btn-lg btn-inverse waves-effect waves-light\" [routerLink]=\"['/brand/ad-banner/list']\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/brand/ad-banner/ad-banner-form/ad-banner-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/brand/ad-banner/ad-banner-form/ad-banner-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdBannerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdBannerFormComponent", function() { return AdBannerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../firestore.path */ "./src/app/modules/firestore.path.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdBannerFormComponent = /** @class */ (function () {
    function AdBannerFormComponent(fireDB, router, route, toastr) {
        this.fireDB = fireDB;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
    }
    AdBannerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adBannerID = this.route.snapshot.paramMap.get('id');
        if (this.adBannerID) {
            this.fireDB.doc$(_firestore_path__WEBPACK_IMPORTED_MODULE_4__["AdBannerFirePath"] + "/" + this.adBannerID).subscribe(function (adBannerData) {
                _this.adBanner = adBannerData;
            });
        }
        else {
            this.adBanner = {};
        }
    };
    AdBannerFormComponent.prototype.uploadFile = function (event, type) {
        var _this = this;
        if (event && type) {
            if (type === 'image') {
                if (this.adBannerID) {
                    this.toastr.info('File uploading..', 'Wait!');
                    var uploadTask = this.fireDB.uploadFileToStorage("brand/adBanner/" + this.adBannerID + "/original.jpg", event.target.files[0]);
                    uploadTask.then().then(function (snapshot) {
                        snapshot.ref.getDownloadURL().then(function (imageUrl) {
                            if (_this.adBanner) {
                                _this.adBanner.image = imageUrl;
                            }
                            _this.toastr.success('File uploaded', 'Success!');
                        });
                    });
                }
                else {
                    this.bigIconFile = event.target.files[0];
                }
            }
        }
    };
    AdBannerFormComponent.prototype.deleteFile = function (type) {
        if (type === 'image') {
            if (this.adBannerID) {
                this.fireDB.deleteFileStorage("brand/adBanner/" + this.adBannerID + "/original.jpg");
                if (this.adBanner && this.adBanner.image) {
                    this.adBanner.image = '';
                }
            }
            else {
                this.bigIconFile = null;
            }
        }
    };
    AdBannerFormComponent.prototype.addAdBannerForm = function (adBannerForm) {
        var _this = this;
        if (!adBannerForm.invalid) {
            if (this.adBannerID) {
                this.fireDB.set(_firestore_path__WEBPACK_IMPORTED_MODULE_4__["AdBannerFirePath"] + "/" + this.adBannerID, adBannerForm.form.value);
                this.toastr.success('Ad Banner Updated', 'Success!');
            }
            else {
                this.fireDB.add(_firestore_path__WEBPACK_IMPORTED_MODULE_4__["AdBannerFirePath"], adBannerForm.form.value)
                    .then(function (documentRef) {
                    var adBannerID = documentRef.id;
                    if (_this.bigIconFile) {
                        var uploadTask = _this.fireDB.uploadFileToStorage("brand/adBanner/" + adBannerID + "/original.jpg", _this.bigIconFile);
                        _this.toastr.info('File uploading..', 'Wait!');
                        uploadTask.then().then(function (snapshot) {
                            snapshot.ref.getDownloadURL().then(function (imageUrl) {
                                documentRef.update({
                                    image: imageUrl,
                                });
                            });
                        });
                    }
                });
                this.toastr.success('Ad Banner Created', 'Success!');
            }
            this.router.navigate(['/brand/ad-banner/list']);
        }
        else {
            this.fireDB.validateAllFormFields(adBannerForm.form);
            this.toastr.error('Fill up the form correctly!', 'Error!');
        }
    };
    AdBannerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'brand-ad-banner-form',
            template: __webpack_require__(/*! ./ad-banner-form.component.html */ "./src/app/modules/brand/ad-banner/ad-banner-form/ad-banner-form.component.html"),
            styles: [__webpack_require__(/*! ./ad-banner-form.component.css */ "./src/app/modules/brand/ad-banner/ad-banner-form/ad-banner-form.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], AdBannerFormComponent);
    return AdBannerFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/brand/ad-banner/ad-banner-list/ad-banner-list.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/brand/ad-banner/ad-banner-list/ad-banner-list.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/brand/ad-banner/ad-banner-list/ad-banner-list.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/brand/ad-banner/ad-banner-list/ad-banner-list.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-2\"></div>\n  <div class=\"col-lg-8\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"text-center\">\n          <button class=\"btn btn-success\" type=\"button\" [routerLink]=\"['/brand/ad-banner/add/new']\">\n            <i class=\"fa fa-plus\"></i> &nbsp; Ad Banner</button>\n        </div>\n        <br>\n        <div>\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>Ad Banner Title</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let adBanner of adBannerList | async\">\n                <td>{{ adBanner.title }}</td>\n                <td class=\"actionList\">\n                  <button class=\"btn btn-sm btn-info\" type=\"button\" [routerLink]=\"['/brand/ad-banner', 'edit', adBanner.id]\">\n                    <i class=\"fa fa-pencil\"></i>\n                  </button>\n                  <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"deleteAdBanner($event, adBanner.id)\">\n                    <i class=\"fa fa-trash\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/brand/ad-banner/ad-banner-list/ad-banner-list.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/brand/ad-banner/ad-banner-list/ad-banner-list.component.ts ***!
  \************************************************************************************/
/*! exports provided: AdBannerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdBannerListComponent", function() { return AdBannerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../firestore.path */ "./src/app/modules/firestore.path.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdBannerListComponent = /** @class */ (function () {
    function AdBannerListComponent(fireDB, toastr) {
        this.fireDB = fireDB;
        this.toastr = toastr;
    }
    AdBannerListComponent.prototype.ngOnInit = function () {
        this.adBannerList = this.fireDB.colWithIds$(_firestore_path__WEBPACK_IMPORTED_MODULE_3__["AdBannerFirePath"]);
    };
    AdBannerListComponent.prototype.deleteAdBanner = function (event, adBannerID) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.fireDB.delete(_firestore_path__WEBPACK_IMPORTED_MODULE_3__["AdBannerFirePath"] + "/" + adBannerID);
            this.toastr.success('Ad Banner Deleted', 'Success!');
        }
        return;
    };
    AdBannerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'brand-ad-banner-list',
            template: __webpack_require__(/*! ./ad-banner-list.component.html */ "./src/app/modules/brand/ad-banner/ad-banner-list/ad-banner-list.component.html"),
            styles: [__webpack_require__(/*! ./ad-banner-list.component.css */ "./src/app/modules/brand/ad-banner/ad-banner-list/ad-banner-list.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], AdBannerListComponent);
    return AdBannerListComponent;
}());



/***/ }),

/***/ "./src/app/modules/brand/brand.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/brand/brand.module.ts ***!
  \***********************************************/
/*! exports provided: BrandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandModule", function() { return BrandModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared.module */ "./src/app/core/shared.module.ts");
/* harmony import */ var _brand_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./brand.routing */ "./src/app/modules/brand/brand.routing.ts");
/* harmony import */ var _brands_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./brands/brand-form/brand-form.component */ "./src/app/modules/brand/brands/brand-form/brand-form.component.ts");
/* harmony import */ var _ad_banner_ad_banner_form_ad_banner_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ad-banner/ad-banner-form/ad-banner-form.component */ "./src/app/modules/brand/ad-banner/ad-banner-form/ad-banner-form.component.ts");
/* harmony import */ var _ad_banner_ad_banner_list_ad_banner_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ad-banner/ad-banner-list/ad-banner-list.component */ "./src/app/modules/brand/ad-banner/ad-banner-list/ad-banner-list.component.ts");
/* harmony import */ var _reports_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports/reports-list/reports-list.component */ "./src/app/modules/brand/reports/reports-list/reports-list.component.ts");
/* harmony import */ var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users-list/users-list.component */ "./src/app/modules/brand/users/users-list/users-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var BrandModule = /** @class */ (function () {
    function BrandModule() {
    }
    BrandModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_4__["QuillModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _core_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_brand_routing__WEBPACK_IMPORTED_MODULE_8__["BrandRoutes"]),
            ],
            declarations: [
                _brands_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_9__["BrandFormComponent"],
                _ad_banner_ad_banner_form_ad_banner_form_component__WEBPACK_IMPORTED_MODULE_10__["AdBannerFormComponent"],
                _ad_banner_ad_banner_list_ad_banner_list_component__WEBPACK_IMPORTED_MODULE_11__["AdBannerListComponent"],
                _reports_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_12__["ReportsListComponent"],
                _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__["UsersListComponent"],
            ],
            providers: [],
        })
    ], BrandModule);
    return BrandModule;
}());



/***/ }),

/***/ "./src/app/modules/brand/brand.routing.ts":
/*!************************************************!*\
  !*** ./src/app/modules/brand/brand.routing.ts ***!
  \************************************************/
/*! exports provided: BrandRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandRoutes", function() { return BrandRoutes; });
/* harmony import */ var _brands_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brands/brand-form/brand-form.component */ "./src/app/modules/brand/brands/brand-form/brand-form.component.ts");
/* harmony import */ var _ad_banner_ad_banner_form_ad_banner_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ad-banner/ad-banner-form/ad-banner-form.component */ "./src/app/modules/brand/ad-banner/ad-banner-form/ad-banner-form.component.ts");
/* harmony import */ var _ad_banner_ad_banner_list_ad_banner_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ad-banner/ad-banner-list/ad-banner-list.component */ "./src/app/modules/brand/ad-banner/ad-banner-list/ad-banner-list.component.ts");
/* harmony import */ var _reports_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports/reports-list/reports-list.component */ "./src/app/modules/brand/reports/reports-list/reports-list.component.ts");
/* harmony import */ var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users-list/users-list.component */ "./src/app/modules/brand/users/users-list/users-list.component.ts");





var BrandRoutes = [
    {
        path: 'brands',
        children: [
            {
                path: 'setting',
                component: _brands_brand_form_brand_form_component__WEBPACK_IMPORTED_MODULE_0__["BrandFormComponent"],
            }
        ],
    },
    {
        path: 'ad-banner',
        children: [
            {
                path: 'list',
                component: _ad_banner_ad_banner_list_ad_banner_list_component__WEBPACK_IMPORTED_MODULE_2__["AdBannerListComponent"],
            },
            {
                path: 'add/new',
                component: _ad_banner_ad_banner_form_ad_banner_form_component__WEBPACK_IMPORTED_MODULE_1__["AdBannerFormComponent"],
            },
            {
                path: 'edit/:id',
                component: _ad_banner_ad_banner_form_ad_banner_form_component__WEBPACK_IMPORTED_MODULE_1__["AdBannerFormComponent"],
            }
        ],
    },
    {
        path: 'users',
        children: [
            {
                path: 'list',
                component: _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"],
            }
        ],
    },
    {
        path: 'reports',
        children: [
            {
                path: 'list',
                component: _reports_reports_list_reports_list_component__WEBPACK_IMPORTED_MODULE_3__["ReportsListComponent"],
            }
        ],
    },
];


/***/ }),

/***/ "./src/app/modules/brand/brands/brand-form/brand-form.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/brand/brands/brand-form/brand-form.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand-img-big-icon {\n    max-width: 125px;\n    max-height: 125px;\n  }\n  "

/***/ }),

/***/ "./src/app/modules/brand/brands/brand-form/brand-form.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/brand/brands/brand-form/brand-form.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row page-titles text-center\">\n  <div class=\"col-12\">\n    <h1 class=\"text-dark m-b-0\">Brand</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <form class=\"form-horizontal\" id=\"brandForm\" #BrandForm=\"ngForm\" (ngSubmit)=\"addBrand(BrandForm)\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <label>Brand Name\n                  <span>*</span>\n                </label>\n                <input class=\"form-control\" type=\"text\" name=\"name\" required [ngModel]=\"brand?.name\" #name=\"ngModel\">\n                <span class=\"help-block\">\n                  <small>Example : UberEats</small>\n                </span>\n                <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"name.errors.required\">Brand Name is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Email\n                  <span>*</span>\n                </label>\n                <input class=\"form-control\" type=\"email\" name=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" [ngModel]=\"brand?.email\"\n                  #email=\"ngModel\">\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"email.errors.required\">E-mail is required.</div>\n                  <div *ngIf=\"email.errors.pattern && email.value != ''\">Email should be in proper format.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Website</label>\n                <input class=\"form-control\" pattern=\"^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$\"\n                  type=\"text\" name=\"website\" [ngModel]=\"brand?.website\" #website=\"ngModel\">\n                <div *ngIf=\"website.errors && (website.dirty || website.touched)\" class=\"alert alert-danger\">\n                  <div [hidden]=\"!website.errors.pattern\">\n                    Enter a valid URL!\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Address\n                </label>\n                <input class=\"form-control\" type=\"text\" name=\"address\" [ngModel]=\"brand?.address\" #address=\"ngModel\">\n              </div>\n              <div class=\"form-group\">\n                <label>Country\n                </label>\n                <input class=\"form-control\" type=\"text\" name=\"country\" [ngModel]=\"brand?.country\" #country=\"ngModel\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/brand/brands/brand-form/brand-form.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/brand/brands/brand-form/brand-form.component.ts ***!
  \*************************************************************************/
/*! exports provided: BrandFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandFormComponent", function() { return BrandFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../firestore.path */ "./src/app/modules/firestore.path.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BrandFormComponent = /** @class */ (function () {
    function BrandFormComponent(fireDB, afs, auth, router, route, toastr) {
        this.fireDB = fireDB;
        this.afs = afs;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.user = this.auth.userDetail;
    }
    BrandFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fireDB.doc$("" + _firestore_path__WEBPACK_IMPORTED_MODULE_6__["BrandFirePath"]).subscribe(function (brandData) {
            _this.brand = brandData || {};
        });
    };
    BrandFormComponent.prototype.compareByOptionCode = function (firstOption, secondOption) {
        return firstOption && secondOption && firstOption.name === secondOption.name;
    };
    BrandFormComponent.prototype.addBrand = function (brandForm) {
        if (!brandForm.invalid) {
            this.fireDB.set(_firestore_path__WEBPACK_IMPORTED_MODULE_6__["BrandFirePath"], brandForm.form.value);
            this.toastr.success('Brand Updated', 'Success!');
            if (this.user && !this.user.brandSetup) {
                this.afs.doc("admin/" + this.user.uid).update({
                    brandSetup: true,
                });
                this.router.navigate(['/brand/global-setting/setting']);
            }
        }
        else {
            this.fireDB.validateAllFormFields(brandForm.form);
            this.toastr.error('Fill up the form correctly!', 'Error!');
        }
    };
    BrandFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'brand-brand-form',
            template: __webpack_require__(/*! ./brand-form.component.html */ "./src/app/modules/brand/brands/brand-form/brand-form.component.html"),
            styles: [__webpack_require__(/*! ./brand-form.component.css */ "./src/app/modules/brand/brands/brand-form/brand-form.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], BrandFormComponent);
    return BrandFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/brand/reports/reports-list/reports-list.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/brand/reports/reports-list/reports-list.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 992px) {\n  .modal-dialog {\n    max-width: 50%;\n  }\n}\n"

/***/ }),

/***/ "./src/app/modules/brand/reports/reports-list/reports-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/brand/reports/reports-list/reports-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Order ID: {{reports.order_id}}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title text-center\">Items</h4>\r\n        <hr>\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Quantity</th>\r\n              <th>Price</th>\r\n\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let cartItem of reports?.carts\">\r\n              <th>{{cartItem?.name}}</th>\r\n              <th>{{cartItem?.quantity}}</th>\r\n              <th>{{cartItem?.price}}</th>\r\n            </tr>\r\n            <tr>\r\n              <th></th>\r\n              <th>Total</th>\r\n              <th>{{reports.total?.amount}}</th>\r\n            </tr>\r\n            <tr>\r\n              <th></th>\r\n              <th>Discount Amount</th>\r\n              <th>{{reports.total?.discount_amount}}</th>\r\n            </tr>\r\n            <tr>\r\n              <th></th>\r\n              <th>Final Amount</th>\r\n              <th>{{reports.total?.final_amount}}</th>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title text-center\">Delivery Address</h4>\r\n        <hr>\r\n        <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Order Type :</th>\r\n              <th>{{reports.order_type}}</th>\r\n            </tr>\r\n            <tr>\r\n              <th>Payment :</th>\r\n              <th>{{reports.payment}}</th>\r\n            </tr>\r\n            <tr>\r\n              <th>Address Name :</th>\r\n              <th>{{reports.address?.name}}</th>\r\n            </tr>\r\n            <tr>\r\n              <th>Locality :</th>\r\n              <th>{{reports.address?.locality}}</th>\r\n            </tr>\r\n            <tr>\r\n              <th>Phone :</th>\r\n              <th>+{{reports.uid}}</th>\r\n            </tr>\r\n          </thead>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n<div class=\"row\">\r\n  <!-- <div class=\"col-lg-2\"></div> -->\r\n  <div class=\"col-lg-12\">\r\n    <h1 class=\"text-center\">Reports</h1>\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <br>\r\n        <div>\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th>Customer Name</th>\r\n                <th>Outlet</th>\r\n                <th>Payment</th>\r\n                <th>Type</th>\r\n                <th>Status</th>\r\n                <th>Order Time</th>\r\n                <th>Grand Total</th>\r\n                <th>Mobile No</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let reports of reportsList | async\">\r\n                <td>{{ reports.other.cusName }}</td>\r\n                <td>{{ getOutlet(reports.outletId) }}</td>\r\n                <td>{{ reports.payment }}</td>\r\n                <td>{{ reports.order_type }}</td>\r\n                <td>{{ reports.status }}</td>\r\n                <td>{{ reports.timeslot.seconds * 1000 | date }} - {{ reports.timeslot.seconds * 1000 | date:'shortTime' }}</td>\r\n                <td>{{ reports.total.final_amount }}</td>\r\n                <td>+{{ reports.uid }}</td>\r\n                <td class=\"text-center\">\r\n                  <button class=\"btn btn-primary\" (click)=\"viewDetails(content, reports)\">View Details</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/modules/brand/reports/reports-list/reports-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/brand/reports/reports-list/reports-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReportsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsListComponent", function() { return ReportsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../firestore.path */ "./src/app/modules/firestore.path.ts");
/* harmony import */ var _reports_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reports.model */ "./src/app/modules/brand/reports/reports.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReportsListComponent = /** @class */ (function () {
    function ReportsListComponent(fireDB, toastr, modalService) {
        this.fireDB = fireDB;
        this.toastr = toastr;
        this.modalService = modalService;
    }
    ReportsListComponent.prototype.ngOnInit = function () {
        this.reportsList = this.fireDB.colWithIds$(_firestore_path__WEBPACK_IMPORTED_MODULE_5__["ReportsFirePath"]);
        this.reports = _reports_model__WEBPACK_IMPORTED_MODULE_6__["defaultReports"];
    };
    ReportsListComponent.prototype.viewDetails = function (content, reports) {
        this.reports = reports;
        if (reports.carts) {
            this.reports.carts = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["toArray"])(reports.carts);
        }
        this.modalService.open(content, { size: 'lg' });
    };
    ReportsListComponent.prototype.getOutlet = function (outletID) {
        var _this = this;
        this.fireDB.doc$(_firestore_path__WEBPACK_IMPORTED_MODULE_5__["OutletFirePath"] + "/" + outletID).subscribe(function (outletData) {
            _this.outletName = outletData;
        });
        if (this.outletName) {
            return this.outletName.name;
        }
        else {
            return '';
        }
    };
    ReportsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'brand-reports-list',
            template: __webpack_require__(/*! ./reports-list.component.html */ "./src/app/modules/brand/reports/reports-list/reports-list.component.html"),
            styles: [__webpack_require__(/*! ./reports-list.component.css */ "./src/app/modules/brand/reports/reports-list/reports-list.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], ReportsListComponent);
    return ReportsListComponent;
}());



/***/ }),

/***/ "./src/app/modules/brand/reports/reports.model.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/brand/reports/reports.model.ts ***!
  \********************************************************/
/*! exports provided: defaultReports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultReports", function() { return defaultReports; });
var defaultReports = {
    address: {
        coords: {
            lat: 0,
            lon: 0,
        },
        locality: '',
        name: '',
        text: '',
    },
    created_at: '',
    driver: {
        condition: {
            isAllOutlet: false,
            outlets: '',
            driverID: '',
            email: '',
            id: '',
            name: '',
        },
    },
    order_id: 0,
    order_type: '',
    other: {
        cusEmail: '',
        cusName: '',
    },
    outletId: '',
    payment: '',
    status: '',
    timeslot: '',
    total: {
        amount: 0,
        discount_amount: 0,
        final_amount: 0,
    },
    uid: '',
};


/***/ }),

/***/ "./src/app/modules/brand/users/users-list/users-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/brand/users/users-list/users-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/brand/users/users-list/users-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/brand/users/users-list/users-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-2\"></div>\n  <div class=\"col-lg-8\">\n    <h1 class=\"text-center\">Users</h1>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <br>\n        <div>\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>User Name</th>\n                <th>Email</th>\n                <th>Mobile Number</th>\n                <th>Created At</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let users of usersList | async\">\n                <td>{{ users.name }}</td>\n                <td>{{ users.email }}</td>\n                <td>{{ users.uid }}</td>\n                <td>{{ users.created_at | date }} - {{ users.created_at | date:'shortTime' }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/brand/users/users-list/users-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/brand/users/users-list/users-list.component.ts ***!
  \************************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../firestore.path */ "./src/app/modules/firestore.path.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(fireDB, toastr) {
        this.fireDB = fireDB;
        this.toastr = toastr;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.usersList = this.fireDB.colWithIds$(_firestore_path__WEBPACK_IMPORTED_MODULE_3__["UsersFirePath"]);
    };
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'brand-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/modules/brand/users/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.css */ "./src/app/modules/brand/users/users-list/users-list.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-brand-brand-module.js.map