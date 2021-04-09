(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-registrar-registrar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/registrar/registrar.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/registrar/registrar.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content padding>\r\n  <ion-card>\r\n    <!-- <ion-list>\r\n      <ion-img src=\"../../assets/log.png\"></ion-img>\r\n    </ion-list> -->\r\n    <div align=\"center\" style=\"margin-top:15px\">\r\n      <label style=\"font-size: 31px;\">Registro</label>\r\n    </div>\r\n\r\n    <form #form=\"ngForm\" (ngSubmit)=\"RegistrarUser(form)\" >\r\n      <ion-list>   \r\n          \r\n        <ion-item>\r\n          <ion-icon color=\"black\" name=\"person-outline\"></ion-icon>\r\n          <ion-input style = \"margin-left: 6.5px;\" required placeholder=\"Nombre\" name=\"nombre\" type='text' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-icon color=\"black\" name=\"person-outline\"></ion-icon>\r\n          <ion-input style = \"margin-left: 6.5px;\" required placeholder=\"Apellido\" name=\"apellido\" type='text' ngModel required></ion-input>\r\n        </ion-item>\r\n        \r\n        <ion-item>\r\n          <ion-icon color=\"black\" name=\"mail-outline\"></ion-icon>\r\n          <ion-input style = \"margin-left: 6.5px;\" required placeholder=\"Correo\" name=\"email\" type='email' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-icon color=\"black\" name=\"key-outline\"></ion-icon>\r\n          <ion-input style = \"margin-left: 6.5px;\" placeholder=\"Contraseña\" name=\"password\" type='password' ngModel minlength=\"6\" required></ion-input>\r\n        </ion-item>\r\n        <div *ngIf=\"form.hasError('minlength', 'password')\">\r\n          <span>La contraseña debe tener 6 al menos caracteres</span>\r\n        </div>\r\n        \r\n\r\n\r\n        <ion-item>\r\n          <ion-icon color=\"black\" name=\"call-outline\"></ion-icon>\r\n          <ion-input style = \"margin-left: 6.5px;\" placeholder=\"WhatsApp\" name=\"telefono\" type='text' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-icon color=\"black\" name=\"storefront-outline\"></ion-icon>\r\n          <ion-label style = \"margin-left: 6.5px;\">Ciudadela: </ion-label>\r\n          <ion-select required  name='ciudadela' ngModel>\r\n           \r\n                  <ion-select-option value=\"Paraíso del Río 1\">Paraíso del Río 1</ion-select-option>\r\n                  <ion-select-option value=\"Paraíso del Río 2\">Paraíso del Río 2</ion-select-option> \r\n                  <ion-select-option value=\"Toledo\">Toledo</ion-select-option> \r\n                  <ion-select-option value=\"Marbella\">Marbella</ion-select-option> \r\n                  <ion-select-option value=\"Victoria del Río\">Victoria del Río</ion-select-option>\r\n                  <ion-select-option value=\"Salamanca\">Salamanca</ion-select-option>\r\n                  <ion-select-option value=\"Victoria Club\">Victoria Club</ion-select-option>\r\n                  <ion-select-option value=\"Plaza Victoria\">Plaza Victoria</ion-select-option>\r\n                  <ion-select-option value=\"Valle Victoria\">Valle Victoria</ion-select-option>\r\n                  <ion-select-option value=\"Alameda del Río\">Alameda del Río</ion-select-option>\r\n\r\n          \r\n          </ion-select>\r\n  \r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-icon color=\"black\" name=\"trail-sign-outline\"></ion-icon>\r\n          <ion-input style = \"margin-left: 6.5px;\" placeholder=\"Manzana\" name=\"manzana\" type='text' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-icon color=\"black\" name=\"bookmark-outline\"></ion-icon>\r\n          <ion-input style = \"margin-left: 6.5px;\" placeholder=\"Villa\" name=\"villa\" type='text' ngModel required></ion-input>\r\n        </ion-item>\r\n\r\n\r\n\r\n\r\n        \r\n        \r\n        \r\n        \r\n\r\n          <ion-item>\r\n            <ion-icon color=\"black\" name=\"image-outline\"></ion-icon> <ion-label style = \"margin-left: 6.5px;\">Foto de Perfil </ion-label>\r\n          \r\n            <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\r\n          </ion-item>\r\n\r\n\r\n          <!-- <ion-item>\r\n            <ion-label><ion-icon name=\"image-outline\"></ion-icon> Seleccione su foto de perfil <ion-text color=\"\"></ion-text></ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-input type='file' accept=\"image/*\" id=\"perfilFoto\" name=\"foto\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\r\n          </ion-item> -->\r\n          \r\n          \r\n          \r\n        \r\n\r\n\r\n      </ion-list> \r\n      \r\n\r\n      <div class=\"ion-padding\" align=\"center\">\r\n        <ion-button type=\"submit\"  style=\"width: 150px;\" [disabled]=\"form.invalid\" expand=\"block\">\r\n          Registrar\r\n        </ion-button>\r\n        <p style=\"font-size: 15px;\" routerLink=\"/login\" routerDirection=\"root\">Ya tengo cuenta</p>\r\n      </div>\r\n    </form>\r\n  </ion-card>\r\n</ion-content>\r\n\r\n<style>\r\n#myFileInput{\r\n  position: absolute;\r\n  opacity: 0;\r\n}\r\n  .perfil {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 200px;\r\n  }\r\n  .item ion-thumbnail {\r\n    min-width: 10rem;    \r\n    min-height: 10rem;\r\n    /* img {\r\n      max-width: 10rem;    \r\n      min-width: 10rem;\r\n    }   */\r\n  }\r\n  ion-img {     \r\n      width: 60%;\r\n      margin: auto;\r\n      display: block;\r\n  }\r\n</style>");

