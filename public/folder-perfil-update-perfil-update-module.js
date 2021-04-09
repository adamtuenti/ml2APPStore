(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-perfil-update-perfil-update-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil-update/perfil-update.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil-update/perfil-update.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"perfil\"></app-header>\n\n<ion-content>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"UpdateUser(form)\">\n    <ion-list>   \n        \n  \n\n \n      \n\n\n\n      <ion-item>\n        <ion-icon name=\"person-outline\" size='large' color='success' style='margin-right: 7.5px;'></ion-icon>\n        <ion-input value=\"{{user.Nombre}}\" name=\"nombre\" type='text' ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"person-outline\" size='large' color='success' style='margin-right: 7.5px;'></ion-icon>\n        <ion-input value=\"{{user.Apellido}}\" name=\"apellido\" type='text' ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"logo-whatsapp\" size='large' color='success' style='margin-right: 7.5px;'></ion-icon>\n        <ion-input value=\"{{user.Telefono}}\" name=\"telefono\" type='text' ngModel></ion-input>\n      </ion-item>\n\n      \n      \n      <ion-item>\n\n                  <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:7.5px;margin-bottom: 7.5px;height: 350px;width: 350px;\"></ion-img>\n         \n        </ion-item>\n\n\n      <!-- <ion-item>\n        <ion-label><ion-icon name=\"image-outline\"></ion-icon><ion-text style='margin-left: 7.5px;'>Cambiar foto</ion-text></ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input type='file' accept=\"image/*\" id=\"perfilFoto\" name=\"foto\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel></ion-input>\n      </ion-item> -->\n\n      <ion-item>\n        <ion-label><ion-icon name=\"cloud-upload-outline\"></ion-icon>  <ion-text style='margin-left:7.5px'>Cambiar foto</ion-text></ion-label>\n        <ion-input id=\"myFileInput\" (change)=\"readURL($event);\" accept=\"image/*\" placeholder=\"archivo\" name=\"archivo\" type='file' ngModel value=\"{{file}}\"></ion-input>\n      \n     \n      </ion-item>\n\n\n      \n\n\n    </ion-list> \n\n    <div class=\"ion-padding\" align=\"center\">\n      <ion-button type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\" style=\"width: 150px;\">\n        Actualizar\n      </ion-button>\n      \n    </div>\n  </form>\n\n</ion-content>\n<style>\n  #myFileInput{\n    position: absolute;\n    opacity: 0;\n  }\n</style>");

/***/ }),

/***/ "./src/app/folder/perfil-update/perfil-update-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/perfil-update/perfil-update-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PerfilUpdatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUpdatePageRoutingModule", function() { return PerfilUpdatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _perfil_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-update.page */ "./src/app/folder/perfil-update/perfil-update.page.ts");




const routes = [
    {
        path: '',
        component: _perfil_update_page__WEBPACK_IMPORTED_MODULE_3__["PerfilUpdatePage"]
    }
];
let PerfilUpdatePageRoutingModule = class PerfilUpdatePageRoutingModule {
};
PerfilUpdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerfilUpdatePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/perfil-update/perfil-update.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/perfil-update/perfil-update.module.ts ***!
  \**************************************************************/
/*! exports provided: PerfilUpdatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUpdatePageModule", function() { return PerfilUpdatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _perfil_update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil-update-routing.module */ "./src/app/folder/perfil-update/perfil-update-routing.module.ts");
/* harmony import */ var _perfil_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perfil-update.page */ "./src/app/folder/perfil-update/perfil-update.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let PerfilUpdatePageModule = class PerfilUpdatePageModule {
};
PerfilUpdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _perfil_update_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilUpdatePageRoutingModule"]
        ],
        declarations: [_perfil_update_page__WEBPACK_IMPORTED_MODULE_6__["PerfilUpdatePage"]]
    })
], PerfilUpdatePageModule);



/***/ }),

/***/ "./src/app/folder/perfil-update/perfil-update.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/folder/perfil-update/perfil-update.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3BlcmZpbC11cGRhdGUvcGVyZmlsLXVwZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvcGVyZmlsLXVwZGF0ZS9wZXJmaWwtdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/folder/perfil-update/perfil-update.page.ts":
/*!************************************************************!*\
  !*** ./src/app/folder/perfil-update/perfil-update.page.ts ***!
  \************************************************************/
/*! exports provided: PerfilUpdatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUpdatePage", function() { return PerfilUpdatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mensaje-error.service */ "./src/app/services/mensaje-error.service.ts");








let PerfilUpdatePage = class PerfilUpdatePage {
    constructor(usuarioService, angularFireStorage, loadingController, router, alertCtrt, mensajeErrorService) {
        this.usuarioService = usuarioService;
        this.angularFireStorage = angularFireStorage;
        this.loadingController = loadingController;
        this.router = router;
        this.alertCtrt = alertCtrt;
        this.mensajeErrorService = mensajeErrorService;
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_2__["Usuarios"]();
    }
    ngOnInit() {
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; this.image = res.Foto; });
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
            reader.onload = e => this.image = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
    UpdateUser(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.presentLoading("Espere por favor...");
            this.presentLoading("Espere por favor...");
            var telefono;
            var nombre;
            var apellido;
            var primeros;
            if (form.value.telefono == '') {
                telefono = this.user.Telefono;
                primeros = telefono.slice(0, 3);
            }
            else {
                telefono = form.value.telefono;
                primeros = telefono.slice(0, 3);
            }
            if (telefono.slice(0, 1) == 0) {
                telefono = '+593' + telefono.slice(1, telefono.length);
            }
            else if (primeros == '+593') {
                telefono = telefono;
            }
            if (form.value.nombre == '') {
                nombre = this.user.Nombre;
            }
            else {
                nombre = form.value.nombre;
            }
            if (form.value.apellido == '') {
                apellido = this.user.Apellido;
            }
            else {
                apellido = form.value.apellido;
            }
            // if(this.file!='null'){
            //   this.guardarArchivo(telefono);
            // }
            // else{
            this.UpdateUserCompleto(telefono, nombre, apellido, this.image);
            // }
        });
    }
    guardarArchivo(telefono, nombre, apellido) {
        //this.presentLoading("Espere por favor...");
        var storageRef = this.angularFireStorage.storage.ref();
        storageRef.child(this.file.name).put(this.file)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => {
                this.UpdateUserCompleto(telefono, nombre, apellido, downloadURL);
            }).catch(err => { this.loading.dismiss(), this.failedAlert("Error al cargar la foto de perfil, intentelo de nuevo"); });
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
    UpdateUserCompleto(telefono, nombre, apellido, downloadURL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user.Telefono = telefono;
            this.user.Foto = downloadURL;
            this.user.Nombre = nombre;
            this.user.Apellido = apellido;
            var userId = localStorage.getItem('userId');
            localStorage.setItem('FotoPerfil', downloadURL);
            this.usuarioService.updateUsuario(userId, this.user).
                then(auth => {
                this.loading.dismiss();
                this.router.navigateByUrl("/perfil");
            }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loading.dismiss();
                var mensaje = error.code.split('/')[1];
                const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                this.failedAlert(presentarMensaje);
            }));
        });
    }
};
PerfilUpdatePage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_7__["MensajeErrorService"] }
];
PerfilUpdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil-update',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./perfil-update.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/perfil-update/perfil-update.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./perfil-update.page.scss */ "./src/app/folder/perfil-update/perfil-update.page.scss")).default]
    })
], PerfilUpdatePage);



/***/ })

}]);
//# sourceMappingURL=folder-perfil-update-perfil-update-module.js.map