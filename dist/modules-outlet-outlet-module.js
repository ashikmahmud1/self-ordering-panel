(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-outlet-outlet-module"],{

/***/ "./src/app/modules/outlet/builder/builder.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/outlet/builder/builder.routing.ts ***!
  \***********************************************************/
/*! exports provided: MenuBuilderRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBuilderRoutes", function() { return MenuBuilderRoutes; });
/* harmony import */ var _modifier_modifier_form_modifier_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modifier/modifier-form/modifier-form.component */ "./src/app/modules/outlet/builder/modifier/modifier-form/modifier-form.component.ts");
/* harmony import */ var _modifier_modifier_list_modifier_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modifier/modifier-list/modifier-list.component */ "./src/app/modules/outlet/builder/modifier/modifier-list/modifier-list.component.ts");
/* harmony import */ var _category_category_form_category_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category/category-form/category-form.component */ "./src/app/modules/outlet/builder/category/category-form/category-form.component.ts");
/* harmony import */ var _category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/category-list/category-list.component */ "./src/app/modules/outlet/builder/category/category-list/category-list.component.ts");
/* harmony import */ var _menu_builder_menu_builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-builder/menu-builder.component */ "./src/app/modules/outlet/builder/menu-builder/menu-builder.component.ts");
/* harmony import */ var _menu_item_menu_item_form_menu_item_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-item/menu-item-form/menu-item-form.component */ "./src/app/modules/outlet/builder/menu-item/menu-item-form/menu-item-form.component.ts");
/* harmony import */ var _menu_item_menu_item_list_menu_item_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-item/menu-item-list/menu-item-list.component */ "./src/app/modules/outlet/builder/menu-item/menu-item-list/menu-item-list.component.ts");







var MenuBuilderRoutes = [{
        path: 'menu-builder',
        component: _menu_builder_menu_builder_component__WEBPACK_IMPORTED_MODULE_4__["MenuBuilderComponent"],
    },
    {
        path: 'category',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoryListComponent"],
            },
            {
                path: 'add/new',
                component: _category_category_form_category_form_component__WEBPACK_IMPORTED_MODULE_2__["CategoryFormComponent"],
            },
            {
                path: 'edit/:id',
                component: _category_category_form_category_form_component__WEBPACK_IMPORTED_MODULE_2__["CategoryFormComponent"],
            },
        ],
    },
    {
        path: 'modifier',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _modifier_modifier_list_modifier_list_component__WEBPACK_IMPORTED_MODULE_1__["ModifierListComponent"],
            },
            {
                path: 'add/new',
                component: _modifier_modifier_form_modifier_form_component__WEBPACK_IMPORTED_MODULE_0__["ModifierFormComponent"],
            },
            {
                path: 'edit/:id',
                component: _modifier_modifier_form_modifier_form_component__WEBPACK_IMPORTED_MODULE_0__["ModifierFormComponent"],
            },
        ],
    },
    {
        path: 'menu-item',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _menu_item_menu_item_list_menu_item_list_component__WEBPACK_IMPORTED_MODULE_6__["MenuItemListComponent"],
            },
            {
                path: 'add/new',
                component: _menu_item_menu_item_form_menu_item_form_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemFormComponent"],
            },
            {
                path: 'edit/:id',
                component: _menu_item_menu_item_form_menu_item_form_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemFormComponent"],
            },
        ],
    }];


/***/ }),

/***/ "./src/app/modules/outlet/builder/category/category-form/category-form.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/category/category-form/category-form.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-img-big-icon {\n    max-width: 125px;\n    max-height: 125px;\n  }\n  "

/***/ }),

