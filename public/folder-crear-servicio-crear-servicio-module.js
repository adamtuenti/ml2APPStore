(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-crear-servicio-crear-servicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-servicio/crear-servicio.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-servicio/crear-servicio.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header nombre=\"categorias\"></app-header>\n\n<ion-content>\n\n\n  <form #form=\"ngForm\" (ngSubmit)=\"crearServicio(form)\">\n    <ion-list>  \n      \n      <ion-card style=\"margin-top:15px\">\n        <ion-item>\n          <ion-label>Título</ion-label>\n        </ion-item>\n        <ion-item>\n        \n          <ion-input required placeholder=\"Ingrese el título de su servicio\" name=\"titulo\" type='text' ngModel required></ion-input>\n        </ion-item>\n\n      </ion-card>\n    \n    <ion-card style=\"margin-top:15px\">\n      <ion-item>\n        <ion-label>Descripción</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-textarea required placeholder=\"Ingrese la descripción\" name=\"descripcion\" type='text' ngModel required></ion-textarea>\n      </ion-item>\n    </ion-card>\n      \n    \n    <ion-card style=\"margin-top:15px\">\n      \n\n        <ion-item>\n          <ion-icon name=\"image-outline\"></ion-icon> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image==null'>Subir foto</ion-text> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image!=null'>Cambiar foto</ion-text>\n      \n          <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto1\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\n\n        </ion-item>\n\n    </ion-card>\n    \n    <ion-card style=\"margin-top:15px\" *ngIf='image!=null'>\n      <ion-item>\n\n        <ng-container>\n          <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:5px;margin-bottom: 5px;height: 250px;width: 250px;margin:auto;\"></ion-img>\n\n        </ng-container>\n\n        \n\n        \n      </ion-item>\n\n    </ion-card>\n\n    \n    </ion-list>\n\n      <ion-button  style=\"width: 150px;margin:auto;\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\n        Guardar\n      </ion-button>\n  </form>\n\n</ion-content>\n<style>\n#myFileInput{\nposition: absolute;\nopacity: 0;\n}\n</style>");

/***/ }),

/***/ "./src/app/folder/crear-servicio/crear-servicio-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/crear-servicio/crear-servicio-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: CrearServicioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearServicioPageRoutingModule", function() { return CrearServicioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crear_servicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-servicio.page */ "./src/app/folder/crear-servicio/crear-servicio.page.ts");




const routes = [
    {
        path: '',
        component: _crear_servicio_page__WEBPACK_IMPORTED_MODULE_3__["CrearServicioPage"]
    }
];
let CrearServicioPageRoutingModule = class CrearServicioPageRoutingModule {
};
CrearServicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearServicioPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/crear-servicio/crear-servicio.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/crear-servicio/crear-servicio.module.ts ***!
  \****************************************************************/
/*! exports provided: CrearServicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearServicioPageModule", function() { return CrearServicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-servicio-routing.module */ "./src/app/folder/crear-servicio/crear-servicio-routing.module.ts");
/* harmony import */ var _crear_servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-servicio.page */ "./src/app/folder/crear-servicio/crear-servicio.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let CrearServicioPageModule = class CrearServicioPageModule {
};
CrearServicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _crear_servicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearServicioPageRoutingModule"]
        ],
        declarations: [_crear_servicio_page__WEBPACK_IMPORTED_MODULE_6__["CrearServicioPage"]]
    })
], CrearServicioPageModule);



/***/ }),

/***/ "./src/app/folder/crear-servicio/crear-servicio.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/folder/crear-servicio/crear-servicio.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NyZWFyLXNlcnZpY2lvL2NyZWFyLXNlcnZpY2lvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jcmVhci1zZXJ2aWNpby9jcmVhci1zZXJ2aWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/crear-servicio/crear-servicio.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/crear-servicio/crear-servicio.page.ts ***!
  \**************************************************************/
/*! exports provided: CrearServicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearServicioPage", function() { return CrearServicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_servicios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/servicios */ "./src/app/models/servicios.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_servicios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/servicios.service */ "./src/app/services/servicios.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__);







let CrearServicioPage = class CrearServicioPage {
    constructor(angularFireStorage, router, alertCtrt, servicioService, activateRoute, loadingController) {
        this.angularFireStorage = angularFireStorage;
        this.router = router;
        this.alertCtrt = alertCtrt;
        this.servicioService = servicioService;
        this.activateRoute = activateRoute;
        this.loadingController = loadingController;
        this.servicio = new src_app_models_servicios__WEBPACK_IMPORTED_MODULE_2__["Servicios"]();
    }
    ngOnInit() {
    }
    crearServicio(form) {
        this.presentLoading("Espere por favor...");
        this.servicio.Titulo = form.value.titulo;
        this.servicio.Descripcion = form.value.descripcion;
        this.servicio.Usuario = localStorage.getItem('userId');
        this.servicio.Visibilidad = true;
        this.servicio.Visitas = 0;
        this.guardarServicio();
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
    readURL(event) {
        if (event.target.files && event.target.files[0]) {
            this.file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.image = reader.result;
            reader.readAsDataURL(this.file);
        }
    }
    guardarServicio() {
        var storageRef = this.angularFireStorage.storage.ref();
        storageRef.child(this.file.name).put(this.file)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => {
                this.guardarCompleto(downloadURL);
            }).catch(err => { this.loading.dismiss(), this.failedAlert("Error al cargar la foto"); });
        });
    }
    guardarCompleto(downloadURL) {
        this.servicio.Foto = downloadURL;
        this.servicioService.addServicio(this.servicio).then(auth => {
            this.loading.dismiss();
            this.router.navigate(["/servicios"]);
        }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.dismiss();
            this.failedAlert("Algo salió mal, inténtelo de nuevo");
        }));
    }
};
CrearServicioPage.ctorParameters = () => [
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_servicios_service__WEBPACK_IMPORTED_MODULE_4__["ServiciosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
CrearServicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-servicio',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-servicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-servicio/crear-servicio.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-servicio.page.scss */ "./src/app/folder/crear-servicio/crear-servicio.page.scss")).default]
    })
], CrearServicioPage);



/***/ })

}]);
//# sourceMappingURL=folder-crear-servicio-crear-servicio-module.js.map