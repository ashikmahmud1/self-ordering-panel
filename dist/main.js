(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/authentication.module": [
		"./src/app/authentication/authentication.module.ts",
		"authentication-authentication-module"
	],
	"./dashboards/dashboard/dashboard.module": [
		"./src/app/dashboards/dashboard/dashboard.module.ts",
		"dashboards-dashboard-dashboard-module"
	],
	"./modules/brand/brand.module": [
		"./src/app/modules/brand/brand.module.ts",
		"modules-brand-brand-module~modules-outlet-outlet-module~payment-payment-module",
		"modules-brand-brand-module~modules-outlet-outlet-module",
		"modules-brand-brand-module"
	],
	"./modules/outlet/outlet.module": [
		"./src/app/modules/outlet/outlet.module.ts",
		"modules-brand-brand-module~modules-outlet-outlet-module~payment-payment-module",
		"modules-brand-brand-module~modules-outlet-outlet-module",
		"modules-outlet-outlet-module"
	],
	"./payment/payment.module": [
		"./src/app/payment/payment.module.ts",
		"modules-brand-brand-module~modules-outlet-outlet-module~payment-payment-module",
		"payment-payment-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_guard_admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guard/admin.guard */ "./src/app/core/guard/admin.guard.ts");
/* harmony import */ var _core_auth_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/auth.resolver */ "./src/app/core/auth.resolver.ts");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Approutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_5__["FullComponent"],
        children: [
            { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboards/dashboard/dashboard.module#DashboardModule', resolve: { auth: _core_auth_resolver__WEBPACK_IMPORTED_MODULE_3__["AuthResolver"] }, canActivate: [_core_guard_admin_guard__WEBPACK_IMPORTED_MODULE_2__["AdminGuard"]] },
            { path: 'outlet', loadChildren: './modules/outlet/outlet.module#OutletModule', resolve: { auth: _core_auth_resolver__WEBPACK_IMPORTED_MODULE_3__["AuthResolver"] }, canActivate: [_core_guard_admin_guard__WEBPACK_IMPORTED_MODULE_2__["AdminGuard"]] },
            { path: 'brand', loadChildren: './modules/brand/brand.module#BrandModule', resolve: { auth: _core_auth_resolver__WEBPACK_IMPORTED_MODULE_3__["AuthResolver"] }, canActivate: [_core_guard_admin_guard__WEBPACK_IMPORTED_MODULE_2__["AdminGuard"]] },
            { path: 'payment', loadChildren: './payment/payment.module#PaymentModule', resolve: { auth: _core_auth_resolver__WEBPACK_IMPORTED_MODULE_3__["AuthResolver"] }, canActivate: [_core_guard_admin_guard__WEBPACK_IMPORTED_MODULE_2__["AdminGuard"]] }
        ],
    },
    {
        path: '',
        component: _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_4__["BlankComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: './authentication/authentication.module#AuthenticationModule',
            },
        ],
    },
    {
        path: '**',
        redirectTo: '/auth/404',
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(Approutes, { useHash: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_core_auth_resolver__WEBPACK_IMPORTED_MODULE_3__["AuthResolver"], _core_guard_admin_guard__WEBPACK_IMPORTED_MODULE_2__["AdminGuard"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet (activate)=\"onActivate($event, outlet)\" #outlet>\n  <app-spinner></app-spinner>\n</router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onActivate = function (event, outlet) {
        // outlet.scrollTop = 0;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/blank/blank.component */ "./src/app/layouts/blank/blank.component.ts");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/header-navigation/navigation.component */ "./src/app/shared/header-navigation/navigation.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig;
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
};
var AppModule = /** @class */ (function () {
    function AppModule(afs) {
        this.afs = afs;
        var firestore = afs.firestore.settings({ timestampsInSnapshots: true });
        afs.firestore.enablePersistence();
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _shared_spinner_component__WEBPACK_IMPORTED_MODULE_20__["SpinnerComponent"],
                _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_17__["FullComponent"],
                _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_16__["BlankComponent"],
                _shared_header_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_18__["NavigationComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_15__["CoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(firebaseConfig),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_9__["AngularFireStorageModule"],
            ],
            providers: [{
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
                }, {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_0__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_0__["HashLocationStrategy"],
                }],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
            ],
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/auth.resolver.ts":
/*!***************************************!*\
  !*** ./src/app/core/auth.resolver.ts ***!
  \***************************************/
/*! exports provided: AuthResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResolver", function() { return AuthResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthResolver = /** @class */ (function () {
    function AuthResolver(auth) {
        this.auth = auth;
    }
    AuthResolver.prototype.resolve = function (route, state) {
        return this.auth.authResolver();
    };
    AuthResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthResolver);
    return AuthResolver;
}());



/***/ }),

/***/ "./src/app/core/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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






var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.restaID = '';
        this.userAuth = this.afAuth.auth;
        this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (userData) {
            if (userData) {
                return _this.afs.doc("admin/" + userData.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
        }));
    }
    AuthService.prototype.authResolver = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.restaID !== '' && _this.user) {
                resolve({});
            }
            _this.afAuth.authState
                .subscribe(function (userData) {
                if (userData && userData.uid) {
                    if (!userData.emailVerified) {
                        _this.router.navigate(['/auth/email-verify']);
                        resolve();
                    }
                    _this.afs.doc("admin/" + userData.uid).valueChanges().subscribe(function (userDetail) {
                        _this.userDetail = userDetail;
                        _this.restaID = _this.userDetail.restaID;
                        resolve({});
                    });
                }
                else {
                    resolve({});
                }
            });
        });
    };
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            return _this.updateUserOnSignup(user.user);
        });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.sendEmailVerification = function () {
        var fbAuth = this.userAuth.currentUser;
        if (fbAuth) {
            return fbAuth.sendEmailVerification(null);
        }
        else {
            return false;
        }
    };
    AuthService.prototype.isUserEmailVerified = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fbAuth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fbAuth = this.userAuth.currentUser;
                        return [4 /*yield*/, fbAuth.reload()];
                    case 1:
                        _a.sent();
                        if (fbAuth) {
                            return [2 /*return*/, fbAuth.emailVerified];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.resetPassword = function (email) {
        var fbAuth = this.userAuth;
        return fbAuth.sendPasswordResetEmail(email);
    };
    AuthService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.router.navigate(['/']);
        });
    };
    AuthService.prototype.isAdmin = function (user) {
        var allowed = ['admin'];
        return this.checkAuthorization(user, allowed);
    };
    // determines if user has matching role
    AuthService.prototype.checkAuthorization = function (user, allowedRoles) {
        if (!user) {
            return false;
        }
        for (var _i = 0, allowedRoles_1 = allowedRoles; _i < allowedRoles_1.length; _i++) {
            var role = allowedRoles_1[_i];
            if (user.roles && user.roles[role]) {
                return true;
            }
        }
        return false;
    };
    // Sets user data to firestore after succesful signup
    AuthService.prototype.updateUserOnSignup = function (FbUser) {
        return __awaiter(this, void 0, void 0, function () {
            var newResta, userRef, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.afs.collection('resta').add({})];
                    case 1:
                        newResta = _a.sent();
                        userRef = this.afs.doc("admin/" + FbUser.uid);
                        data = {
                            uid: FbUser.uid,
                            email: FbUser.email,
                            emailVerified: FbUser.emailVerified || false,
                            restaID: newResta.id,
                            brandSetup: false,
                            roles: {
                                admin: true,
                            },
                        };
                        return [2 /*return*/, userRef.set(data, { merge: true })];
                }
            });
        });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./firestore.service */ "./src/app/core/firestore.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestoreModule"],
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/firestore.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/firestore.service.ts ***!
  \*******************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/core/auth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FirestoreService = /** @class */ (function () {
    function FirestoreService(afs, afStorage, auth) {
        this.afs = afs;
        this.afStorage = afStorage;
        this.auth = auth;
        this.initializeTimeSlot();
    }
    /// **************
    /// Get a Reference
    /// **************
    FirestoreService.prototype.col = function (ref, queryFn) {
        return typeof ref === 'string' ? this.afs.collection("resta/" + this.auth.restaID + "/" + ref, queryFn) : ref;
    };
    FirestoreService.prototype.doc = function (ref) {
        return typeof ref === 'string' ? this.afs.doc("resta/" + this.auth.restaID + "/" + ref) : ref;
    };
    /// **************
    /// Get Data
    /// **************
    FirestoreService.prototype.doc$ = function (ref) {
        return this.doc(ref).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (doc) {
            return doc.payload.data();
        }));
    };
    FirestoreService.prototype.col$ = function (ref, queryFn) {
        return this.col(ref, queryFn).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (docs) {
            return docs.map(function (a) { return a.payload.doc.data(); });
        }));
    };
    FirestoreService.prototype.colRoot = function (ref, queryFn) {
        return typeof ref === 'string' ? this.afs.collection("" + ref, queryFn) : ref;
    };
    FirestoreService.prototype.docRoot = function (ref) {
        return typeof ref === 'string' ? this.afs.doc("" + ref) : ref;
    };
    FirestoreService.prototype.docRoot$ = function (ref) {
        return this.docRoot(ref).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (doc) {
            return doc.payload.data();
        }));
    };
    FirestoreService.prototype.colRoot$ = function (ref, queryFn) {
        return this.colRoot(ref, queryFn).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (docs) {
            return docs.map(function (a) { return a.payload.doc.data(); });
        }));
    };
    /// with Ids
    FirestoreService.prototype.colWithIds$ = function (ref, queryFn) {
        return this.col(ref, queryFn).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        }));
    };
    /// **************
    /// Write Data
    /// **************
    /// Firebase Server Timestamp
    /*
      get timestamp() {
        return firebase.firestore.FieldValue.serverTimestamp();
      }
    */
    FirestoreService.prototype.set = function (ref, data) {
        var filterData = JSON.parse(JSON.stringify(data));
        return this.doc(ref).set(filterData);
    };
    FirestoreService.prototype.update = function (ref, data) {
        return this.doc(ref).update(data);
    };
    FirestoreService.prototype.delete = function (ref) {
        return this.doc(ref).delete();
    };
    FirestoreService.prototype.add = function (ref, data) {
        var filterData = JSON.parse(JSON.stringify(data));
        return this.col(ref).add(filterData);
    };
    /*
      geopoint(lat: number, lng: number) {
        return new firebase.firestore.GeoPoint(lat, lng);
      }
    */
    /// If doc exists update, otherwise set
    FirestoreService.prototype.upsert = function (ref, data) {
        var _this = this;
        var doc = this.doc(ref).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).toPromise();
        return doc.then(function (snap) {
            return snap.payload.exists ? _this.update(ref, data) : _this.set(ref, data);
        });
    };
    FirestoreService.prototype.getTimeRangeArray = function () {
        return this.timeRangeArray;
    };
    /// **************
    /// Inspect Data
    /// **************
    FirestoreService.prototype.inspectDoc = function (ref) {
        var tick = new Date().getTime();
        this.doc(ref).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (d) {
            var tock = new Date().getTime() - tick;
            console.log("Loaded Document in " + tock + "ms", d);
        })).subscribe();
    };
    FirestoreService.prototype.inspectCol = function (ref) {
        var tick = new Date().getTime();
        this.col(ref).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (c) {
            var tock = new Date().getTime() - tick;
            console.log("Loaded Collection in " + tock + "ms", c);
        })).subscribe();
    };
    /// **************
    /// Create and read doc references
    /// **************
    /// create a reference between two documents
    FirestoreService.prototype.connect = function (host, key, doc) {
        return this.doc(host).update((_a = {}, _a[key] = this.doc(doc).ref, _a));
        var _a;
    };
    /// returns a documents references mapped to AngularFirestoreDocument
    /*
      docWithRefs$<T>(ref: DocPredicate<T>) {
        return this.doc$(ref).pipe(map((doc: any) => {
          for (const k of Object.keys(doc)) {
            if (doc[k] instanceof firebase.firestore.DocumentReference) {
              doc[k] = this.doc(doc[k].path);
            }
          }
          return doc;
        }));
      }
    */
    FirestoreService.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
        });
    };
    FirestoreService.prototype.getFileStorageRef = function (path) {
        return this.afStorage.ref("resImg/" + this.auth.restaID + "/" + path);
    };
    FirestoreService.prototype.uploadFileToStorage = function (path, file) {
        return this.afStorage.upload("resImg/" + this.auth.restaID + "/" + path, file);
    };
    FirestoreService.prototype.deleteFileStorage = function (path) {
        return this.afStorage.ref("resImg/" + this.auth.restaID + "/" + path).delete();
    };
    FirestoreService.prototype.initializeTimeSlot = function () {
        this.timeRangeArray = [];
        for (var hour = 0; hour <= 23; hour++) {
            var ampm = 'AM';
            var value = hour * 60;
            var hour12 = hour > 12 ? hour - 12 : hour;
            if (hour > 11) {
                ampm = 'PM';
            }
            for (var min = 0; min < 60; min += 15) {
                value += min;
                var min0 = min < 10 ? "0" + min : min;
                var hour0 = hour12 < 10 ? "0" + hour12 : hour12;
                var label = hour0 + ":" + min0 + " " + ampm;
                this.timeRangeArray.push({
                    label: label,
                    value: value,
                });
            }
        }
    };
    FirestoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], FirestoreService);
    return FirestoreService;
}());