/***/ }),

/***/ "./src/app/folder/registrar/registrar-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/registrar/registrar-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: RegistrarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPageRoutingModule", function() { return RegistrarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registrar.page */ "./src/app/folder/registrar/registrar.page.ts");




const routes = [
    {
        path: '',
        component: _registrar_page__WEBPACK_IMPORTED_MODULE_3__["RegistrarPage"]
    }
];
let RegistrarPageRoutingModule = class RegistrarPageRoutingModule {
};
RegistrarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrarPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/registrar/registrar.module.ts":
/*!******************************************************!*\
  !*** ./src/app/folder/registrar/registrar.module.ts ***!
  \******************************************************/
/*! exports provided: RegistrarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPageModule", function() { return RegistrarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registrar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrar-routing.module */ "./src/app/folder/registrar/registrar-routing.module.ts");
/* harmony import */ var _registrar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrar.page */ "./src/app/folder/registrar/registrar.page.ts");







let RegistrarPageModule = class RegistrarPageModule {
};
RegistrarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registrar_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrarPageRoutingModule"]
        ],
        declarations: [_registrar_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarPage"]]
    })
], RegistrarPageModule);



/***/ }),

/***/ "./src/app/folder/registrar/registrar.page.scss":
/*!******************************************************!*\
  !*** ./src/app/folder/registrar/registrar.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3JlZ2lzdHJhci9yZWdpc3RyYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3JlZ2lzdHJhci9yZWdpc3RyYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/registrar/registrar.page.ts":
/*!****************************************************!*\
  !*** ./src/app/folder/registrar/registrar.page.ts ***!
  \****************************************************/
/*! exports provided: RegistrarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPage", function() { return RegistrarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mensaje-error.service */ "./src/app/services/mensaje-error.service.ts");
/* harmony import */ var src_app_models_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/variables */ "./src/app/models/variables.ts");
/* harmony import */ var src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/variables.service */ "./src/app/services/variables.service.ts");










