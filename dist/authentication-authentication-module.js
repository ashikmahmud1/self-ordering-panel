(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/404/not-found.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/404/not-found.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.error-box {\n  height: 100%;\n  position: fixed;\n  background: url(../../../assets/images/background/error-bg.jpg) no-repeat center center #fff;\n  width: 100%; }\n  .error-box .footer {\n  width: 100%;\n  left: 0px;\n  right: 0px; }\n\n.error-body {\n  padding-top: 5%; }\n  .error-body h1 {\n  font-size: 210px;\n  font-weight: 900;\n  text-shadow: 4px 4px 0 #ffffff, 6px 6px 0 #263238;\n  line-height: 210px; }\n\n@media(max-width:767px) {\n  .error-box {\n    position: relative;\n    padding-bottom: 60px;\n  }\n  .error-body {\n    padding-top: 10%;\n  }\n  .error-body h1 {\n      font-size: 100px;\n      font-weight: 600;\n      line-height: 100px;\n    }\n}*/\n\n"

/***/ }),

/***/ "./src/app/authentication/404/not-found.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/404/not-found.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"error-box\">\n  <div class=\"error-body text-center\">\n    <h1>404</h1>\n    <h3 class=\"text-uppercase\">Page Not Found !</h3>\n    <p class=\"text-muted m-t-30 m-b-30\">YOU SEEM TO BE TRYING TO FIND HIS WAY HOME</p>\n    <a class=\"btn btn-info btn-rounded waves-effect waves-light m-b-40\" [routerLink]=\"['/auth/login']\">Back to home</a> </div>\n  <footer class=\"footer text-center\">© 2018 Admin Panel.</footer>\n</div>"

/***/ }),

/***/ "./src/app/authentication/404/not-found.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/404/not-found.component.ts ***!
  \***********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.preloader').fadeOut();
        });
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/authentication/404/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/authentication/404/not-found.component.css")],
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./404/not-found.component */ "./src/app/authentication/404/not-found.component.ts");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
/* harmony import */ var _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-verify/email-verify.component */ "./src/app/authentication/email-verify/email-verify.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_5__["AuthenticationRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ],
            declarations: [
                _404_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_6__["EmailVerifyComponent"],
            ],
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony import */ var _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./404/not-found.component */ "./src/app/authentication/404/not-found.component.ts");
/* harmony import */ var _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-verify/email-verify.component */ "./src/app/authentication/email-verify/email-verify.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/authentication/signup/signup.component.ts");




var AuthenticationRoutes = [
    {
        path: '',
        children: [{
                path: '404',
                component: _404_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"],
            }, {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
            }, {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
            }, {
                path: 'email-verify',
                component: _email_verify_email_verify_component__WEBPACK_IMPORTED_MODULE_1__["EmailVerifyComponent"],
            }],
    },
];


/***/ }),

/***/ "./src/app/authentication/email-verify/email-verify.component.css":
/*!************************************************************************!*\
  !*** ./src/app/authentication/email-verify/email-verify.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/authentication/email-verify/email-verify.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/authentication/email-verify/email-verify.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(assets/images/background/login-register.jpg);\">\n  <div class=\"login-box card\">\n    <div class=\"card-body\">\n      <h3 class=\"box-title m-b-20\">Verify your email</h3>\n      <p>Verify your email to proceed.</p>\n      <button class=\"btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light\" (click)=\"sendEmailVerification()\">Resend Email Verification</button>\n      <button class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" (click)=\"refreshEmailVerification()\">Refresh</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/email-verify/email-verify.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/authentication/email-verify/email-verify.component.ts ***!
  \***********************************************************************/