/***/ }),

/***/ "./src/app/core/guard/admin.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guard/admin.guard.ts ***!
  \*******************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuard = /** @class */ (function () {
    function AdminGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (!user) {
                _this.router.navigate(['/auth/login']);
                return false;
            }
            else if (!_this.auth.isAdmin(user)) {
                _this.auth.signOut();
                _this.router.navigate(['/']);
                return false;
            }
            return true;
        }));
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/layouts/blank/blank.component.html":
/*!****************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/layouts/blank/blank.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blank-layout',
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/layouts/blank/blank.component.html"),
            styleUrls: [],
        })
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full.component.html":
/*!**************************************************!*\
  !*** ./src/app/layouts/full/full.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-wrapper\" [ngClass]=\"\n  {\n    'defaultdark': color == 'defaultdark',\n    'greendark': color == 'greendark',\n    'reddark': color == 'reddark',\n    'bluedark': color == 'bluedark',\n    'purpledark': color == 'purpledark',\n    'megnadark': color == 'megnadark',\n    'default': color == 'default',\n    'green': color == 'green',\n    'red': color == 'red',\n    'blue': color == 'blue',\n    'purple': color == 'purple',\n    'megna': color == 'megna',\n    'mini-sidebar': showMinisidebar,\n    'dark-theme': showDarktheme,\n    'horizontal-nav': showHorizontalNav,\n    'boxed': showBoxedtheme\n  }\n\">\n  <ap-navigation></ap-navigation>\n  <aside class=\"left-sidebar\">\n    <ap-sidebar></ap-sidebar>\n  </aside>\n  <div class=\"page-wrapper\">\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <footer class=\"footer\">\n    © 2018 DevFood\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/layouts/full/full.component.scss":
/*!**************************************************!*\
  !*** ./src/app/layouts/full/full.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-top: 60px;\n  margin-left: 235px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  position: relative;\n  overflow: hidden; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0px !important; } }\n"

/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
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


var FullComponent = /** @class */ (function () {
    function FullComponent(router) {
        this.router = router;
        this.color = 'bluedark';
        this.showSettings = false;
        this.showMinisidebar = false;
        this.showDarktheme = false;
        this.showHorizontalNav = true;
        this.showBoxedtheme = true;
        this.config = {};
    }
    FullComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/') {
            this.router.navigate(['/auth/404']);
        }
    };
    FullComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'full-layout',
            template: __webpack_require__(/*! ./full.component.html */ "./src/app/layouts/full/full.component.html"),
            styles: [__webpack_require__(/*! ./full.component.scss */ "./src/app/layouts/full/full.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FullComponent);
    return FullComponent;
}());



