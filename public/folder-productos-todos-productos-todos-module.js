(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-productos-todos-productos-todos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos-todos/productos-todos.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos-todos/productos-todos.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header nombre=\"categorias\"></app-header>\n\n<ion-content>\n\n  <ion-segment color=\"tertiary\" value=\"productos\">\n\n    \n\n    <ion-segment-button value=\"productos\" [routerLink]=\"['/productos-todos']\" >\n      <ion-icon name=\"gift-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Productos</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"categorias\" [routerLink]=\"['/categorias']\" >\n      <ion-icon name=\"list-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Categorias</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"servicios\" [routerLink]=\"['/servicios']\">\n      <ion-icon name=\"rocket-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Servicios</ion-label>\n    </ion-segment-button>\n\n  </ion-segment>\n\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" style=\"margin-top: 15px;\">\n    <ion-slide style=\"height: 500px;width: 90%;\" *ngFor=\"let producto of productos\">\n      \n\n \n\n          <ion-img *ngIf='producto.Visibilidad' src=\"{{producto.Foto1}}\" style=\"height: 475px;width: 100%;\" (click)='aumentarVisita(producto.id,producto)'></ion-img>\n\n        \n\n\n      \n    </ion-slide>\n\n  </ion-slides>\n\n  <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"validarVendedor()\">\n     <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab> -->\n\n\n\n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/folder/productos-todos/productos-todos-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/productos-todos/productos-todos-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ProductosTodosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosTodosPageRoutingModule", function() { return ProductosTodosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _productos_todos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productos-todos.page */ "./src/app/folder/productos-todos/productos-todos.page.ts");




const routes = [
    {
        path: '',
        component: _productos_todos_page__WEBPACK_IMPORTED_MODULE_3__["ProductosTodosPage"]
    }
];
let ProductosTodosPageRoutingModule = class ProductosTodosPageRoutingModule {
};
ProductosTodosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductosTodosPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/productos-todos/productos-todos.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/productos-todos/productos-todos.module.ts ***!
  \******************************************************************/
/*! exports provided: ProductosTodosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosTodosPageModule", function() { return ProductosTodosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _productos_todos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./productos-todos-routing.module */ "./src/app/folder/productos-todos/productos-todos-routing.module.ts");
/* harmony import */ var _productos_todos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./productos-todos.page */ "./src/app/folder/productos-todos/productos-todos.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let ProductosTodosPageModule = class ProductosTodosPageModule {
};
ProductosTodosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _productos_todos_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductosTodosPageRoutingModule"]
        ],
        declarations: [_productos_todos_page__WEBPACK_IMPORTED_MODULE_6__["ProductosTodosPage"]]
    })
], ProductosTodosPageModule);



/***/ }),

/***/ "./src/app/folder/productos-todos/productos-todos.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/folder/productos-todos/productos-todos.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9wcm9kdWN0b3MtdG9kb3MvcHJvZHVjdG9zLXRvZG9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/folder/productos-todos/productos-todos.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/productos-todos/productos-todos.page.ts ***!
  \****************************************************************/
/*! exports provided: ProductosTodosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosTodosPage", function() { return ProductosTodosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");







let ProductosTodosPage = class ProductosTodosPage {
    constructor(productosService, router, usuarioService, activateRoute) {
        this.productosService = productosService;
        this.router = router;
        this.usuarioService = usuarioService;
        this.activateRoute = activateRoute;
        this.productos = [];
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuarios"]();
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() {
        this.productosService.getProductos().subscribe(res => { this.productos = res; this.shuffle(this.productos); });
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    aumentarVisita(id, productos) {
        productos.Visitas = productos.Visitas + 1;
        this.productosService.updateProducto(id, productos);
        this.router.navigate(['/producto-detalle', productos.id, productos.Vendedor]);
    }
};
ProductosTodosPage.ctorParameters = () => [
    { type: src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_3__["ProductosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductosTodosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productos-todos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./productos-todos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/productos-todos/productos-todos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./productos-todos.page.scss */ "./src/app/folder/productos-todos/productos-todos.page.scss")).default]
    })
], ProductosTodosPage);



/***/ })

}]);
//# sourceMappingURL=folder-productos-todos-productos-todos-module.js.map