/***/ "./src/app/modules/outlet/builder/category/category-form/category-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/category/category-form/category-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h1 class=\"text-center title\" *ngIf=\"!categoryID\">Add Category</h1>\n    <h1 class=\"text-center title\" *ngIf=\"categoryID\">Edit Category</h1>\n    <br>\n    <form class=\"form-horizontal\" id=\"categoryForm\" #CategoryForm=\"ngForm\" (ngSubmit)=\"addCategory(CategoryForm)\">\n      <div class=\"row\">\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-8\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label>Category Name\n                      <span>*</span>\n                    </label>\n                    <input class=\"form-control\" type=\"text\" name=\"name\" required [ngModel]=\"category?.name\" #name=\"ngModel\">\n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                      <div *ngIf=\"name.errors.required\">Category Name is required.</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Category Description\n                    </label>\n                    <input type=\"text\" name=\"desc\" [ngModel]=\"category?.desc\" #desc=\"ngModel\" class=\"form-control\">\n                  </div>\n                </div>\n                <div class=\"col-sm-6\">\n                  <div class=\"form-group\">\n                    <label>Category Image </label>\n                    <br/>\n                    <input type=\"file\" (change)=\"uploadFile($event, 'image')\" accept=\".png,.jpg\" />\n                    <input type=\"hidden\" name=\"image\" [ngModel]=\"category?.image\">\n                    <br>\n                    <br>\n                    <span class=\"help-block\">\n                      <small> Maximum File Size : 5mb. Supported file formats : .png & .jpg </small>\n                    </span>\n                    <div *ngIf=\"category?.image\">\n                      <img [src]=\"category?.image\" class=\"category-img-big-icon\">\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteFile('image')\">Delete</button>\n                    </div>\n\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Sort Weight\n                    </label>\n                    <input class=\"form-control\" type=\"number\" name=\"sort\" [ngModel]=\"category?.sort\" #sort=\"ngModel\">\n                    <span class=\"help-block\">\n                      <small> Enter higher value to list this item at the top of the category. (Ex. 100) </small>\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-2\"></div>\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"categoryID\">Update</button>\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"!categoryID\">Submit</button>\n        <button type=\"button\" class=\"btn btn-lg btn-inverse waves-effect waves-light\" [routerLink]=\"['../../../menu-builder']\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/builder/category/category-form/category-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/category/category-form/category-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFormComponent", function() { return CategoryFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../firestore.path */ "./src/app/modules/firestore.path.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryFormComponent = /** @class */ (function () {
    function CategoryFormComponent(router, route, toastr, fireDB) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.fireDB = fireDB;
    }
    CategoryFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
        this.categoryID = this.route.snapshot.paramMap.get('id');
        if (this.categoryID) {
            this.fireDB.doc$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["CategoryFirePath"] + "/" + this.categoryID).subscribe(function (categoryData) {
                _this.category = categoryData;
            });
        }
        else {
            this.category = {};
        }
    };
    CategoryFormComponent.prototype.uploadFile = function (event, type) {
        var _this = this;
        if (event && type) {
            if (type === 'image') {
                if (this.categoryID) {
                    this.toastr.info('File uploading..', 'Wait!');
                    var uploadTask = this.fireDB.uploadFileToStorage("outlet/" + this.outletID + "/category/" + this.categoryID + "/original.jpg", event.target.files[0]);
                    uploadTask.then().then(function (snapshot) {
                        snapshot.ref.getDownloadURL().then(function (imageUrl) {
                            if (_this.category) {
                                _this.category.image = imageUrl;
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
    CategoryFormComponent.prototype.deleteFile = function (type) {
        if (type === 'image') {
            if (this.categoryID) {
                this.fireDB.deleteFileStorage("outlet/" + this.outletID + "/category/" + this.categoryID + "/original.jpg");
                if (this.category && this.category.image) {
                    this.category.image = '';
                }
            }
            else {
                this.bigIconFile = null;
            }
        }
    };
    CategoryFormComponent.prototype.addCategory = function (categoryForm) {
        var _this = this;
        if (!categoryForm.invalid) {
            if (this.categoryID) {
                this.fireDB.set("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["CategoryFirePath"] + "/" + this.categoryID, categoryForm.form.value);
                this.toastr.success('Category Updated', 'Success!');
            }
            else {
                this.fireDB.add("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["CategoryFirePath"], categoryForm.form.value)
                    .then(function (documentRef) {
                    var categoryID = documentRef.id;
                    if (_this.bigIconFile) {
                        var uploadTask = _this.fireDB.uploadFileToStorage("outlet/" + _this.outletID + "/category/" + categoryID + "/original.jpg", _this.bigIconFile);
                        _this.toastr.info('File uploading..', 'Wait!');
                        uploadTask.then().then(function (snapshot) {
                            snapshot.ref.getDownloadURL().then(function (imageUrl) {
                                documentRef.update({
                                    image: imageUrl,
                                });
                                _this.router.navigate(['../../../menu-builder'], { relativeTo: _this.route });
                                _this.toastr.success('Category Created', 'Success!');
                            });
                        });
                    }
                    else {
                        _this.router.navigate(['../../../menu-builder'], { relativeTo: _this.route });
                        _this.toastr.success('Category Created', 'Success!');
                    }
                });
            }
            this.router.navigate(['../../../menu-builder'], { relativeTo: this.route });
        }
        else {
            this.fireDB.validateAllFormFields(categoryForm.form);
            this.toastr.error('Fill up the form correctly!', 'Error!');
        }
    };
    CategoryFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-category-form',
            template: __webpack_require__(/*! ./category-form.component.html */ "./src/app/modules/outlet/builder/category/category-form/category-form.component.html"),
            styles: [__webpack_require__(/*! ./category-form.component.css */ "./src/app/modules/outlet/builder/category/category-form/category-form.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], CategoryFormComponent);
    return CategoryFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/builder/category/category-list/category-list.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/category/category-list/category-list.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/outlet/builder/category/category-list/category-list.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/category/category-list/category-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"text-center\">\n      <button class=\"btn btn-success\" type=\"button\" [routerLink]=\"['../category/add/new']\">\n        <i class=\"fa fa-plus\"></i> &nbsp; Add Category</button>\n    </div>\n    <br>\n    <div>\n      <table class=\"table table-bordered table-sm table-hover\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let category of categoryList | async\">\n            <td>{{ category.name }}</td>\n            <td class=\"actionList\">\n              <button class=\"btn btn-sm btn-info\" type=\"button\" [routerLink]=\"['../category/edit', category.id]\">\n                <i class=\"fa fa-pencil\"></i>\n              </button>\n              <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"deleteCategory($event, category.id)\">\n                <i class=\"fa fa-trash\"></i>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/builder/category/category-list/category-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/category/category-list/category-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../firestore.path */ "./src/app/modules/firestore.path.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(toastr, route, fireDB) {
        this.toastr = toastr;
        this.route = route;
        this.fireDB = fireDB;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 2].snapshot.paramMap.get('outletid');
        this.categoryList = this.fireDB.colWithIds$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["CategoryFirePath"]);
    };
    CategoryListComponent.prototype.deleteCategory = function (event, categoryID) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.fireDB.delete("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["CategoryFirePath"] + "/" + categoryID);
            this.toastr.success('Category Deleted', 'Success!');
        }
        return;
    };
    CategoryListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-category-list',
            template: __webpack_require__(/*! ./category-list.component.html */ "./src/app/modules/outlet/builder/category/category-list/category-list.component.html"),
            styles: [__webpack_require__(/*! ./category-list.component.css */ "./src/app/modules/outlet/builder/category/category-list/category-list.component.css")],
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/builder/menu-builder/menu-builder.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/menu-builder/menu-builder.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/outlet/builder/menu-builder/menu-builder.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/menu-builder/menu-builder.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-3\">\n    <ngb-tabset #tab=\"ngbTabset\">\n      <ngb-tab id=\"tab-category\">\n        <ng-template ngbTabTitle>\n          <b>Category</b>\n        </ng-template>\n        <ng-template ngbTabContent>\n          <outlet-category-list></outlet-category-list>\n        </ng-template>\n      </ngb-tab>\n      <ngb-tab id=\"tab-addon\">\n        <ng-template ngbTabTitle>\n          <b>Modifier</b>\n        </ng-template>\n        <ng-template ngbTabContent>\n          <outlet-modifier-list></outlet-modifier-list>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n  </div>\n  <div class=\"col-md-9\">\n    <outlet-menu-item-list></outlet-menu-item-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/builder/menu-builder/menu-builder.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/menu-builder/menu-builder.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MenuBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBuilderComponent", function() { return MenuBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuBuilderComponent = /** @class */ (function () {
    function MenuBuilderComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    MenuBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-menu-builder',
            template: __webpack_require__(/*! ./menu-builder.component.html */ "./src/app/modules/outlet/builder/menu-builder/menu-builder.component.html"),
            styles: [__webpack_require__(/*! ./menu-builder.component.css */ "./src/app/modules/outlet/builder/menu-builder/menu-builder.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MenuBuilderComponent);
    return MenuBuilderComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/builder/menu-item/menu-item-form/menu-item-form.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/menu-item/menu-item-form/menu-item-form.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menuItem-img-big-icon {\n  max-width: 125px;\n  max-height: 125px;\n}\n"

/***/ }),

/***/ "./src/app/modules/outlet/builder/menu-item/menu-item-form/menu-item-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/menu-item/menu-item-form/menu-item-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-3\"></div>\n  <div class=\"col-sm-6\">\n    <h1 class=\"text-center title\" *ngIf=\"!menuItemID\">Add Menu Item</h1>\n    <h1 class=\"text-center title\" *ngIf=\"menuItemID\">Edit Menu Item</h1>\n    <form class=\"form-horizontal\" id=\"menuItemForm\" #MenuItemForm=\"ngForm\" (ngSubmit)=\"addMenuItem(MenuItemForm)\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"isDisabled\" name=\"isDisabled\" [ngModel]=\"menuItem?.isDisabled\" #isDisabled=\"ngModel\">\n                  <label class=\"custom-control-label\" for=\"isDisabled\">Disable</label>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Item Name\n                  <span>*</span>\n                </label>\n                <input class=\"form-control\" type=\"text\" name=\"name\" required [ngModel]=\"menuItem?.name\" #name=\"ngModel\">\n                <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"name.errors.required\">Item Name is required.</div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label>Category\n                  <span>*</span>\n                </label>\n                <select class=\"custom-select col-12\" required name=\"category\" [ngModel]=\"menuItem?.category\" #category=\"ngModel\">\n                  <option *ngFor=\"let option of categoryList\" [value]=\"option.id\">{{option.name}}</option>\n                </select>\n                <div *ngIf=\"category.invalid && (category.dirty || category.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"category.errors.required\">Category is required.</div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label>Description\n                </label>\n                <input type=\"text\" class=\"form-control\" name=\"desc\" #desc=\"ngModel\" [ngModel]=\"menuItem?.desc\">\n              </div>\n              <div class=\"form-group\">\n                <label>Price\n                  <span>*</span>\n                </label>\n                <input class=\"form-control\" type=\"number\" name=\"price\" required [ngModel]=\"menuItem?.price\" #price=\"ngModel\">\n                <div *ngIf=\"price.invalid && (price.dirty || price.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"price.errors.required\">Price is required.</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"card\" ngModelGroup=\"display\">\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <label>Product Image </label>\n                <br/>\n                <input type=\"file\" (change)=\"uploadFile($event, 'image')\" accept=\".png,.jpg\" />\n                <input type=\"hidden\" name=\"image\" [ngModel]=\"menuItem?.display?.image\">\n                <br>\n                <span class=\"help-block\">\n                  <small> Maximum File Size : 5mb. Supported file formats : .png & .jpg </small>\n                </span>\n                <br>\n                <div *ngIf=\"menuItem?.display?.image\">\n                  <img [src]=\"menuItem?.display?.image\" class=\"menuItem-img-big-icon\">\n                  <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteFile('image')\">Delete</button>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Type </label>\n                <br />\n                <div class=\"row\">\n                  <div class=\"col-sm-4\">\n                    <div class=\"custom-control custom-radio\">\n                      <input type=\"radio\" class=\"custom-control-input\" id=\"vegetarian\" name=\"serve\" [ngModel]=\"menuItem?.display?.serve\" #serve=\"ngModel\"\n                        value=\"Veg\">\n                      <label class=\"custom-control-label\" for=\"vegetarian\">Vegetarian</label>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"custom-control custom-radio\">\n                      <input type=\"radio\" class=\"custom-control-input\" id=\"nonveg\" name=\"serve\" [ngModel]=\"menuItem?.display?.serve\" #serve=\"ngModel\"\n                        value=\"NonVeg\">\n                      <label class=\"custom-control-label\" for=\"nonveg\">Non-Veg</label>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"custom-control custom-radio\">\n                      <input type=\"radio\" class=\"custom-control-input\" id=\"vegan\" name=\"serve\" [ngModel]=\"menuItem?.display?.serve\" #serve=\"ngModel\"\n                        value=\"Vegan\">\n                      <label class=\"custom-control-label\" for=\"vegan\">Vegan</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Display Ribbon\n                </label>\n                <select class=\"form-control\" name=\"ribbon\" [ngModel]=\"menuItem?.display?.ribbon\" #ribbon=\"ngModel\">\n                  <option *ngFor=\"let option of displayRibbonList\" [value]=\"option.value\">{{option.label}}</option>\n                </select>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-12\">\n          <div class=\"card\">\n            <div class=\"card-body\" ngModelGroup=\"modifier\">\n              <h4 class=\"card-title\">Modifier</h4>\n              <hr>\n              <div class=\"form-group\">\n                <label>Global Modifier\n                </label>\n                <ng-select [items]=\"modifierList\" bindLabel=\"name\" bindValue=\"id\" name=\"modifiers\" [ngModel]=\"menuItem?.modifier?.modifiers\"\n                  #modifiers=\"ngModel\" [multiple]=\"true\" [closeOnSelect]=\"false\">\n                </ng-select>\n              </div>\n              <label>Add Modifier Size</label>\n              <div class=\"form-grouping-wrapper my-3\" ngModelGroup=\"size\">\n                <div class=\"row\" *ngFor=\"let row of menuItem?.modifier?.size; let i = index\" [ngModelGroup]=\"i\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Name </label>\n                      <input class=\"form-control\" type=\"text\" name=\"name\" required [ngModel]=\"row?.name\" #name=\"ngModel\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Price </label>\n                      <input class=\"form-control\" type=\"number\" name=\"price\" required [ngModel]=\"row?.price\" #price=\"ngModel\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Size based Modifier</label>\n                      <ng-select [items]=\"modifierList\" bindLabel=\"name\" required bindValue=\"id\" name=\"addons\" [ngModel]=\"row?.addons\" #addons=\"ngModel\"\n                        [multiple]=\"true\" [closeOnSelect]=\"false\">\n                      </ng-select>\n                    </div>\n                  </div>\n                  <div class=\"col-md-1\">\n                    <br>\n                    <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteModifierSize(i)\">x</button>\n                  </div>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addMoreModifierSizes()\">+ Add Size</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"menuItemID\">Update</button>\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"!menuItemID\">Submit</button>\n        <button type=\"button\" class=\"btn btn-lg btn-inverse waves-effect waves-light\" [routerLink]=\"['../../../menu-builder']\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/builder/menu-item/menu-item-form/menu-item-form.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/menu-item/menu-item-form/menu-item-form.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MenuItemFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemFormComponent", function() { return MenuItemFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../firestore.path */ "./src/app/modules/firestore.path.ts");
/* harmony import */ var _menu_item_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu-item.model */ "./src/app/modules/outlet/builder/menu-item/menu-item.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MenuItemFormComponent = /** @class */ (function () {
    function MenuItemFormComponent(fireDB, router, route, toastr) {
        this.fireDB = fireDB;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
    }
    MenuItemFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayRibbonList = _menu_item_model__WEBPACK_IMPORTED_MODULE_6__["displayRibbonList"];
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
        this.menuItemID = this.route.snapshot.paramMap.get('id');
        this.fireDB.docRoot$("global/uom").subscribe(function (uomData) {
            _this.uomList = uomData.uom;
        });
        this.fireDB.colWithIds$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["CategoryFirePath"]).subscribe(function (categoryData) {
            _this.categoryList = categoryData;
        });
        this.fireDB.colWithIds$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["ModifierFirePath"]).subscribe(function (modifierData) {
            _this.modifierList = modifierData;
        });
        if (this.menuItemID) {
            this.fireDB.doc$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["MenuItemFirePath"] + "/" + this.menuItemID).subscribe(function (menuItemData) {
                _this.menuItem = menuItemData;
            });
        }
        else {
            this.menuItem = {};
        }
    };
    MenuItemFormComponent.prototype.uploadFile = function (event, type) {
        var _this = this;
        if (event && type) {
            if (type === 'image') {
                if (this.menuItemID) {
                    this.toastr.info('File uploading..', 'Wait!');
                    var uploadTask = this.fireDB.uploadFileToStorage("outlet/" + this.outletID + "/menu/" + this.menuItemID + "/original.jpg", event.target.files[0]);
                    uploadTask.then().then(function (snapshot) {
                        snapshot.ref.getDownloadURL().then(function (imageUrl) {
                            if (_this.menuItem) {
                                _this.menuItem.display = _this.menuItem.display || {};
                                _this.menuItem.display.image = imageUrl;
                            }
                            _this.toastr.success('File uploaded', 'Success!');
                        });
                    });
                }
                else {
                    this.imageFile = event.target.files[0];
                }
            }
        }
    };
    MenuItemFormComponent.prototype.deleteFile = function (type) {
        if (type === 'image') {
            if (this.menuItemID) {
                this.fireDB.deleteFileStorage("outlet/" + this.outletID + "/menu/" + this.menuItemID + "/original.jpg");
                if (this.menuItem && this.menuItem.display) {
                    this.menuItem.display.image = '';
                }
            }
            else {
                this.imageFile = null;
            }
        }
    };
    MenuItemFormComponent.prototype.addMoreModifierSizes = function () {
        if (this.menuItem) {
            this.menuItem.modifier = this.menuItem.modifier || {};
            this.menuItem.modifier.size = this.menuItem.modifier.size || [];
            this.menuItem.modifier.size.push({
                name: '',
                price: 0,
                addons: [],
            });
        }
    };
    MenuItemFormComponent.prototype.deleteModifierSize = function (i) {
        if (this.menuItem && this.menuItem.modifier && this.menuItem.modifier.size) {
            this.menuItem.modifier.size.splice(i, 1);
        }
    };
    MenuItemFormComponent.prototype.addMenuItem = function (menuItemForm) {
        var _this = this;
        if (!menuItemForm.invalid) {
            if (menuItemForm.form.value.addon && menuItemForm.form.value.addon.size) {
                menuItemForm.form.value.addon.size = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["toArray"])(menuItemForm.form.value.addon.size);
            }
            if (this.menuItemID) {
                this.fireDB.set("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["MenuItemFirePath"] + "/" + this.menuItemID, menuItemForm.form.value);
                this.toastr.success('Menu Item Updated', 'Success!');
            }
            else {
                this.fireDB.add("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["MenuItemFirePath"], menuItemForm.form.value)
                    .then(function (documentRef) {
                    var menuItemID = documentRef.id;
                    if (_this.imageFile) {
                        var uploadTask = _this.fireDB.uploadFileToStorage("outlet/" + _this.outletID + "/menu/" + menuItemID + "/original.jpg", _this.imageFile);
                        _this.toastr.info('File uploading..', 'Wait!');
                        uploadTask.then().then(function (snapshot) {
                            snapshot.ref.getDownloadURL().then(function (imageUrl) {
                                documentRef.update({
                                    display: {
                                        image: imageUrl,
                                    },
                                });
                                _this.router.navigate(['../../../menu-builder'], { relativeTo: _this.route });
                                _this.toastr.success('Menu Item Created', 'Success!');
                            });
                        });
                    }
                    else {
                        _this.router.navigate(['../../../menu-builder'], { relativeTo: _this.route });
                        _this.toastr.success('Menu Item Created', 'Success!');
                    }
                });
            }
            this.router.navigate(['../../../menu-builder'], { relativeTo: this.route });
        }
        else {
            this.fireDB.validateAllFormFields(menuItemForm.form);
            this.toastr.error('Fill up the form correctly!', 'Error!');
        }
    };
    MenuItemFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-menu-item-form',
            template: __webpack_require__(/*! ./menu-item-form.component.html */ "./src/app/modules/outlet/builder/menu-item/menu-item-form/menu-item-form.component.html"),
            styles: [__webpack_require__(/*! ./menu-item-form.component.css */ "./src/app/modules/outlet/builder/menu-item/menu-item-form/menu-item-form.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], MenuItemFormComponent);
    return MenuItemFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/builder/menu-item/menu-item-list/menu-item-list.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/menu-item/menu-item-list/menu-item-list.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/outlet/builder/menu-item/menu-item-list/menu-item-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/menu-item/menu-item-list/menu-item-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <button class=\"btn btn-success\" type=\"button\" [routerLink]=\"['../menu-item/add/new']\">\n    <i class=\"fa fa-plus\"></i> &nbsp; Add Menu Item</button>\n</div>\n<br>\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let category of finalListData\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6 class=\"card-title\">\n          {{ category.name }}</h6>\n        <div class=\"text-center m-3\" *ngIf=\"!category.value\">\n          <h5 class=\"text-danger\">No Menu items in this category</h5>\n        </div>\n        <table class=\"table table-bordered table-sm table-hover\" *ngIf=\"category.value\">\n          <thead>\n            <tr>\n              <th>Name</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let menuItem of category.value\">\n              <td>{{ menuItem.name }}</td>\n              <td class=\"actionList\">\n                <button class=\"btn btn-sm btn-info\" type=\"button\" [routerLink]=\"['../menu-item/edit', menuItem.id]\">\n                  <i class=\"fa fa-pencil\"></i>\n                </button>\n                <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"deleteMenuItem($event, menuItem.id)\">\n                  <i class=\"fa fa-trash\"></i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/builder/menu-item/menu-item-list/menu-item-list.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/menu-item/menu-item-list/menu-item-list.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MenuItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemListComponent", function() { return MenuItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../firestore.path */ "./src/app/modules/firestore.path.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var MenuItemListComponent = /** @class */ (function () {
    function MenuItemListComponent(fireDB, route, toastr) {
        this.fireDB = fireDB;
        this.route = route;
        this.toastr = toastr;
    }
    MenuItemListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 2].snapshot.paramMap.get('outletid');
                        return [4 /*yield*/, this.fireDB.colWithIds$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["CategoryFirePath"]).subscribe(function (categoryData) {
                                _this.categoryListData = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["keyBy"])(categoryData, 'id');
                            })];
                    case 1:
                        _a.sent();
                        this.fireDB.colWithIds$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["MenuItemFirePath"]).subscribe(function (menuItemsData) {
                            _this.menuItemListData = menuItemsData;
                            var categoryWise = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["groupBy"])(menuItemsData, 'category');
                            _this.finalListData = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["toArray"])(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["merge"])({}, _this.categoryListData, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["mapValues"])(categoryWise, function (value) { return ({ value: value }); })));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuItemListComponent.prototype.deleteMenuItem = function (event, menuItemID) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.fireDB.delete("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["MenuItemFirePath"] + "/" + menuItemID);
            this.toastr.success('Menu Item Deleted', 'Success!');
        }
        return;
    };
    MenuItemListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-menu-item-list',
            template: __webpack_require__(/*! ./menu-item-list.component.html */ "./src/app/modules/outlet/builder/menu-item/menu-item-list/menu-item-list.component.html"),
            styles: [__webpack_require__(/*! ./menu-item-list.component.css */ "./src/app/modules/outlet/builder/menu-item/menu-item-list/menu-item-list.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MenuItemListComponent);
    return MenuItemListComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/builder/menu-item/menu-item.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/outlet/builder/menu-item/menu-item.model.ts ***!
  \*********************************************************************/
/*! exports provided: displayRibbonList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayRibbonList", function() { return displayRibbonList; });
var displayRibbonList = [
    { label: 'None', value: 'None' },
    { label: 'Best Seller', value: 'Best Seller' },
    { label: 'Chef`s Special', value: 'Chef`s Special' },
    { label: 'Recommended', value: 'Recommended' },
    { label: 'Low Calorie', value: 'Low Calorie' },
    { label: 'Spicy', value: 'Spicy' },
    { label: 'Healthy', value: 'Healthy' },
    { label: 'Trending', value: 'Recommended' },
];


/***/ }),

/***/ "./src/app/modules/outlet/builder/modifier/modifier-form/modifier-form.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/modifier/modifier-form/modifier-form.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/outlet/builder/modifier/modifier-form/modifier-form.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/modifier/modifier-form/modifier-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h1 class=\"text-center title\" *ngIf=\"!modifierID\">Add Modifier</h1>\n    <h1 class=\"text-center title\" *ngIf=\"modifierID\">Edit Modifier</h1>\n    <form class=\"form-horizontal\" id=\"modifierForm\" #ModifierForm=\"ngForm\" (ngSubmit)=\"addModifier(ModifierForm)\">\n      <div class=\"row\">\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-8\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label>Modifier Group Name\n                      <span>*</span>\n                    </label>\n                    <input class=\"form-control\" type=\"text\" name=\"name\" required [ngModel]=\"modifier?.name\" #name=\"ngModel\">\n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                      <div *ngIf=\"name.errors.required\">Modifier Group Name is required.</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"custom-control custom-checkbox\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"isMultiChoice\" name=\"isMultiChoice\" [ngModel]=\"modifier?.isMultiChoice\"\n                        #multiChoice=\"ngModel\">\n                      <label class=\"custom-control-label\" for=\"isMultiChoice\">Allow Multiple Choice</label>\n                    </div>\n                  </div>\n                  <div class=\"row\" [hidden]=\"!multiChoice.value\">\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>Minimum Choice\n                          <span>*</span>\n                        </label>\n                        <input class=\"form-control\" type=\"number\" name=\"minChoice\" [required]=\"multiChoice.value\" [ngModel]=\"modifier?.minChoice\"\n                          #minChoice=\"ngModel\">\n                        <div *ngIf=\"minChoice.invalid && (minChoice.dirty || minChoice.touched)\" class=\"alert alert-danger\">\n                          <div *ngIf=\"minChoice.errors.required\">Minimum Choice is required.</div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                      <div class=\"form-group\">\n                        <label>Maximum Choice\n                          <span>*</span>\n                        </label>\n                        <input class=\"form-control\" type=\"number\" name=\"maxChoice\" [required]=\"multiChoice.value\" [ngModel]=\"modifier?.maxChoice\"\n                          #maxChoice=\"ngModel\">\n                        <div *ngIf=\"maxChoice.invalid && (maxChoice.dirty || maxChoice.touched)\" class=\"alert alert-danger\">\n                          <div *ngIf=\"maxChoice.errors.required\">Maximum Choice is required.</div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <label>Add Modifier Items</label>\n              <div class=\"form-grouping-wrapper my-3\" ngModelGroup=\"item\">\n                <div class=\"row\" *ngFor=\"let row of modifier?.item; let i = index\" [ngModelGroup]=\"i\">\n                  <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label>Modifier Item </label>\n                      <input class=\"form-control\" type=\"text\" name=\"name\" required [ngModel]=\"row?.name\" #name=\"ngModel\">\n                      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"name.errors.required\">Maximum Choice is required.</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                      <label>Price </label>\n                      <input class=\"form-control\" type=\"number\" name=\"price\" required [ngModel]=\"row?.price\" #price=\"ngModel\">\n                      <div *ngIf=\"price.invalid && (price.dirty || price.touched)\" class=\"alert alert-danger\">\n                        <div *ngIf=\"price.errors.required\">Maximum Choice is required.</div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-1\">\n                    <br>\n                    <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteRow(i)\">x</button>\n                  </div>\n                </div>\n                <div class=\"text-center\">\n                  <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addMoreRows()\">+ Add Modifier Item</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-2\"></div>\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"modifierID\">Update</button>\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"!modifierID\">Submit</button>\n        <button type=\"button\" class=\"btn btn-lg btn-inverse waves-effect waves-light\" [routerLink]=\"['../../../menu-builder']\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/builder/modifier/modifier-form/modifier-form.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/modifier/modifier-form/modifier-form.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ModifierFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierFormComponent", function() { return ModifierFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../firestore.path */ "./src/app/modules/firestore.path.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModifierFormComponent = /** @class */ (function () {
    function ModifierFormComponent(fireDB, router, route, toastr) {
        this.fireDB = fireDB;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
    }
    ModifierFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
        this.modifierID = this.route.snapshot.paramMap.get('id');
        if (this.modifierID) {
            this.fireDB.doc$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["ModifierFirePath"] + "/" + this.modifierID).subscribe(function (modifierData) {
                _this.modifier = modifierData;
            });
        }
        else {
            this.modifier = {};
        }
    };
    ModifierFormComponent.prototype.addMoreRows = function () {
        if (this.modifier) {
            this.modifier.item = this.modifier.item || [];
            this.modifier.item.push({
                name: '',
                price: 0,
                ingredient: '',
            });
        }
    };
    ModifierFormComponent.prototype.deleteRow = function (i) {
        if (this.modifier && this.modifier.item) {
            this.modifier.item.splice(i, 1);
        }
    };
    ModifierFormComponent.prototype.addModifier = function (modifierForm) {
        if (!modifierForm.invalid) {
            if (modifierForm.form.value.item) {
                modifierForm.form.value.item = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["toArray"])(modifierForm.form.value.item);
            }
            if (this.modifierID) {
                this.fireDB.set("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["ModifierFirePath"] + "/" + this.modifierID, modifierForm.form.value);
                this.toastr.success('Modifier Updated', 'Success!');
            }
            else {
                this.fireDB.add("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["ModifierFirePath"], modifierForm.form.value);
                this.toastr.success('Modifier Created', 'Success!');
            }
            this.router.navigate(['../../../menu-builder'], { relativeTo: this.route });
        }
        else {
            this.fireDB.validateAllFormFields(modifierForm.form);
            this.toastr.error('Fill up the form correctly!', 'Error!');
        }
    };
    ModifierFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-modifier-form',
            template: __webpack_require__(/*! ./modifier-form.component.html */ "./src/app/modules/outlet/builder/modifier/modifier-form/modifier-form.component.html"),
            styles: [__webpack_require__(/*! ./modifier-form.component.css */ "./src/app/modules/outlet/builder/modifier/modifier-form/modifier-form.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], ModifierFormComponent);
    return ModifierFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/builder/modifier/modifier-list/modifier-list.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/modifier/modifier-list/modifier-list.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/outlet/builder/modifier/modifier-list/modifier-list.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/modifier/modifier-list/modifier-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <div class=\"text-center\">\n      <button class=\"btn btn-success\" type=\"button\" [routerLink]=\"['../modifier/add/new']\">\n        <i class=\"fa fa-plus\"></i> &nbsp; Add Modifier</button>\n    </div>\n    <br>\n    <div>\n      <table class=\"table table-bordered table-sm table-hover\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let modifier of modifierList | async\">\n            <td>{{ modifier.name }}</td>\n            <td class=\"actionList\">\n              <button class=\"btn btn-sm btn-info\" type=\"button\" [routerLink]=\"['../modifier/edit', modifier.id]\">\n                <i class=\"fa fa-pencil\"></i>\n              </button>\n              <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"deleteModifier($event, modifier.id)\">\n                <i class=\"fa fa-trash\"></i>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/builder/modifier/modifier-list/modifier-list.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/outlet/builder/modifier/modifier-list/modifier-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ModifierListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifierListComponent", function() { return ModifierListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../firestore.path */ "./src/app/modules/firestore.path.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModifierListComponent = /** @class */ (function () {
    function ModifierListComponent(fireDB, route, toastr) {
        this.fireDB = fireDB;
        this.route = route;
        this.toastr = toastr;
    }
    ModifierListComponent.prototype.ngOnInit = function () {
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 2].snapshot.paramMap.get('outletid');
        this.modifierList = this.fireDB.colWithIds$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["ModifierFirePath"]);
    };
    ModifierListComponent.prototype.deleteModifier = function (event, modifierID) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.fireDB.delete("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["ModifierFirePath"] + "/" + modifierID);
            this.toastr.success('Modifier Deleted', 'Success!');
        }
        return;
    };
    ModifierListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-modifier-list',
            template: __webpack_require__(/*! ./modifier-list.component.html */ "./src/app/modules/outlet/builder/modifier/modifier-list/modifier-list.component.html"),
            styles: [__webpack_require__(/*! ./modifier-list.component.css */ "./src/app/modules/outlet/builder/modifier/modifier-list/modifier-list.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ModifierListComponent);
    return ModifierListComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/menu/menu-form/menu-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/outlet/menu/menu-form/menu-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/outlet/menu/menu-form/menu-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/outlet/menu/menu-form/menu-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h1 class=\"text-center title\" *ngIf=\"!menuID\">Add Menu</h1>\n    <h1 class=\"text-center title\" *ngIf=\"menuID\">Edit Menu</h1>\n    <br>\n    <form class=\"form-horizontal\" id=\"menuForm\" #MenuForm=\"ngForm\" (ngSubmit)=\"addMenu(MenuForm)\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\"></div>\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <label>Menu Name\n                      <span>*</span>\n                    </label>\n                    <input class=\"form-control\" type=\"text\" name=\"name\" required [ngModel]=\"menu?.name\" #name=\"ngModel\">\n                    <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                      <div *ngIf=\"name.errors.required\">Menu Name is required.</div>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Menu Description\n                    </label>\n                    <input type=\"text\" name=\"desc\" #desc=\"ngModel\" [ngModel]=\"menu?.desc\" class=\"form-control\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Categories\n                      <span>*</span>\n                    </label>\n                    <ng-select [items]=\"menuItems\" bindLabel=\"name\" bindValue=\"id\" name=\"category\" required [ngModel]=\"menu?.category\" #category=\"ngModel\"\n                      [multiple]=\"true\" [closeOnSelect]=\"false\">\n                    </ng-select>\n                    <div *ngIf=\"category.invalid && (category.dirty || category.touched)\" class=\"alert alert-danger\">\n                      <div *ngIf=\"category.errors.required\">Categories is required.</div>\n                    </div>\n                  </div>\n                  <label>Menu Availability</label>\n                  <div class=\"form-grouping-wrapper my-3\" ngModelGroup=\"opHrs\">\n                    <div class=\"row\" *ngFor=\"let opHr of menu?.opHrs; let i = index\" [ngModelGroup]=\"i\">\n                      <div class=\"col-sm-3\">\n                        <div class=\"form-group\">\n                          <label>Day\n                          </label>\n                          <select class=\"custom-select col-12\" name=\"day\" [ngModel]=\"opHr?.day\" #day=\"ngModel\" required>\n                            <option *ngFor=\"let option of dayList\" [value]=\"option.value\">{{option.label}}</option>\n                          </select>\n                          <div *ngIf=\"day.invalid && (day.dirty || day.touched)\" class=\"alert alert-danger\">\n                            <div *ngIf=\"day.errors.required\">Day is required.</div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                          <label>From</label>\n                          <select class=\"form-control\" name=\"fromTime\" [ngModel]=\"opHr?.fromTime\" #fromTime=\"ngModel\" required>\n                            <option *ngFor=\"let option of this.fireDB.getTimeRangeArray()\" [value]=\"option.value\">{{option.label}}</option>\n                          </select>\n                          <div *ngIf=\"fromTime.invalid && (fromTime.dirty || fromTime.touched)\" class=\"alert alert-danger\">\n                            <div *ngIf=\"fromTime.errors.required\">Day is required.</div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                          <label>To</label>\n                          <select class=\"form-control\" name=\"toTime\" [ngModel]=\"opHr?.toTime\" #toTime=\"ngModel\" required>\n                            <option *ngFor=\"let option of this.fireDB.getTimeRangeArray()\" [value]=\"option.value\">{{option.label}}</option>\n                          </select>\n                          <div *ngIf=\"toTime.invalid && (toTime.dirty || toTime.touched)\" class=\"alert alert-danger\">\n                            <div *ngIf=\"toTime.errors.required\">Day is required.</div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-md-1 mt-1\">\n                        <br>\n                        <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteOperatingHour(i)\">\n                          <i class=\"fa fa-times\"></i>\n                        </button>\n                      </div>\n                    </div>\n                    <div class=\"text-center\">\n                      <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addMoreOperatingHours()\">\n                        <i class=\"fa fa-plus\"></i> &nbsp; Add</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-3\"></div>\n        </div>\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"menuID\">Update</button>\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"!menuID\">Submit</button>\n        <button type=\"button\" class=\"btn btn-lg btn-inverse waves-effect waves-light\" [routerLink]=\"['../..']\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/menu/menu-form/menu-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/outlet/menu/menu-form/menu-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: MenuFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuFormComponent", function() { return MenuFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../firestore.path */ "./src/app/modules/firestore.path.ts");
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu.model */ "./src/app/modules/outlet/menu/menu.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MenuFormComponent = /** @class */ (function () {
    function MenuFormComponent(fireDB, router, route, toastr) {
        this.fireDB = fireDB;
        this.router = router;
        this.route = route;
        this.toastr = toastr;
    }
    MenuFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dayList = _menu_model__WEBPACK_IMPORTED_MODULE_6__["dayList"];
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
        this.fireDB.colWithIds$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["CategoryFirePath"]).subscribe(function (menuItemsData) {
            _this.menuItems = menuItemsData;
        });
        this.menuID = this.route.snapshot.paramMap.get('id');
        if (this.menuID) {
            this.fireDB.doc$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["MenuFirePath"] + "/" + this.menuID).subscribe(function (menuData) {
                _this.menu = menuData;
            });
        }
        else {
            this.menu = {};
        }
    };
    MenuFormComponent.prototype.addMoreOperatingHours = function () {
        if (this.menu) {
            this.menu.opHrs = this.menu.opHrs || [];
            this.menu.opHrs.push({
                fromTime: '',
                toTime: '',
                day: '',
            });
        }
    };
    MenuFormComponent.prototype.deleteOperatingHour = function (i) {
        if (this.menu && this.menu.opHrs) {
            this.menu.opHrs.splice(i, 1);
        }
    };
    MenuFormComponent.prototype.addMenu = function (menuForm) {
        if (!menuForm.invalid) {
            if (menuForm.form.value.opHrs) {
                menuForm.form.value.opHrs = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["toArray"])(menuForm.form.value.opHrs);
            }
            if (this.menuID) {
                this.fireDB.set("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["MenuFirePath"] + "/" + this.menuID, menuForm.form.value);
                this.toastr.success('Menu Updated', 'Success!');
            }
            else {
                this.fireDB.add("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_5__["MenuFirePath"], menuForm.form.value);
                this.toastr.success('Menu Created', 'Success!');
            }
            this.router.navigate(['../..'], { relativeTo: this.route });
        }
        else {
            this.fireDB.validateAllFormFields(menuForm.form);
            this.toastr.error('Fill up the form correctly!', 'Error!');
        }
    };
    MenuFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-menu-form',
            template: __webpack_require__(/*! ./menu-form.component.html */ "./src/app/modules/outlet/menu/menu-form/menu-form.component.html"),
            styles: [__webpack_require__(/*! ./menu-form.component.css */ "./src/app/modules/outlet/menu/menu-form/menu-form.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], MenuFormComponent);
    return MenuFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/menu/menu-list/menu-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/outlet/menu/menu-list/menu-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/outlet/menu/menu-list/menu-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/outlet/menu/menu-list/menu-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-2\"></div>\n  <div class=\"col-lg-8\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"text-center\">\n          <button class=\"btn btn-success\" type=\"button\" [routerLink]=\"['add/new']\">\n            <i class=\"fa fa-plus\"></i> &nbsp; Add Menu</button>\n        </div>\n        <br>\n        <div>\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>Menu Name</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let menu of menuList | async\">\n                <td>{{ menu.name }}</td>\n                <td class=\"actionList\">\n                  <button class=\"btn btn-sm btn-info\" type=\"button\" [routerLink]=\"['edit', menu.id]\">\n                    <i class=\"fa fa-pencil\"></i>\n                  </button>\n                  <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"deleteMenu($event, menu.id)\">\n                    <i class=\"fa fa-trash\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/menu/menu-list/menu-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/outlet/menu/menu-list/menu-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: MenuListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListComponent", function() { return MenuListComponent; });
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





var MenuListComponent = /** @class */ (function () {
    function MenuListComponent(fireDB, route, toastr) {
        this.fireDB = fireDB;
        this.route = route;
        this.toastr = toastr;
    }
    MenuListComponent.prototype.ngOnInit = function () {
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
        this.menuList = this.fireDB.colWithIds$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["MenuFirePath"]);
    };
    MenuListComponent.prototype.deleteMenu = function (event, menuID) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.fireDB.delete("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["MenuFirePath"] + "/" + menuID);
            this.toastr.success('Menu Deleted', 'Success!');
        }
        return;
    };
    MenuListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-menu-list',
            template: __webpack_require__(/*! ./menu-list.component.html */ "./src/app/modules/outlet/menu/menu-list/menu-list.component.html"),
            styles: [__webpack_require__(/*! ./menu-list.component.css */ "./src/app/modules/outlet/menu/menu-list/menu-list.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], MenuListComponent);
    return MenuListComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/menu/menu.model.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/outlet/menu/menu.model.ts ***!
  \***************************************************/
/*! exports provided: dayList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayList", function() { return dayList; });
var dayList = [
    { label: 'Everyday', value: 'Everyday' },
    { label: 'Weekday', value: 'Weekday' },
    { label: 'Sunday', value: 'Sunday' },
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Thursday' },
    { label: 'Friday', value: 'Friday' },
    { label: 'Saturday', value: 'Saturday' },
];


/***/ }),

/***/ "./src/app/modules/outlet/outlet-route/outlet-route.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/outlet/outlet-route/outlet-route.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link.dropdown-toggle {\n  cursor: pointer;\n}\n\n.navbar-nav .nav-link.active {\n  border-radius: 4px;\n  color: #ffffff;\n  background-color: #745af2;\n}\n"

/***/ }),

/***/ "./src/app/modules/outlet/outlet-route/outlet-route.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/outlet/outlet-route/outlet-route.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-white\">\n  <a class=\"navbar-brand\">Manage Outlet</a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"showMobileMenu = !showMobileMenu\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse\" [ngClass]=\"{'collapse': !showMobileMenu}\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['menu-builder']\">Manage</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['menu']\">Menu</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\">\n          POS\n        </a>\n        <div class=\"dropdown-menu\">\n          <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['pos-item']\">POS Item</a>\n          <a class=\"dropdown-item\" routerLinkActive=\"active\" [routerLink]=\"['pos-modifier']\">POS Modifier</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"['user']\">User</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <select class=\"custom-select\" name=\"routeOutlet\" (change)=\"outletChangeRoute()\" [(ngModel)]=\"outletIDSelect\">\n        <option *ngFor=\"let option of outletList\" [value]=\"option.id\" [selected]=\"option.id === outletID\">{{option.name}}</option>\n      </select>\n    </form>\n  </div>\n</nav>\n<br>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/modules/outlet/outlet-route/outlet-route.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/outlet/outlet-route/outlet-route.component.ts ***!
  \***********************************************************************/
/*! exports provided: OutletRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletRouteComponent", function() { return OutletRouteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OutletRouteComponent = /** @class */ (function () {
    function OutletRouteComponent(router, fireDB, route) {
        this.router = router;
        this.fireDB = fireDB;
        this.route = route;
        this.showMobileMenu = false;
        this.outletIDSelect = [];
    }
    OutletRouteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 1].snapshot.paramMap.get('outletid');
        this.fireDB.colWithIds$("outlets").subscribe(function (outletList) {
            _this.outletList = outletList;
        });
    };
    OutletRouteComponent.prototype.outletChangeRoute = function () {
        this.router.navigate(["/outlet/dash/" + this.outletIDSelect + "/menu"]);
    };
    OutletRouteComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.dropdown-toggle').on('click', function (event) {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.dropdown-menu').removeClass('show');
            jquery__WEBPACK_IMPORTED_MODULE_2__(event.target).next().toggleClass('show');
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.dropdown-item').on('click', function (event) {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.dropdown-menu').removeClass('show');
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('.nav-item:not(.dropdown)').on('click', function (event) {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.dropdown-menu').removeClass('show');
        });
    };
    OutletRouteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-outlet-route',
            template: __webpack_require__(/*! ./outlet-route.component.html */ "./src/app/modules/outlet/outlet-route/outlet-route.component.html"),
            styles: [__webpack_require__(/*! ./outlet-route.component.css */ "./src/app/modules/outlet/outlet-route/outlet-route.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OutletRouteComponent);
    return OutletRouteComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/outlet.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/outlet/outlet.module.ts ***!
  \*************************************************/
/*! exports provided: OutletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletModule", function() { return OutletModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var ngx_quill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-quill */ "./node_modules/ngx-quill/index.js");
/* harmony import */ var _core_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/shared.module */ "./src/app/core/shared.module.ts");
/* harmony import */ var _builder_modifier_modifier_form_modifier_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./builder/modifier/modifier-form/modifier-form.component */ "./src/app/modules/outlet/builder/modifier/modifier-form/modifier-form.component.ts");
/* harmony import */ var _builder_modifier_modifier_list_modifier_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./builder/modifier/modifier-list/modifier-list.component */ "./src/app/modules/outlet/builder/modifier/modifier-list/modifier-list.component.ts");
/* harmony import */ var _builder_category_category_form_category_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./builder/category/category-form/category-form.component */ "./src/app/modules/outlet/builder/category/category-form/category-form.component.ts");
/* harmony import */ var _builder_category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./builder/category/category-list/category-list.component */ "./src/app/modules/outlet/builder/category/category-list/category-list.component.ts");
/* harmony import */ var _builder_menu_builder_menu_builder_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./builder/menu-builder/menu-builder.component */ "./src/app/modules/outlet/builder/menu-builder/menu-builder.component.ts");
/* harmony import */ var _builder_menu_item_menu_item_form_menu_item_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./builder/menu-item/menu-item-form/menu-item-form.component */ "./src/app/modules/outlet/builder/menu-item/menu-item-form/menu-item-form.component.ts");
/* harmony import */ var _builder_menu_item_menu_item_list_menu_item_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./builder/menu-item/menu-item-list/menu-item-list.component */ "./src/app/modules/outlet/builder/menu-item/menu-item-list/menu-item-list.component.ts");
/* harmony import */ var _menu_menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu/menu-form/menu-form.component */ "./src/app/modules/outlet/menu/menu-form/menu-form.component.ts");
/* harmony import */ var _menu_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./menu/menu-list/menu-list.component */ "./src/app/modules/outlet/menu/menu-list/menu-list.component.ts");
/* harmony import */ var _outlet_route_outlet_route_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./outlet-route/outlet-route.component */ "./src/app/modules/outlet/outlet-route/outlet-route.component.ts");
/* harmony import */ var _outlet_routing__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./outlet.routing */ "./src/app/modules/outlet/outlet.routing.ts");
/* harmony import */ var _outlets_outlet_form_outlet_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./outlets/outlet-form/outlet-form.component */ "./src/app/modules/outlet/outlets/outlet-form/outlet-form.component.ts");
/* harmony import */ var _outlets_outlet_list_outlet_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./outlets/outlet-list/outlet-list.component */ "./src/app/modules/outlet/outlets/outlet-list/outlet-list.component.ts");
/* harmony import */ var _user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/user-form/user-form.component */ "./src/app/modules/outlet/user/user-form/user-form.component.ts");
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/user-list/user-list.component */ "./src/app/modules/outlet/user/user-list/user-list.component.ts");
/* harmony import */ var _pos_pos_item_pos_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pos/pos-item/pos-item.component */ "./src/app/modules/outlet/pos/pos-item/pos-item.component.ts");
/* harmony import */ var _pos_pos_modifier_pos_modifier_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pos/pos-modifier/pos-modifier.component */ "./src/app/modules/outlet/pos/pos-modifier/pos-modifier.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var OutletModule = /** @class */ (function () {
    function OutletModule() {
    }
    OutletModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _core_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                ngx_quill__WEBPACK_IMPORTED_MODULE_6__["QuillModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_outlet_routing__WEBPACK_IMPORTED_MODULE_18__["OutletRoutes"]),
            ],
            declarations: [
                _outlets_outlet_form_outlet_form_component__WEBPACK_IMPORTED_MODULE_19__["OutletFormComponent"],
                _outlets_outlet_list_outlet_list_component__WEBPACK_IMPORTED_MODULE_20__["OutletListComponent"],
                _outlet_route_outlet_route_component__WEBPACK_IMPORTED_MODULE_17__["OutletRouteComponent"],
                _builder_menu_builder_menu_builder_component__WEBPACK_IMPORTED_MODULE_12__["MenuBuilderComponent"],
                _builder_category_category_form_category_form_component__WEBPACK_IMPORTED_MODULE_10__["CategoryFormComponent"],
                _builder_category_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_11__["CategoryListComponent"],
                _builder_menu_item_menu_item_form_menu_item_form_component__WEBPACK_IMPORTED_MODULE_13__["MenuItemFormComponent"],
                _builder_menu_item_menu_item_list_menu_item_list_component__WEBPACK_IMPORTED_MODULE_14__["MenuItemListComponent"],
                _builder_modifier_modifier_form_modifier_form_component__WEBPACK_IMPORTED_MODULE_8__["ModifierFormComponent"],
                _builder_modifier_modifier_list_modifier_list_component__WEBPACK_IMPORTED_MODULE_9__["ModifierListComponent"],
                _menu_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_16__["MenuListComponent"],
                _menu_menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_15__["MenuFormComponent"],
                _user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_21__["UserFormComponent"],
                _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_22__["UserListComponent"],
                _pos_pos_item_pos_item_component__WEBPACK_IMPORTED_MODULE_23__["PosItemComponent"],
                _pos_pos_modifier_pos_modifier_component__WEBPACK_IMPORTED_MODULE_24__["PosModifierComponent"],
            ],
        })
    ], OutletModule);
    return OutletModule;
}());



