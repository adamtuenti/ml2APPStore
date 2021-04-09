(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-categorias-locales-categorias-locales-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categorias-locales/categorias-locales.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categorias-locales/categorias-locales.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"locales\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar categoría...\"\r\n    animated\r\n    (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n\r\n  <ion-list *ngFor=\"let categoria of categorias | filtroCategoriaLocal: textoBuscar\">\r\n\r\n    <ion-item [routerLink]=\"['/locales',categoria.id]\">\r\n\r\n      <ion-icon name=\"{{categoria.Icono}}\" slot=\"start\" size='large'></ion-icon>\r\n      <ion-label style=\"font-size: 17.2px;\">{{categoria.Nombre}}</ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"crearLocal()\">\r\n     <ion-icon name=\"add-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/categorias-locales/categorias-locales-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/folder/categorias-locales/categorias-locales-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: CategoriasLocalesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasLocalesPageRoutingModule", function() { return CategoriasLocalesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categorias_locales_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorias-locales.page */ "./src/app/folder/categorias-locales/categorias-locales.page.ts");




const routes = [
    {
        path: '',
        component: _categorias_locales_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasLocalesPage"]
    }
];
let CategoriasLocalesPageRoutingModule = class CategoriasLocalesPageRoutingModule {
};
CategoriasLocalesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriasLocalesPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/categorias-locales/categorias-locales.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/categorias-locales/categorias-locales.module.ts ***!
  \************************************************************************/
/*! exports provided: CategoriasLocalesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasLocalesPageModule", function() { return CategoriasLocalesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categorias_locales_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorias-locales-routing.module */ "./src/app/folder/categorias-locales/categorias-locales-routing.module.ts");
/* harmony import */ var _categorias_locales_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias-locales.page */ "./src/app/folder/categorias-locales/categorias-locales.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









let CategoriasLocalesPageModule = class CategoriasLocalesPageModule {
};
CategoriasLocalesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _categorias_locales_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasLocalesPageRoutingModule"]
        ],
        declarations: [_categorias_locales_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasLocalesPage"]]
    })
], CategoriasLocalesPageModule);



/***/ }),

/***/ "./src/app/folder/categorias-locales/categorias-locales.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/folder/categorias-locales/categorias-locales.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NhdGVnb3JpYXMtbG9jYWxlcy9jYXRlZ29yaWFzLWxvY2FsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2NhdGVnb3JpYXMtbG9jYWxlcy9jYXRlZ29yaWFzLWxvY2FsZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/categorias-locales/categorias-locales.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/categorias-locales/categorias-locales.page.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriasLocalesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasLocalesPage", function() { return CategoriasLocalesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_sugerenciaCategoriaLocal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/sugerenciaCategoriaLocal */ "./src/app/models/sugerenciaCategoriaLocal.ts");
/* harmony import */ var src_app_services_categorias_locales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categorias-locales.service */ "./src/app/services/categorias-locales.service.ts");
/* harmony import */ var src_app_services_sugerencia_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sugerencia-locales.service */ "./src/app/services/sugerencia-locales.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let CategoriasLocalesPage = class CategoriasLocalesPage {
    constructor(categoriasService, sugerenciaService, alertCtrt) {
        this.categoriasService = categoriasService;
        this.sugerenciaService = sugerenciaService;
        this.alertCtrt = alertCtrt;
        this.categorias = [];
        this.textoBuscar = '';
        this.sugerenciaLocal = new src_app_models_sugerenciaCategoriaLocal__WEBPACK_IMPORTED_MODULE_2__["sugerenciaCategoriaLocal"]();
    }
    ngOnInit() {
        this.categoriasService.getCategorias().subscribe(res => { this.categorias = res; });
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
    crearLocal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: 'Sugerir una categoría:',
                // message: 'Nombre del curso:',
                inputs: [
                    {
                        name: 'local',
                        placeholder: 'Nombre de la categoría',
                        type: 'text'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            if (data.local != "") {
                                this.agregarLocal(data.local);
                            }
                            else if (data.local == "") {
                                //this.failedAlert("El campo email es requerido");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    agregarLocal(local) {
        var fechaActual = new Date();
        this.sugerenciaLocal.Titulo = local;
        this.sugerenciaLocal.Visibilidad = true;
        this.sugerenciaLocal.Usuario = localStorage.getItem('userId');
        this.sugerenciaLocal.Tipo = 'categoriaLocal';
        this.sugerenciaLocal.Fecha = fechaActual.toString();
        ;
        this.sugerenciaService.addSugerencia(this.sugerenciaLocal);
    }
};
CategoriasLocalesPage.ctorParameters = () => [
    { type: src_app_services_categorias_locales_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasLocalesService"] },
    { type: src_app_services_sugerencia_locales_service__WEBPACK_IMPORTED_MODULE_4__["SugerenciaLocalesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
CategoriasLocalesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias-locales',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categorias-locales.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categorias-locales/categorias-locales.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categorias-locales.page.scss */ "./src/app/folder/categorias-locales/categorias-locales.page.scss")).default]
    })
], CategoriasLocalesPage);



/***/ }),

/***/ "./src/app/services/categorias-locales.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/categorias-locales.service.ts ***!
  \********************************************************/
/*! exports provided: CategoriasLocalesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasLocalesService", function() { return CategoriasLocalesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// import firebase from 'firebase/app';
// import 'firebase/firestore';
let CategoriasLocalesService = class CategoriasLocalesService {
    constructor(firestore) {
        this.firestore = firestore;
        this.categoriasCollection = firestore.collection('CategoriasLocales', ref => ref.orderBy("Nombre", "asc"));
        this.categorias = this.categoriasCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    getCategorias() {
        return this.categorias;
    }
};
CategoriasLocalesService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CategoriasLocalesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriasLocalesService);



/***/ })

}]);
//# sourceMappingURL=folder-categorias-locales-categorias-locales-module.js.map