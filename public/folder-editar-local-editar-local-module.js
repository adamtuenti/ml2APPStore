(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-editar-local-editar-local-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-local/editar-local.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-local/editar-local.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"locales\"></app-header>\n\n<ion-content>\n\n\n  <form #form=\"ngForm\" (ngSubmit)=\"UpdateLocal(form)\">\n    <ion-list>   \n        \n  \n\n \n      \n\n\n\n     \n      \n      \n      \n\n      <ion-item>\n        <ion-icon name=\"storefront-outline\" color=\"success\" size='large' style = 'margin-right: 7.5px;'></ion-icon>\n        <ion-input value=\"{{local.Nombre}}\" name=\"nombre\" type='text' ngModel></ion-input>\n      </ion-item>\n\n      \n\n      <ion-item>\n        <ion-icon name=\"logo-whatsapp\" size='large' color='success' style='margin-right: 7.5px;'></ion-icon>\n        <ion-input value=\"{{local.Telefono}}\" name=\"telefono\" type='text' ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"logo-facebook\" size='large' color='primary' style='margin-right: 7.5px;'></ion-icon>\n        <ion-input value=\"{{local.RedSocial}}\" name=\"redSocial\" type='text' ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"golf-outline\" size='large' color='success' style='margin-right: 7.5px;'></ion-icon>\n        <ion-input value=\"{{local.Referencia}}\" name=\"referencia\" type='text' ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon color=\"success\" size='large' name=\"bicycle-outline\"></ion-icon>\n        <ion-label style = \"margin-left: 6.5px;\">Entregas a domicilio:</ion-label>\n        <ion-select name='domicilio' ngModel>\n         \n                <ion-select-option value=\"Si\">Sí</ion-select-option>\n                <ion-select-option value=\"No\">No</ion-select-option> \n\n        </ion-select>\n\n      </ion-item>\n\n\n        <ion-item>\n          <ion-icon color=\"success\" size='large' name=\"information-circle-outline\"></ion-icon>\n          <ion-label style = \"margin-left: 6.5px;\">Descripción:</ion-label>\n        </ion-item>\n        \n        <ng-container>\n          <ion-input style= 'text-align: center;' value=\"{{local.Descripcion}}\" name=\"descripcion\" type='text' ngModel></ion-input>\n\n        </ng-container>\n        \n\n      <ion-item>\n        <ion-icon name=\"calendar-outline\" size='large' color='success'></ion-icon>\n        <ion-label style = \"margin-left: 6.5px;\">Horario de atención:</ion-label>\n        \n      </ion-item>\n\n      <ng-container>\n        <ion-input style= 'text-align: center;' value=\"{{local.HorarioAtencion}}\" name=\"horario\" type='text' ngModel></ion-input>\n      </ng-container>\n<!-- \n      <ng-container>\n        \n        <ion-input style= 'text-align: center;' value=\"{{local.Descripcion}}\" name=\"descripcion\" required type='text' ngModel></ion-input>\n      </ng-container> -->\n\n      <ion-item style='margin-top: 7.5px;'>\n\n        <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:5px;margin-bottom: 5px;height: 350px;width: 350px;margin:auto;\"></ion-img>\n        \n         \n      </ion-item>\n\n\n      \n      <ion-item >\n\n        \n          <ion-icon name=\"cloud-upload-outline\"></ion-icon>  <ion-text style='margin-left:7.5px'>Cambiar foto</ion-text>\n          <ion-input id=\"myFileInput\" (change)=\"readURL($event);\" accept=\"image/*\" placeholder=\"archivo\" name=\"archivo\" type='file' ngModel value=\"{{file}}\"></ion-input>\n        \n     \n      </ion-item>\n\n    \n        \n      \n\n\n      \n\n\n    </ion-list> \n\n    <div class=\"ion-padding\" align=\"center\">\n      <ion-button type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\" style=\"width: 150px;\">\n        Actualizar\n      </ion-button>\n      \n    </div>\n  </form>\n\n</ion-content>\n<style>\n  #myFileInput{\n    position: absolute;\n    opacity: 0;\n  }\n</style>");

/***/ }),

/***/ "./src/app/folder/editar-local/editar-local-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder/editar-local/editar-local-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: EditarLocalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarLocalPageRoutingModule", function() { return EditarLocalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _editar_local_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar-local.page */ "./src/app/folder/editar-local/editar-local.page.ts");




const routes = [
    {
        path: '',
        component: _editar_local_page__WEBPACK_IMPORTED_MODULE_3__["EditarLocalPage"]
    }
];
let EditarLocalPageRoutingModule = class EditarLocalPageRoutingModule {
};
EditarLocalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarLocalPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/editar-local/editar-local.module.ts":
/*!************************************************************!*\
  !*** ./src/app/folder/editar-local/editar-local.module.ts ***!
  \************************************************************/