let RegistrarPage = class RegistrarPage {
    constructor(angularFireStorage, authService, variablesService, router, mensajeErrorService, alertCtrt, loadingController) {
        this.angularFireStorage = angularFireStorage;
        this.authService = authService;
        this.variablesService = variablesService;
        this.router = router;
        this.mensajeErrorService = mensajeErrorService;
        this.alertCtrt = alertCtrt;
        this.loadingController = loadingController;
        this.variables = new src_app_models_variables__WEBPACK_IMPORTED_MODULE_7__["Variables"]();
    }
    ngOnInit() {
        this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res => { this.variables = res; });
    }
    presentLoading(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: mensaje,
            });
            return this.loading.present();
        });
    }
    readURL(event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.imageSrc = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    RegistrarUser(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.ValidateEmail(form.value.email) == false) {
                const alert = yield this.alertCtrt.create({
                    message: 'Ingrese un correo valido.',
                    buttons: ['OK']
                });
                yield alert.present();
                return;
            }
            if ((String(form.value.email)).length < 6) {
                const alert = yield this.alertCtrt.create({
                    message: 'Contraseña demasiado corta, ingrese almenos 6 caracteres.',
                    buttons: ['OK']
                });
                yield alert.present();
                return;
            }
            this.presentLoading("Espere por favor...");
            var telefono = form.value.telefono;
            var primeros = telefono.slice(0, 3);
            if (telefono.slice(0, 1) == 0) {
                telefono = '+593' + telefono.slice(1, telefono.length);
            }
            else if (primeros == '+593') {
                telefono = telefono;
            }
            var nombre = this.capitalizeFirstLetter(form.value.nombre);
            var apellido = this.capitalizeFirstLetter(form.value.apellido);
            this.guardarArchivo(nombre, apellido, form.value.email, form.value.password, form.value.ciudadela, form.value.manzana, form.value.villa, telefono);
        });
    }
    guardarArchivo(nombre, apellido, email, password, ciudadela, manzana, villa, telefono) {
        var storageRef = this.angularFireStorage.storage.ref();
        storageRef.child(this.file.name).put(this.file)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => {
                this.RegistrarUserCompleto(nombre, apellido, email, password, ciudadela, manzana, villa, telefono, downloadURL);
            }).catch(err => { this.loading.dismiss(), this.failedAlert("Error al cargar la foto de perfil, intentelo de nuevo"); });
        });
    }
    RegistrarUserCompleto(nombre, apellido, email, password, ciudadela, manzana, villa, telefono, downloadURL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.authService.registerUser(nombre, apellido, email, password, ciudadela, manzana, villa, telefono, downloadURL).
                then(auth => {
                this.loading.dismiss();
                this.authService.loginUser(email, password).
                    then((res) => {
                    localStorage.setItem('userId', res.user.uid);
                    localStorage.setItem('Fondo', '#FBC8B5');
                    localStorage.setItem('FotoPerfil', downloadURL);
                    this.router.navigateByUrl('/categorias');
                }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    var mensaje = error.code.split('/')[1];
                    const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                    const alert = yield this.alertCtrt.create({
                        message: presentarMensaje,
                        buttons: [{ text: 'ok', role: 'cancel' }],
                    });
                    yield alert.present();
                }));
                ///this.router.navigateByUrl("/categorias")
            }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loading.dismiss();
                var mensaje = error.code.split('/')[1];
                const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                this.failedAlert(presentarMensaje);
            }));
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
                        }
                    }]
            });
            yield alert.present();
        });
    }
    ValidateEmail(mail) {
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail)) {
            return (true);
        }
        return (false);
    }
};
RegistrarPage.ctorParameters = () => [
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_variables_service__WEBPACK_IMPORTED_MODULE_8__["VariablesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__["MensajeErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
RegistrarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registrar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/registrar/registrar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registrar.page.scss */ "./src/app/folder/registrar/registrar.page.scss")).default]
    })
], RegistrarPage);



/***/ })

}]);
//# sourceMappingURL=folder-registrar-registrar-module.js.map