/***/ }),

/***/ "./src/app/modules/outlet/outlet.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/outlet/outlet.routing.ts ***!
  \**************************************************/
/*! exports provided: OutletRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletRoutes", function() { return OutletRoutes; });
/* harmony import */ var _builder_builder_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builder/builder.routing */ "./src/app/modules/outlet/builder/builder.routing.ts");
/* harmony import */ var _menu_menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu-form/menu-form.component */ "./src/app/modules/outlet/menu/menu-form/menu-form.component.ts");
/* harmony import */ var _menu_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu-list/menu-list.component */ "./src/app/modules/outlet/menu/menu-list/menu-list.component.ts");
/* harmony import */ var _outlet_route_outlet_route_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlet-route/outlet-route.component */ "./src/app/modules/outlet/outlet-route/outlet-route.component.ts");
/* harmony import */ var _outlets_outlet_form_outlet_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./outlets/outlet-form/outlet-form.component */ "./src/app/modules/outlet/outlets/outlet-form/outlet-form.component.ts");
/* harmony import */ var _outlets_outlet_list_outlet_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outlets/outlet-list/outlet-list.component */ "./src/app/modules/outlet/outlets/outlet-list/outlet-list.component.ts");
/* harmony import */ var _user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user-form/user-form.component */ "./src/app/modules/outlet/user/user-form/user-form.component.ts");
/* harmony import */ var _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/user-list/user-list.component */ "./src/app/modules/outlet/user/user-list/user-list.component.ts");
/* harmony import */ var _pos_pos_item_pos_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pos/pos-item/pos-item.component */ "./src/app/modules/outlet/pos/pos-item/pos-item.component.ts");
/* harmony import */ var _pos_pos_modifier_pos_modifier_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pos/pos-modifier/pos-modifier.component */ "./src/app/modules/outlet/pos/pos-modifier/pos-modifier.component.ts");