/*! exports provided: EmailVerifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerifyComponent", function() { return EmailVerifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var EmailVerifyComponent = /** @class */ (function () {
    function EmailVerifyComponent(auth, router, toastr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
    }
    EmailVerifyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_2__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.preloader').fadeOut();
        });
        this.auth.user.subscribe(function (userData) {
            if (!userData) {
                _this.router.navigate(['/auth/login']);
            }
            else {
                _this.refreshEmailVerification();
            }
        });
    };
    EmailVerifyComponent.prototype.sendEmailVerification = function () {
        var _this = this;
        this.refreshEmailVerification();
        var emailVerifyProm = this.auth.sendEmailVerification();
        if (emailVerifyProm) {
            emailVerifyProm
                .then(function () { return _this.afterSignIn(); })
                .catch(function (error) { return _this.toastr.error(error.message, 'Error!'); });
        }
        else {
            this.afterSignIn();
        }
    };
    EmailVerifyComponent.prototype.refreshEmailVerification = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userVerified;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.isUserEmailVerified()];
                    case 1:
                        userVerified = _a.sent();
                        if (userVerified) {
                            this.afterSignIn();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    EmailVerifyComponent.prototype.afterSignIn = function () {
        this.router.navigate(['/dashboard/main']);
    };
    EmailVerifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-email-verify',
            template: __webpack_require__(/*! ./email-verify.component.html */ "./src/app/authentication/email-verify/email-verify.component.html"),
            styles: [__webpack_require__(/*! ./email-verify.component.css */ "./src/app/authentication/email-verify/email-verify.component.css")],
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EmailVerifyComponent);
    return EmailVerifyComponent;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(assets/images/background/login-register.jpg);\">\n  <div class=\"login-box card\">\n    <div class=\"card-body\">\n      <form class=\"form-horizontal form-material\" id=\"loginform\" #LoginForm=\"ngForm\" (ngSubmit)=\"login(LoginForm)\">\n        <h3 class=\"box-title m-b-20\">Sign In</h3>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"email\" name=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" placeholder=\"Email\" ngModel #userEmail=\"ngModel\">\n          <div *ngIf=\"userEmail.invalid && (userEmail.dirty || userEmail.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"userEmail.errors.required\">Email is required.</div>\n            <div *ngIf=\"userEmail.errors.pattern && userEmail?.value != ''\">Email should be in proper format.</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"password\" name=\"password\" minlength=\"6\" required placeholder=\"Password\"  ngModel #userPass=\"ngModel\">\n          <div *ngIf=\"userPass.invalid && (userPass.dirty || userPass.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"userPass.errors.required\">Password is required.</div>\n            <div *ngIf=\"userPass.errors.minlength\">Must be at least 6 characters long.</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-12 font-14\">\n          <div class=\"checkbox checkbox-primary pull-left p-t-0\">\n            <input id=\"checkbox-signup\" type=\"checkbox\">\n            <label for=\"checkbox-signup\">Remember me</label>\n          </div> <a href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark pull-right\">Forgot pwd?</a> </div>\n        </div>\n        <div class=\"form-group text-center m-t-20\">\n          <div class=\"col-xs-12\">\n            <button type=\"submit\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" [disabled]=\"LoginForm.invalid\">Log In</button>\n          </div>\n        </div>\n        <!-- <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\n            <div class=\"social\">\n              <button type=\"button\" class=\"btn btn-facebook\" title=\"Login with Facebook\" (click)=\"signInWithFacebook()\"> <i aria-hidden=\"true\" class=\"mdi mdi-facebook\"></i></button>\n              <button type=\"button\" class=\"btn btn-googleplus\" title=\"Login with Google\" (click)=\"signInWithGoogle()\"> <i aria-hidden=\"true\" class=\"mdi mdi-google\"></i></button>\n            </div>\n          </div>\n        </div> -->\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n          <div>Don't have an account? <a class=\"text-info m-l-5\" [routerLink]=\"['/auth/signup']\"><b>Sign Up</b></a></div>\n          </div>\n        </div>\n      </form>\n      <form class=\"form-horizontal\" id=\"recoverform\" #ResetPassForm=\"ngForm\" (ngSubmit)=\"resetPassword(ResetPassForm)\">\n        <div class=\"form-group \">\n          <div class=\"col-xs-12\">\n          <h3>Recover Password</h3>\n          <p class=\"text-muted\">Enter your Email and instructions will be sent to you! </p>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"email\" name=\"passEmail\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" placeholder=\"Email\" ngModel #passEmail=\"ngModel\">\n          <div *ngIf=\"passEmail.invalid && (passEmail.dirty || passEmail.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"passEmail.errors.required\">Email is required.</div>\n            <div *ngIf=\"passEmail.errors.pattern && passEmail?.value != ''\">Email should be in proper format.</div>\n          </div>\n        </div>\n        <div class=\"form-group text-center m-t-20\">\n          <div class=\"col-xs-12\">\n            <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light\" [disabled]=\"ResetPassForm.invalid\">Reset Password</button>\n            <a href=\"javascript:void(0)\" class=\"btn btn-danger btn-block text-uppercase waves-effect waves-light\" id=\"to-recover-close\">Close</a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, toastr) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.auth.user.subscribe(function (userData) {
            if (userData && !userData.brandSetup) {
                _this.router.navigate(['/brand/brands/setting']);
            }
            else if (userData) {
                _this.router.navigate(['/dashboard/main']);
            }
        });
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.preloader').fadeOut();
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('#to-recover').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#loginform').slideUp();
            jquery__WEBPACK_IMPORTED_MODULE_2__('#recoverform').fadeIn();
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__('#to-recover-close').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#recoverform').fadeOut();
            jquery__WEBPACK_IMPORTED_MODULE_2__('#loginform').slideDown();
        });
    };
    LoginComponent.prototype.login = function (loginForm) {
        var _this = this;
        this.auth.emailLogin(loginForm.form.value['email'], loginForm.form.value['password'])
            .then(function () { return _this.afterSignIn(); })
            .catch(function (error) { return _this.toastr.error(error.message, 'Error!'); });
    };
    LoginComponent.prototype.resetPassword = function (passwordForm) {
        var _this = this;
        this.auth.resetPassword(passwordForm.form.value['passEmail'])
            .then(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#to-recover-close').click();
        })
            .catch(function (error) { return _this.toastr.error(error.message, 'Error!'); });
    };
    LoginComponent.prototype.afterSignIn = function () {
        this.toastr.success('You are loggedin successfully.', 'Success!');
        this.router.navigate(['/dashboard/main']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/signup/signup.component.css":
/*!************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-register\" style=\"background-image:url(assets/images/background/login-register.jpg);\">\n  <div class=\"login-box card\">\n    <div class=\"card-body\">\n      <form class=\"form-horizontal form-material\" id=\"signupform\" #SignupForm=\"ngForm\" (ngSubmit)=\"signup(SignupForm)\">\n        <h3 class=\"box-title m-b-20\">Sign Up</h3>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"email\" name=\"email\" required pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" placeholder=\"Email\" ngModel #userEmail=\"ngModel\">\n          <div *ngIf=\"userEmail.invalid && (userEmail.dirty || userEmail.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"userEmail.errors.required\">Email is required.</div>\n            <div *ngIf=\"userEmail.errors.pattern && userEmail?.value != ''\">Email should be in proper format.</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"password\" name=\"password\" minlength=\"6\" required placeholder=\"Password\" ngModel #userPass=\"ngModel\">\n          <div *ngIf=\"userPass.invalid && (userPass.dirty || userPass.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"userPass.errors.required\">Password is required.</div>\n            <div *ngIf=\"userPass.errors.minlength\">Must be at least 6 characters long.</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"password\" name=\"confirmpassword\" minlength=\"6\" required placeholder=\"Confirm Password\" ngModel #confirmPass=\"ngModel\">\n          <div *ngIf=\"(!confirmPass.invalid && (confirmPass.value != userPass.value)) && (confirmPass.dirty || confirmPass.touched)\" class=\"alert alert-danger\">\n            <div>Password does not match.</div>\n          </div>\n          <div *ngIf=\"confirmPass.invalid && (confirmPass.dirty || confirmPass.touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"confirmPass.errors.required\">Password is required.</div>\n            <div *ngIf=\"confirmPass.errors.minlength\">Must be at least 6 characters long.</div>\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-12\">\n            <div class=\"checkbox checkbox-success p-t-0\">\n              <input id=\"checkbox-signup\" type=\"checkbox\" required=\"\" class=\"filled-in chk-col-light-blue\">\n              <label for=\"checkbox-signup\"> I agree to all <a href=\"javascript:void(0)\">Terms</a></label>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group text-center m-t-20\">\n          <div class=\"col-xs-12\">\n            <button type=\"submit\" class=\"btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light\" [disabled]=\"SignupForm.invalid || (confirmPass.value != userPass.value)\">Sign Up</button>\n          </div>\n        </div>\n        <!-- <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\n            <div class=\"social\">\n              <button type=\"button\" class=\"btn btn-facebook\" title=\"Login with Facebook\" (click)=\"signInWithFacebook()\"> <i aria-hidden=\"true\" class=\"mdi mdi-facebook\"></i></button>\n              <button type=\"button\" class=\"btn btn-googleplus\" title=\"Login with Google\" (click)=\"signInWithGoogle()\"> <i aria-hidden=\"true\" class=\"mdi mdi-google\"></i></button>\n            </div>\n          </div>\n        </div> -->\n        <div class=\"form-group m-b-0\">\n          <div class=\"col-sm-12 text-center\">\n          Already have an account? <a class=\"text-info m-l-5\" [routerLink]=\"['/auth/login']\"><b>Sign In</b></a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/authentication/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/authentication/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _core_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth.service */ "./src/app/core/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(auth, router, toastr) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.auth.user.subscribe(function (userData) {
            if (userData && userData.uid) {
                _this.router.navigate(['/dashboard/main']);
            }
        });
    }
    SignupComponent.prototype.signup = function (signupForm) {
        var _this = this;
        this.auth.emailSignUp(signupForm.form.value['email'], signupForm.form.value['password'])
            .then(function () { return _this.afterSignIn(); })
            .catch(function (error) { return _this.toastr.error(error.message, 'Error!'); });
    };
    SignupComponent.prototype.afterSignIn = function () {
        this.auth.sendEmailVerification();
        this.toastr.success('You are loggedin successfully.', 'Success!');
        this.router.navigate(['/dashboard/main']);
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/authentication/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/authentication/signup/signup.component.css")],
        }),
        __metadata("design:paramtypes", [_core_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map