/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav .nav-link:hover {\n  cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"topbar\">\n  <nav class=\"navbar top-navbar navbar-expand-md navbar-light\">\n    <!-- ============================================================== -->\n    <!-- Logo -->\n    <!-- ============================================================== -->\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"index.html\">\n        <!-- Logo icon -->\n        <b>\n          <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\n          <!-- Dark Logo icon -->\n          <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n          <!-- Light Logo icon -->\n          <img src=\"assets/images/logo-light-icon.png\" alt=\"homepage\" class=\"light-logo\" />\n        </b>\n        <!--End Logo icon -->\n        <!-- Logo text -->\n        <span>\n          <!-- dark Logo text -->\n          <img src=\"assets/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n          <!-- Light Logo text -->\n          <img src=\"assets/images/logo-light-text.png\" class=\"light-logo\" alt=\"homepage\" />\n        </span>\n      </a>\n    </div>\n    <!-- ============================================================== -->\n    <!-- End Logo -->\n    <!-- ============================================================== -->\n    <div class=\"navbar-collapse\">\n      <!-- ============================================================== -->\n      <!-- toggle and nav items -->\n      <!-- ============================================================== -->\n      <ul class=\"navbar-nav mr-auto mt-md-0\">\n        <li class=\"nav-item m-l-10\">\n          <a class=\"nav-link sidebartoggler hidden-lg-up text-muted waves-effect waves-dark\" href=\"javascript:void(0)\">\n            <i class=\"ti-menu\"></i>\n          </a>\n        </li>\n      </ul>\n      <!-- ============================================================== -->\n      <!-- User profile and search -->\n      <!-- ============================================================== -->\n      <ul class=\"navbar-nav my-lg-0\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"userLogout()\">\n            <i class=\"ti-user\"></i>\n            Logout\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/shared/header-navigation/navigation.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/header-navigation/navigation.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(auth, toastr, modalService) {
        this.auth = auth;
        this.toastr = toastr;
        this.modalService = modalService;
        this.config = {};
    }
    NavigationComponent.prototype.userLogout = function () {
        this.auth.signOut();
        this.toastr.success('You are logged out successfully.', 'Success!');
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
        var set = function () {
            var width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
            var topOffset = 0;
            if (width < 1170) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#main-wrapper').addClass('mini-sidebar');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_2__('#main-wrapper').removeClass('mini-sidebar');
            }
        };
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).ready(set);
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).on('resize', set);
        jquery__WEBPACK_IMPORTED_MODULE_2__('body').trigger('resize');
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ap-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/shared/header-navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/shared/header-navigation/navigation.component.css")],
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/menu-items.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/sidebar/menu-items.ts ***!
  \**********************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