var OutletRoutes = [
    {
        path: 'outlets',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _outlets_outlet_list_outlet_list_component__WEBPACK_IMPORTED_MODULE_5__["OutletListComponent"],
            },
            {
                path: 'add/new',
                component: _outlets_outlet_form_outlet_form_component__WEBPACK_IMPORTED_MODULE_4__["OutletFormComponent"],
            },
            {
                path: 'edit/:id',
                component: _outlets_outlet_form_outlet_form_component__WEBPACK_IMPORTED_MODULE_4__["OutletFormComponent"],
            },
        ],
    },
    {
        path: 'dash/:outletid',
        component: _outlet_route_outlet_route_component__WEBPACK_IMPORTED_MODULE_3__["OutletRouteComponent"],
        children: _builder_builder_routing__WEBPACK_IMPORTED_MODULE_0__["MenuBuilderRoutes"].concat([
            {
                path: 'menu',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _menu_menu_list_menu_list_component__WEBPACK_IMPORTED_MODULE_2__["MenuListComponent"],
                    },
                    {
                        path: 'add/new',
                        component: _menu_menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_1__["MenuFormComponent"],
                    },
                    {
                        path: 'edit/:id',
                        component: _menu_menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_1__["MenuFormComponent"],
                    },
                ],
            },
            {
                path: 'user',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"],
                    },
                    {
                        path: 'add/new',
                        component: _user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_6__["UserFormComponent"],
                    },
                ],
            },
            {
                path: 'pos-item',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _pos_pos_item_pos_item_component__WEBPACK_IMPORTED_MODULE_8__["PosItemComponent"],
                    },
                ],
            },
            {
                path: 'pos-modifier',
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        component: _pos_pos_modifier_pos_modifier_component__WEBPACK_IMPORTED_MODULE_9__["PosModifierComponent"],
                    },
                ],
            },
        ]),
    },
];


