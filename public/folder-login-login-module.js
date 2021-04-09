(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/login/login.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/login/login.page.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n<ion-card style=\"margin-top:25px\">\r\n    \r\n    <ion-img src=\"../../assets/mL2.png\" style=\"width: 100%;height: 285px;margin-top:7.5px;margin-bottom: 7.5px;\" alt=\"hola\"></ion-img>\r\n    \r\n    \r\n    <form #form=\"ngForm\" (ngSubmit)=\"loginUser(form)\">\r\n      <ion-list>   \r\n        \r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"mail-outline\"></ion-icon><ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input placeholder=\"Correo\" name=\"email\" type='email' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label><ion-icon name=\"key-outline\"></ion-icon> <ion-text color=\"danger\"></ion-text></ion-label>\r\n          <ion-input placeholder=\"Contraseña\" name=\"password\" type='password' ngModel required></ion-input>\r\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <div class=\"ion-padding\" align=\"center\" style=\"margin-top:5px\">\r\n        <ion-button  style=\"width: 150px;\" shape=\"round\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\r\n          Ingresar\r\n        </ion-button>\r\n        \r\n      </div>\r\n\r\n      <div align=\"center\" style=\"margin-top:15.5px\">\r\n        <p (click)=\"presentResetPassword()\" style=\"font-size:15px\">Restablecer contraseña</p>\r\n        <p style=\"font-size:15px\" routerLink=\"/registrar\" routerDirection=\"root\">Crear cuenta</p>\r\n\r\n      </div>\r\n\r\n    </form>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/login/login-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/folder/login/login-routing.module.ts ***!
  \******************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/folder/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/folder/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/folder/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/folder/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/folder/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/folder/login/login.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/folder/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/es2015/index.js");
/* harmony import */ var src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mensaje-error.service */ "./src/app/services/mensaje-error.service.ts");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");









let LoginPage = class LoginPage {
    constructor(authService, router, alertCtrt, firestore, usuarioService, mensajeErrorService) {
        this.authService = authService;
        this.router = router;
        this.alertCtrt = alertCtrt;
        this.firestore = firestore;
        this.usuarioService = usuarioService;
        this.mensajeErrorService = mensajeErrorService;
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuarios"]();
    }
    ngOnInit() {
    }
    loginUser(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authService.loginUser(form.value.email, form.value.password).
                then((res) => {
                localStorage.setItem('userId', res.user.uid);
                localStorage.setItem('Fondo', '#FBC8B5');
                this.usuarioService.getUsuario(res.user.uid).subscribe(res1 => { localStorage.setItem('FotoPerfil', res1.Foto); this.router.navigateByUrl('/categorias'); });
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var mensaje = error.code.split('/')[1];
                const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                const alert = yield this.alertCtrt.create({
                    message: presentarMensaje,
                    buttons: [{ text: 'ok', role: 'cancel' }],
                });
                yield alert.present();
            }));
        });
    }
    redireccionar(email) {
        console.log(this.firestore.collection("Estudiantes", ref => ref.where("email", "==", email)));
        console.log(this.firestore.collection("Profesores", ref => ref.where("email", "==", email)));
    }
    goToReset(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authService.resetPassword(email).then((res) => {
                this.failedAlert("Se ha enviado un enlace al correo para restaurar su contraseña: " + email);
            }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var mensaje = error.code.split('/')[1];
                const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                this.failedAlert(presentarMensaje);
            }));
        });
    }
    presentResetPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: 'Restaurar contraseña',
                message: 'Ingrese su email:',
                inputs: [
                    {
                        name: 'email',
                        placeholder: 'email',
                        type: 'email'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            if (data.email != "") {
                                this.goToReset(data.email);
                            }
                            else if (data.email == "") {
                                this.failedAlert("El campo email es requerido");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    failedAlert(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: text,
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            //this.presentResetPassword();
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"] },
    { type: src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__["MensajeErrorService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/folder/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=folder-login-login-module.js.map