/*! exports provided: EditarLocalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarLocalPageModule", function() { return EditarLocalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _editar_local_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-local-routing.module */ "./src/app/folder/editar-local/editar-local-routing.module.ts");
/* harmony import */ var _editar_local_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar-local.page */ "./src/app/folder/editar-local/editar-local.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let EditarLocalPageModule = class EditarLocalPageModule {
};
EditarLocalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _editar_local_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarLocalPageRoutingModule"]
        ],
        declarations: [_editar_local_page__WEBPACK_IMPORTED_MODULE_6__["EditarLocalPage"]]
    })
], EditarLocalPageModule);



/***/ }),

/***/ "./src/app/folder/editar-local/editar-local.page.scss":
/*!************************************************************!*\
  !*** ./src/app/folder/editar-local/editar-local.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9lZGl0YXItbG9jYWwvZWRpdGFyLWxvY2FsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/editar-local/editar-local.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/folder/editar-local/editar-local.page.ts ***!
  \**********************************************************/
/*! exports provided: EditarLocalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarLocalPage", function() { return EditarLocalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/locales */ "./src/app/models/locales.ts");
/* harmony import */ var src_app_services_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/locales.service */ "./src/app/services/locales.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mensaje-error.service */ "./src/app/services/mensaje-error.service.ts");








let EditarLocalPage = class EditarLocalPage {
    constructor(router, activateRoute, localesService, loadingController, mensajeErrorService, alertCtrt) {
        this.router = router;
        this.activateRoute = activateRoute;
        this.localesService = localesService;
        this.loadingController = loadingController;
        this.mensajeErrorService = mensajeErrorService;
        this.alertCtrt = alertCtrt;
        this.local = new src_app_models_locales__WEBPACK_IMPORTED_MODULE_3__["Locales"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.idLocal = paramMap.get('idLocal');
            this.idPropietario = paramMap.get('idPropietario');
            this.localesService.getLocal(paramMap.get('idLocal')).subscribe(res => { this.local = res; this.image = res.Foto; });
            this.idUser = localStorage.getItem('userId');
        });
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
    UpdateLocal(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.presentLoading("Espere por favor...");
            this.presentLoading("Espere por favor...");
            var nombre;
            var telefono;
            var horario;
            var domicilio;
            var redSocial;
            var descripcion;
            var referencia;
            if (form.value.nombre == '') {
                nombre = this.local.Nombre;
            }
            else {
                nombre = form.value.nombre;
            }
            if (form.value.horario == '') {
                horario = this.local.HorarioAtencion;
            }
            else {
                horario = form.value.horario;
            }
            if (form.value.domicilio == '') {
                domicilio = this.local.Domicilio;
            }
            else {
                domicilio = form.value.domicilio;
            }
            if (form.value.redSocial == '') {
                redSocial = this.local.RedSocial;
            }
            else {
                redSocial = form.value.redSocial;
            }
            if (form.value.descripcion == '') {
                descripcion = this.local.Descripcion;
            }
            else {
                descripcion = form.value.descripcion;
            }
            if (form.value.referencia == '') {
                referencia = this.local.Referencia;
            }
            else {
                referencia = form.value.referencia;
            }
            var primeros;
            if (form.value.telefono != '') {
                telefono = form.value.telefono;
                primeros = telefono.slice(0, 3);
            }
            else {
                telefono = this.local.Telefono;
                primeros = telefono.slice(0, 3);
            }
            if (telefono.slice(0, 1) == 0) {
                telefono = '+593' + telefono.slice(1, telefono.length);
            }
            else if (primeros == '+593') {
                telefono = telefono;
            }
            this.UpdateLocalCompleto(nombre, telefono, horario, domicilio, redSocial, descripcion, referencia, this.image);
            // }else{
            //   this.UpdateLocalCompleto(form.value.nombre,telefono,form.value.horario,this.local.Domicilio,form.value.redSocial,form.value.descripcion,form.value.referencia,this.image)
            // }
        });
    }
    UpdateLocalCompleto(nombre, telefono, horario, domicilio, redSocial, descripcion, referencia, downloadURL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.local.Nombre = nombre;
            this.local.Referencia = referencia;
            this.local.Telefono = telefono;
            this.local.Descripcion = descripcion;
            this.local.HorarioAtencion = horario;
            this.local.RedSocial = redSocial;
            this.local.Foto = downloadURL;
            this.local.Domicilio = domicilio;
            this.localesService.updateLocal(this.idLocal, this.local).
                then(auth => {
                this.loading.dismiss();
                this.router.navigate(['/detalle-local', this.idLocal, this.idPropietario]);
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
};
EditarLocalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_locales_service__WEBPACK_IMPORTED_MODULE_4__["LocalesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_6__["MensajeErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
EditarLocalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-local',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editar-local.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-local/editar-local.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editar-local.page.scss */ "./src/app/folder/editar-local/editar-local.page.scss")).default]
    })
], EditarLocalPage);



/***/ })

}]);
//# sourceMappingURL=folder-editar-local-editar-local-module.js.map