var ROUTES = [
    {
        path: '/dashboard/main', title: 'Dashboard', icon: 'mdi mdi-chart-arc', class: '', label: '', labelClass: '', extralink: false, submenu: [],
    },
    {
        path: '/outlet/outlets', title: 'Restaurant', icon: 'mdi mdi-bullseye', class: '', label: '', labelClass: '', extralink: false, submenu: [],
    },
    {
        path: '/brand/users/list', title: 'Users', icon: 'mdi mdi-chart-arc', class: '', label: '', labelClass: '', extralink: false, submenu: [],
    },
    {
        path: '/brand/reports/list', title: 'Reports', icon: 'mdi mdi-chart-arc', class: '', label: '', labelClass: '', extralink: false, submenu: [],
    },
    {
        path: '/payment', title: 'Payment', icon: 'mdi mdi-chart-arc', class: '', label: '', labelClass: '', extralink: false, submenu: []
    },
    {
        path: '', title: 'Settings', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
        submenu: [
            { path: '/brand/brands/setting', title: 'Brand', icon: 'mdi mdi-widgets', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
            { path: '/brand/ad-banner/list', title: 'Ad Banner', icon: 'mdi mdi-widgets', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
        ],
    },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar-nav\">\n  <ul id=\"sidebarnav\">\n    <!-- First level menu -->\n      <li [class.active]=\"showMenu === sidebarnavItem.title\" *ngFor=\"let sidebarnavItem of sidebarnavItems\" [routerLinkActive]=\"sidebarnavItem.submenu.length != 0 ? '' : 'active'\" >\n        <div class=\"nav-small-cap\" *ngIf=\"sidebarnavItem.extralink === true\">{{sidebarnavItem.title}}</div>\n        <a [routerLink]=\"sidebarnavItem.class === '' ? [sidebarnavItem.path] : null\" [ngClass]=\"[sidebarnavItem.class]\" *ngIf=\"!sidebarnavItem.extralink;\" (click)=\"addExpandClass(sidebarnavItem.title)\">\n          <i [ngClass]=\"[sidebarnavItem.icon]\"></i>\n          <span class=\"hide-menu\">{{sidebarnavItem.title}}\n          <span *ngIf=\"sidebarnavItem.label != '' \" [ngClass]=\"[sidebarnavItem.labelClass]\">{{sidebarnavItem.label}}</span>\n          </span>  \n        </a>\n        <!-- Second level menu -->\n        <ul class=\"collapse\" *ngIf=\"sidebarnavItem.submenu.length > 0\" [ngClass]=\"{'in' : showMenu === sidebarnavItem.title }\">\n          <li *ngFor=\"let sidebarnavSubItem of sidebarnavItem.submenu\" [class.active]=\"showSubMenu === sidebarnavSubItem.title\" [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'active'\">\n            <a [routerLink]=\"sidebarnavSubItem.submenu.length > 0 ? null : [sidebarnavSubItem.path]\" [routerLinkActive]=\"sidebarnavSubItem.submenu.length > 0 ? '' : 'router-link-active'\" [ngClass]=\"[sidebarnavSubItem.class]\"  *ngIf=\"!sidebarnavSubItem.extralink;\" (click)=\"addActiveClass(sidebarnavSubItem.title)\">\n              <i [ngClass]=\"[sidebarnavSubItem.icon]\"></i>\n              {{sidebarnavSubItem.title}}\n            </a>\n            <!-- Third level menu -->\n            <ul class=\"collapse\" *ngIf=\"sidebarnavSubItem.submenu.length > 0\" [ngClass]=\"{'in' : showSubMenu === sidebarnavSubItem.title }\">\n              <li *ngFor=\"let sidebarnavSubsubItem of sidebarnavSubItem.submenu\" routerLinkActive=\"active\" [ngClass]=\"[sidebarnavSubsubItem.class]\">\n                <a [routerLink]=\"[sidebarnavSubsubItem.path]\" *ngIf=\"!sidebarnavSubsubItem.extralink;\" [routerLinkActive]=\"sidebarnavSubsubItem.submenu.length > 0 ? '' : 'router-link-active'\">\n                  <i [ngClass]=\"[sidebarnavSubsubItem.icon]\"></i>\n                  {{sidebarnavSubsubItem.title}}\n                </a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n  </ul>\n</nav> "

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-items */ "./src/app/shared/sidebar/menu-items.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(modalService, router, route) {
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.showMenu = '';
        this.showSubMenu = '';
    }
    // this is for the open close
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.addActiveClass = function (element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    };
    // End open close
    SidebarComponent.prototype.ngOnInit = function () {
        this.sidebarnavItems = _menu_items__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].filter(function (sidebarnavItem) { return sidebarnavItem; });
        jquery__WEBPACK_IMPORTED_MODULE_3__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__('.sidebartoggler').on('click', function () {
                if (jquery__WEBPACK_IMPORTED_MODULE_3__('#main-wrapper').hasClass('mini-sidebar')) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('body').trigger('resize');
                    jquery__WEBPACK_IMPORTED_MODULE_3__('#main-wrapper').removeClass('mini-sidebar');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('body').trigger('resize');
                    jquery__WEBPACK_IMPORTED_MODULE_3__('#main-wrapper').addClass('mini-sidebar');
                }
            });
        });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ap-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(router, document) {
        var _this = this;
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                _this.isSpinnerVisible = false;
            }
        }, function () {
            _this.isSpinnerVisible = false;
        });
    }
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.isSpinnerVisible = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Object)
    ], SpinnerComponent.prototype, "backgroundColor", void 0);
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinner',
            template: "<div class=\"preloader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"spinner\">\n      <div class=\"double-bounce1\"></div>\n      <div class=\"double-bounce2\"></div>\n    </div>\n  </div>",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Document])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBgTDYK0qnB2blPz25NExrgHQq5q8YM8rs",
        authDomain: "self-ordering-66dc1.firebaseapp.com",
        databaseURL: "https://self-ordering-66dc1.firebaseio.com",
        projectId: "self-ordering-66dc1",
        storageBucket: "self-ordering-66dc1.appspot.com",
        messagingSenderId: "410844198683",
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ubuntu/workspace/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map