/***/ }),

/***/ "./src/app/modules/outlet/outlets/outlet-form/outlet-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/outlet/outlets/outlet-form/outlet-form.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outlet-img-big-icon {\n  max-width: 125px;\n  max-height: 125px;\n}\n"

/***/ }),

/***/ "./src/app/modules/outlet/outlets/outlet-form/outlet-form.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/outlet/outlets/outlet-form/outlet-form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center title\" *ngIf=\"!outletID\">Add New Restaurant</h1>\n<h1 class=\"text-center title\" *ngIf=\"outletID\">Edit Restaurant</h1>\n<br>\n<form class=\"form-horizontal\" id=\"outletForm\" #OutletForm=\"ngForm\" (ngSubmit)=\"addOutlet(OutletForm)\">\n  <div class=\"row\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label>Restaurant Name\n              <span>*</span>\n            </label>\n            <input class=\"form-control\" type=\"text\" name=\"name\" required [ngModel]=\"outlet?.name\" #name=\"ngModel\">\n            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"name.errors.required\">Restaurant Name is required.</div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"custom-control custom-checkbox\">\n              <input type=\"checkbox\" class=\"custom-control-input\" id=\"isDisable\" name=\"isDisable\" [ngModel]=\"outlet?.isDisable\">\n              <label class=\"custom-control-label\" for=\"isDisable\">Disable Restaurant</label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Restaurant Logo\n            </label>\n            <input type=\"file\" (change)=\"uploadFile($event, 'image')\" accept=\".png,.jpg\" />\n            <input type=\"hidden\" name=\"image\" [ngModel]=\"outlet?.image\">\n            <br>\n            <br>\n            <div *ngIf=\"outlet?.image\">\n              <img [src]=\"outlet?.image\" class=\"outlet-img-big-icon\">\n              <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"deleteFile('image')\">Delete</button>\n            </div>\n            <span class=\"help-block\">\n              <small> Maximum File Size : 5mb. Supported file formats : .png & .jpg </small>\n            </span>\n          </div>\n          <div class=\"form-group\">\n            <label>Website\n            </label>\n            <input class=\"form-control\" pattern=\"^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(\\/.*)?$\"\n              type=\"text\" name=\"website\" [ngModel]=\"outlet?.website\" #website=\"ngModel\">\n            <div *ngIf=\"website.errors && (website.dirty || website.touched)\" class=\"alert alert-danger\">\n              <div [hidden]=\"!website.errors.pattern\">\n                Enter a valid URL!\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Sales Tax Percent\n            </label>\n            <input class=\"form-control\" type=\"number\" name=\"tax\" [ngModel]=\"outlet?.tax\" #tax=\"ngModel\" />\n          </div>\n\n          <div class=\"form-group\">\n            <label>Order Type\n            </label>\n            <div class=\"row\" ngModelGroup=\"ordertype\">\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <div class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"forhere\" name=\"forhere\" [ngModel]=\"outlet?.ordertype?.forhere\">\n                    <label class=\"custom-control-label\" for=\"forhere\">For Here </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6\">\n                <div class=\"form-group\">\n                  <div class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"togo\" name=\"togo\" [ngModel]=\"outlet?.ordertype?.togo\">\n                    <label class=\"custom-control-label\" for=\"togo\">To Go</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Omnivore API\n            </label>\n            <input class=\"form-control\" type=\"text\" name=\"omnivore\" [ngModel]=\"outlet?.omnivore\" #omnivore=\"ngModel\" />\n          </div>\n          <div class=\"form-group\">\n            <label>Google Analytics\n            </label>\n            <textarea class=\"form-control\" rows=\"3\" name=\"analytics\" [ngModel]=\"outlet?.analytics\" #analytics=\"ngModel\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Confirmation Page\n            </label>\n            <quill-editor name=\"confirmation\" [ngModel]=\"outlet?.confirmation\" #confirmation=\"ngModel\" [style]=\"{height: '150px'}\" [modules]=\"quillToolbar\"></quill-editor>\n          </div>\n          <div class=\"form-group\">\n            <label>Credit Card Decline Error Message\n            </label>\n            <textarea class=\"form-control\" rows=\"3\" name=\"errmag\" [ngModel]=\"outlet?.errmag\" #errmag=\"ngModel\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Currency\n            </label>\n            <select class=\"form-control\" name=\"currency\" [ngModel]=\"outlet?.currency\" #currency=\"ngModel\">\n              <option *ngFor=\"let option of currencyList\" [value]=\"option.value\">{{option.label}}</option>\n            </select>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"text-center\">\n    <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"!outletID\">Create Restaurant</button>\n    <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"outletID\">Update</button>\n    <button type=\"button\" class=\"btn btn-lg btn-inverse waves-effect waves-light\" [routerLink]=\"['../..']\">Cancel</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/outlet/outlets/outlet-form/outlet-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/outlet/outlets/outlet-form/outlet-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: OutletFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletFormComponent", function() { return OutletFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/firestore.service */ "./src/app/core/firestore.service.ts");
/* harmony import */ var _firestore_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../firestore.path */ "./src/app/modules/firestore.path.ts");
/* harmony import */ var _outlet_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../outlet.model */ "./src/app/modules/outlet/outlets/outlet.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OutletFormComponent = /** @class */ (function () {
    function OutletFormComponent(router, route, toastr, fireDB) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.fireDB = fireDB;
    }
    OutletFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderTypeList = _outlet_model__WEBPACK_IMPORTED_MODULE_6__["orderTypeList"];
        this.currencyList = _outlet_model__WEBPACK_IMPORTED_MODULE_6__["currencyList"];
        this.outletID = this.route.snapshot.paramMap.get('id');
        if (this.outletID) {
            this.fireDB.doc$(_firestore_path__WEBPACK_IMPORTED_MODULE_5__["OutletFirePath"] + "/" + this.outletID).subscribe(function (outletData) {
                _this.outlet = outletData;
            });
        }
        else {
            this.outlet = {};
        }
    };
    OutletFormComponent.prototype.uploadFile = function (event, type) {
        var _this = this;
        if (event && type) {
            if (type === 'image') {
                if (this.outletID) {
                    this.toastr.info('File uploading..', 'Wait!');
                    var uploadTask = this.fireDB.uploadFileToStorage("outlet/" + this.outletID + "/logo/original.jpg", event.target.files[0]);
                    uploadTask.then().then(function (snapshot) {
                        snapshot.ref.getDownloadURL().then(function (imageUrl) {
                            if (_this.outlet) {
                                _this.outlet.image = imageUrl;
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
    OutletFormComponent.prototype.deleteFile = function (type) {
        if (type === 'image') {
            if (this.outletID) {
                this.fireDB.deleteFileStorage("outlet/" + this.outletID + "/logo/original.jpg");
                if (this.outlet) {
                    this.outlet.image = '';
                }
            }
            else {
                this.bigIconFile = null;
            }
        }
    };
    OutletFormComponent.prototype.addOutlet = function (outletForm) {
        var _this = this;
        if (!outletForm.invalid) {
            if (outletForm.form.value.opHrs) {
                outletForm.form.value.opHrs = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["toArray"])(outletForm.form.value.opHrs);
            }
            if (this.outletID) {
                this.fireDB.set(_firestore_path__WEBPACK_IMPORTED_MODULE_5__["OutletFirePath"] + "/" + this.outletID, outletForm.form.value);
                this.toastr.success('Restaurant Updated', 'Success!');
                this.router.navigate(['../..'], { relativeTo: this.route });
            }
            else {
                this.fireDB.add(_firestore_path__WEBPACK_IMPORTED_MODULE_5__["OutletFirePath"], outletForm.form.value)
                    .then(function (documentRef) {
                    var outletID = documentRef.id;
                    if (_this.bigIconFile) {
                        var uploadTask = _this.fireDB.uploadFileToStorage("outlet/" + outletID + "/logo/original.jpg", _this.bigIconFile);
                        _this.toastr.info('File uploading..', 'Wait!');
                        uploadTask.then().then(function (snapshot) {
                            snapshot.ref.getDownloadURL().then(function (imageUrl) {
                                documentRef.update({
                                    info: {
                                        image: imageUrl,
                                    },
                                });
                                _this.router.navigate(['../..'], { relativeTo: _this.route });
                                _this.toastr.success('Restaurant Created', 'Success!');
                            });
                        });
                    }
                    else {
                        _this.router.navigate(['../..'], { relativeTo: _this.route });
                        _this.toastr.success('Restaurant Created', 'Success!');
                    }
                });
            }
        }
        else {
            this.fireDB.validateAllFormFields(outletForm.form);
            this.toastr.error('Fill up the form correctly!', 'Error!');
        }
    };
    OutletFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlets-outlet-form',
            template: __webpack_require__(/*! ./outlet-form.component.html */ "./src/app/modules/outlet/outlets/outlet-form/outlet-form.component.html"),
            styles: [__webpack_require__(/*! ./outlet-form.component.css */ "./src/app/modules/outlet/outlets/outlet-form/outlet-form.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _core_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
    ], OutletFormComponent);
    return OutletFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/outlets/outlet-list/outlet-list.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/outlet/outlets/outlet-list/outlet-list.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/outlet/outlets/outlet-list/outlet-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/outlet/outlets/outlet-list/outlet-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-2\"></div>\n  <div class=\"col-lg-8\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"text-center\">\n          <button class=\"btn btn-success\" type=\"button\" [routerLink]=\"['add', 'new']\">\n            <i class=\"fa fa-plus\"></i> &nbsp; Add Restaurant</button>\n        </div>\n        <br>\n        <div>\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>Restaurant Name</th>\n                <th>Manage</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let outlet of outletList | async\">\n                <td>{{ outlet.name }}</td>\n                <td>\n                  <button class=\"btn btn-info\" type=\"button\" [routerLink]=\"['/outlet/dash', outlet.id, 'menu-builder']\">\n                    Manage\n                  </button>\n                </td>\n                <td class=\"actionList\">\n                  <button class=\"btn btn-sm btn-info\" type=\"button\" [routerLink]=\"['edit', outlet.id]\">\n                    <i class=\"fa fa-pencil\"></i>\n                  </button>\n                  <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"deleteOutlet($event, outlet.id)\">\n                    <i class=\"fa fa-trash\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/outlets/outlet-list/outlet-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/outlet/outlets/outlet-list/outlet-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: OutletListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletListComponent", function() { return OutletListComponent; });
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




var OutletListComponent = /** @class */ (function () {
    function OutletListComponent(toastr, fireDB) {
        this.toastr = toastr;
        this.fireDB = fireDB;
    }
    OutletListComponent.prototype.ngOnInit = function () {
        this.outletList = this.fireDB.colWithIds$(_firestore_path__WEBPACK_IMPORTED_MODULE_3__["OutletFirePath"]);
    };
    OutletListComponent.prototype.deleteOutlet = function (event, outletID) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.fireDB.delete(_firestore_path__WEBPACK_IMPORTED_MODULE_3__["OutletFirePath"] + "/" + outletID);
            this.toastr.success('Restaurant Deleted', 'Success!');
        }
        return;
    };
    OutletListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlets-outlet-list',
            template: __webpack_require__(/*! ./outlet-list.component.html */ "./src/app/modules/outlet/outlets/outlet-list/outlet-list.component.html"),
            styles: [__webpack_require__(/*! ./outlet-list.component.css */ "./src/app/modules/outlet/outlets/outlet-list/outlet-list.component.css")],
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _core_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
    ], OutletListComponent);
    return OutletListComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/outlets/outlet.model.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/outlet/outlets/outlet.model.ts ***!
  \********************************************************/
/*! exports provided: orderTypeList, currencyList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderTypeList", function() { return orderTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currencyList", function() { return currencyList; });
var orderTypeList = [
    { label: 'For Here', value: 'For Here' },
    { label: 'To Go', value: 'To Go' },
];
var currencyList = [
    { label: 'US Doller ($)', value: 'USD' },
];


/***/ }),

/***/ "./src/app/modules/outlet/pos/pos-item/pos-item.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modules/outlet/pos/pos-item/pos-item.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-fetch{\n  width: 120px;\n  margin-right: 10px;\n}\n.btn-auto-match{\n  margin-left: 10px;\n}\n"

/***/ }),

/***/ "./src/app/modules/outlet/pos/pos-item/pos-item.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modules/outlet/pos/pos-item/pos-item.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-2\"></div>\n  <div class=\"col-lg-8\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"text-center\">\n          <button type=\"button\" class=\"btn btn-outline-success btn-fetch\"><i class=\"fa fa-arrow-down\"></i> Fetch</button>\n          <button type=\"button\" class=\"btn btn-outline-success btn-auto-match\"><i class=\"fa fa-refresh\"></i> Auto Match</button>\n        </div>\n        <br>\n        <div>\n          <form class=\"form-horizontal\" id=\"posItem\" #PosItem=\"ngForm\" (ngSubmit)=\"addPosItem(PosItem)\">\n            <table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Menu Item</th>\n                  <th>Dropdown</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let list of menuItemListData;let i = index\" [ngModelGroup]=\"i\">\n                  <td>{{ list.name }}</td>\n\n                  <td class=\"actionList\">\n                    <select class=\"form-control\" name=\"prd\" [ngModel]=\"row?.prd\" #prd=\"ngModel\">\n                      <option value=\"product1\">product 1</option>\n                      <option value=\"product2\">product 2</option>\n                    </select>\n                  </td>\n                </tr>\n              </tbody>\n\n            </table>\n\n            <div class=\"text-center\">\n              <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\">Submit</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/pos/pos-item/pos-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/outlet/pos/pos-item/pos-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: PosItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosItemComponent", function() { return PosItemComponent; });
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





