(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-categorias-categorias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categorias/categorias.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categorias/categorias.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<app-header nombre=\"categorias\"></app-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-segment color=\"tertiary\" value=\"categorias\">\r\n\r\n    \r\n\r\n    <ion-segment-button value=\"productos\" [routerLink]=\"['/productos-todos']\" >\r\n      <ion-icon name=\"gift-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Productos</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"categorias\" [routerLink]=\"['/categorias']\" >\r\n      <ion-icon name=\"list-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Categorias</ion-label>\r\n    </ion-segment-button>\r\n\r\n    <ion-segment-button value=\"servicios\" [routerLink]=\"['/servicios']\">\r\n      <ion-icon name=\"rocket-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Servicios</ion-label>\r\n    </ion-segment-button>\r\n\r\n  </ion-segment>\r\n\r\n  <ion-searchbar\r\n    color=\"light\" \r\n    placeholder = \"Buscar categoría...\"\r\n    animated\r\n    (ionChange)=\"buscar($event)\">\r\n  </ion-searchbar>\r\n\r\n  <ion-list *ngFor=\"let categoria of categorias | filtroCategoria: textoBuscar\">\r\n    <ion-item [routerLink]=\"['/productos',categoria.id]\">\r\n      <ion-icon name=\"{{categoria.Icono}}\" slot=\"start\" size='large'></ion-icon>\r\n      <ion-label style=\"font-size: 17.2px;\">{{categoria.Nombre}}</ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  \r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/categorias/categorias-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/categorias/categorias-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CategoriasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageRoutingModule", function() { return CategoriasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorias.page */ "./src/app/folder/categorias/categorias.page.ts");




const routes = [
    {
        path: '',
        component: _categorias_page__WEBPACK_IMPORTED_MODULE_3__["CategoriasPage"]
    }
];
let CategoriasPageRoutingModule = class CategoriasPageRoutingModule {
};
CategoriasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriasPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/categorias/categorias.module.ts":
/*!********************************************************!*\
  !*** ./src/app/folder/categorias/categorias.module.ts ***!
  \********************************************************/
/*! exports provided: CategoriasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPageModule", function() { return CategoriasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorias-routing.module */ "./src/app/folder/categorias/categorias-routing.module.ts");
/* harmony import */ var _categorias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias.page */ "./src/app/folder/categorias/categorias.page.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");









let CategoriasPageModule = class CategoriasPageModule {
};
CategoriasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            _categorias_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriasPageRoutingModule"],
        ],
        declarations: [_categorias_page__WEBPACK_IMPORTED_MODULE_6__["CategoriasPage"]]
    })
], CategoriasPageModule);



/***/ }),

/***/ "./src/app/folder/categorias/categorias.page.scss":
/*!********************************************************!*\
  !*** ./src/app/folder/categorias/categorias.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSw4QkFBdUI7QUFBM0IiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/categorias/categorias.page.ts":
/*!******************************************************!*\
  !*** ./src/app/folder/categorias/categorias.page.ts ***!
  \******************************************************/
/*! exports provided: CategoriasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasPage", function() { return CategoriasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categorias.service */ "./src/app/services/categorias.service.ts");



let CategoriasPage = class CategoriasPage {
    constructor(categoriasService) {
        this.categoriasService = categoriasService;
        this.categorias = [];
        this.textoBuscar = '';
        this.numeroOpcion = 1;
    }
    ngOnInit() {
        this.categoriasService.getCategorias().subscribe(res => { this.categorias = res; });
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
    }
};
CategoriasPage.ctorParameters = () => [
    { type: src_app_services_categorias_service__WEBPACK_IMPORTED_MODULE_2__["CategoriasService"] }
];
CategoriasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categorias.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/categorias/categorias.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categorias.page.scss */ "./src/app/folder/categorias/categorias.page.scss")).default]
    })
], CategoriasPage);



/***/ }),

/***/ "./src/app/services/categorias.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categorias.service.ts ***!
  \************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




// import firebase from 'firebase/app';
// import 'firebase/firestore';
let CategoriasService = class CategoriasService {
    constructor(firestore) {
        this.firestore = firestore;
        this.categoriasCollection = firestore.collection('Categorias', ref => ref.orderBy("Nombre", "asc"));
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
CategoriasService.ctorParameters = () => [
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
CategoriasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriasService);



/***/ })

}]);
//# sourceMappingURL=folder-categorias-categorias-module.js.map