var PosItemComponent = /** @class */ (function () {
    function PosItemComponent(fireDB, route, toastr) {
        this.fireDB = fireDB;
        this.route = route;
        this.toastr = toastr;
    }
    PosItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
        this.fireDB.colWithIds$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["MenuItemFirePath"]).subscribe(function (menuItemsData) {
            _this.menuItemListData = menuItemsData;
        });
        this.posItemList = this.fireDB.colWithIds$(_firestore_path__WEBPACK_IMPORTED_MODULE_4__["POSItemFirePath"]);
    };
    PosItemComponent.prototype.addPosItem = function (posItemForm) {
        var _this = this;
        console.log(posItemForm);
        if (!posItemForm.invalid) {
            this.fireDB.add(_firestore_path__WEBPACK_IMPORTED_MODULE_4__["POSItemFirePath"], posItemForm.form.value)
                .then(function (documentRef) {
                var menuItemID = documentRef.id;
                _this.toastr.success('Updated', 'Success!');
            });
        }
    };
    PosItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-pos-item',
            template: __webpack_require__(/*! ./pos-item.component.html */ "./src/app/modules/outlet/pos/pos-item/pos-item.component.html"),
            styles: [__webpack_require__(/*! ./pos-item.component.css */ "./src/app/modules/outlet/pos/pos-item/pos-item.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], PosItemComponent);
    return PosItemComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/pos/pos-modifier/pos-modifier.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/outlet/pos/pos-modifier/pos-modifier.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/outlet/pos/pos-modifier/pos-modifier.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/outlet/pos/pos-modifier/pos-modifier.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-2\"></div>\n  <div class=\"col-lg-8\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"text-center\">\n        </div>\n        <br>\n        <div>\n          <form class=\"form-horizontal\" id=\"posModifier\" #PosItem=\"ngForm\" (ngSubmit)=\"addPosModifier(posModifier)\">\n            <table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>Modifier</th>\n                  <th>DropDown</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let modifier of modifierList;let i = index\" [ngModelGroup]=\"i\">\n                  <td>{{ modifier.name }}</td>\n\n                  <td class=\"actionList\">\n                    <select class=\"form-control\" name=\"prd\" [ngModel]=\"row?.prd\" #prd=\"ngModel\">\n                      <option value=\"product1\">product 1</option>\n                      <option value=\"product2\">product 2</option>\n                    </select>\n                  </td>\n                </tr>\n              </tbody>\n\n            </table>\n          </form>\n\n          <div class=\"text-center\">\n            <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\">Submit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/pos/pos-modifier/pos-modifier.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/outlet/pos/pos-modifier/pos-modifier.component.ts ***!
  \***************************************************************************/
/*! exports provided: PosModifierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosModifierComponent", function() { return PosModifierComponent; });
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






var PosModifierComponent = /** @class */ (function () {
    function PosModifierComponent(fireDB, route, toastr) {
        this.fireDB = fireDB;
        this.route = route;
        this.toastr = toastr;
    }
    PosModifierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
        this.fireDB.colWithIds$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["ModifierFirePath"]).subscribe(function (modifierData) {
            _this.modifierList = modifierData;
        });
        this.posModifier = this.fireDB.colWithIds$(_firestore_path__WEBPACK_IMPORTED_MODULE_4__["POSModifierFirePath"]);
    };
    PosModifierComponent.prototype.addPosModifier = function (posModifierForm) {
        var _this = this;
        console.log(posModifierForm);
        if (!posModifierForm.invalid) {
            this.fireDB.add(_firestore_path__WEBPACK_IMPORTED_MODULE_4__["POSModifierFirePath"], posModifierForm.form.value)
                .then(function (documentRef) {
                var menuItemID = documentRef.id;
                _this.toastr.success('Updated', 'Success!');
            });
        }
    };
    PosModifierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-pos-modifier',
            template: __webpack_require__(/*! ./pos-modifier.component.html */ "./src/app/modules/outlet/pos/pos-modifier/pos-modifier.component.html"),
            styles: [__webpack_require__(/*! ./pos-modifier.component.css */ "./src/app/modules/outlet/pos/pos-modifier/pos-modifier.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], PosModifierComponent);
    return PosModifierComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/user/user-form/user-form.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/outlet/user/user-form/user-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-img-big-icon {\n    max-width: 125px;\n    max-height: 125px;\n  }\n  "

/***/ }),

/***/ "./src/app/modules/outlet/user/user-form/user-form.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/outlet/user/user-form/user-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <h1 class=\"text-center title\" *ngIf=\"!userID\">Add User</h1>\n    <h1 class=\"text-center title\" *ngIf=\"userID\">Edit User</h1>\n    <br>\n    <form class=\"form-horizontal\" id=\"userForm\" #UserForm=\"ngForm\" (ngSubmit)=\"addUser(UserForm)\">\n      <div class=\"row\">\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-8\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"form-group\">\n                <label>User Name\n                  <span>*</span>\n                </label>\n                <input class=\"form-control\" type=\"text\" name=\"name\" required [ngModel]=\"user?.name\" #name=\"ngModel\">\n                <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"name.errors.required\">User Name is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Email\n                  <span>*</span>\n                </label>\n                <input class=\"form-control\" type=\"email\" name=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" [ngModel]=\"user?.email\"\n                  #email=\"ngModel\">\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"email.errors.required\">E-mail is required.</div>\n                  <div *ngIf=\"email.errors.pattern && email?.value != ''\">Email should be in proper format.</div>\n                </div>\n                <span class=\"help-block\">\n                  <small> Email address should be unique and cannot be used anywhere else on the system for other roles / outlets.</small>\n                </span>\n              </div>\n              <div class=\"form-group\">\n                <label>Password\n                  <span>*</span>\n                </label>\n                <input class=\"form-control\" type=\"password\" name=\"pass\" required minlength=\"6\" [ngModel]=\"user?.pass\" #pass=\"ngModel\">\n                <div *ngIf=\"pass.invalid && (pass.dirty || pass.touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"pass.errors.required\">Password is required.</div>\n                  <div *ngIf=\"pass.errors.minlength\">Must be at least 6 characters long.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label>Position </label>\n                <br />\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"custom-control custom-radio\">\n                      <input type=\"radio\" class=\"custom-control-input\" id=\"outletOwner\" required name=\"role\" [ngModel]=\"user?.role\" #role=\"ngModel\"\n                        value=\"Owner\">\n                      <label class=\"custom-control-label\" for=\"outletOwner\">Outlet Owner</label>\n                    </div>\n                    <span class=\"help-block\">\n                      <small> Will have complete access to the outlet from Admin App & Admin Panel.</small>\n                    </span>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <div class=\"custom-control custom-radio\">\n                      <input type=\"radio\" class=\"custom-control-input\" id=\"outletManager\" required name=\"role\" [ngModel]=\"user?.role\" #role=\"ngModel\"\n                        value=\"Manager\">\n                      <label class=\"custom-control-label\" for=\"outletManager\">Outlet Manager</label>\n                    </div>\n                    <span class=\"help-block\">\n                      <small> Will have access to Admin App only. No Admin Panel Access.</small>\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-2\"></div>\n      </div>\n      <div class=\"text-center\">\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"userID\">Update</button>\n        <button type=\"submit\" class=\"btn btn-lg btn-success waves-effect waves-light m-r-10\" *ngIf=\"!userID\">Submit</button>\n        <button type=\"button\" class=\"btn btn-lg btn-inverse waves-effect waves-light\" [routerLink]=\"['../..']\">Cancel</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/user/user-form/user-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/outlet/user/user-form/user-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
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





var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(router, route, toastr, fireDB) {
        this.router = router;
        this.route = route;
        this.toastr = toastr;
        this.fireDB = fireDB;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
        this.userID = this.route.snapshot.paramMap.get('id');
        if (this.userID) {
            this.fireDB.doc$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["UserFirePath"] + "/" + this.userID).subscribe(function (userData) {
                _this.user = userData;
            });
        }
        else {
            this.user = {};
        }
    };
    UserFormComponent.prototype.addUser = function (userForm) {
        if (!userForm.invalid) {
            if (this.userID) {
                this.fireDB.set("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["UserFirePath"] + "/" + this.userID, userForm.form.value);
                this.toastr.success('User Updated', 'Success!');
            }
            else {
                this.fireDB.add("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["UserFirePath"], userForm.form.value);
                this.toastr.success('User Updated', 'Success!');
            }
            this.router.navigate(['../..'], { relativeTo: this.route });
        }
        else {
            this.fireDB.validateAllFormFields(userForm.form);
            this.toastr.error('Fill up the form correctly!', 'Error!');
        }
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/modules/outlet/user/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/modules/outlet/user/user-form/user-form.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _core_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/outlet/user/user-list/user-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/outlet/user/user-list/user-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/outlet/user/user-list/user-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/outlet/user/user-list/user-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-2\"></div>\n  <div class=\"col-lg-8\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"text-center\">\n          <button class=\"btn btn-success\" type=\"button\" [routerLink]=\"['add/new']\">\n            <i class=\"fa fa-plus\"></i> &nbsp; Add User</button>\n        </div>\n        <br>\n        <div>\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr>\n                <th>User Name</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let user of userList | async\">\n                <td>{{ user.name }}</td>\n                <td class=\"actionList\">\n                  <button class=\"btn btn-sm btn-danger\" type=\"button\" (click)=\"deleteUser($event, user.id)\">\n                    <i class=\"fa fa-trash\"></i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-2\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/outlet/user/user-list/user-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/outlet/user/user-list/user-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
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





var UserListComponent = /** @class */ (function () {
    function UserListComponent(fireDB, route, toastr) {
        this.fireDB = fireDB;
        this.route = route;
        this.toastr = toastr;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.outletID = this.route.pathFromRoot[this.route.pathFromRoot.length - 3].snapshot.paramMap.get('outletid');
        this.userList = this.fireDB.colWithIds$("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["UserFirePath"]);
    };
    UserListComponent.prototype.deleteUser = function (event, userID) {
        var response = confirm('are you sure you want to delete?');
        if (response) {
            this.fireDB.delete("outlets/" + this.outletID + "/" + _firestore_path__WEBPACK_IMPORTED_MODULE_4__["UserFirePath"] + "/" + userID);
            this.toastr.success('User Deleted', 'Success!');
        }
        return;
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'outlet-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/modules/outlet/user/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/modules/outlet/user/user-list/user-list.component.css")],
        }),
        __metadata("design:paramtypes", [_core_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-outlet-outlet-module.js.map