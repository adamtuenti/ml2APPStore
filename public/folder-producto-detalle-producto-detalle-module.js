(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-producto-detalle-producto-detalle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/producto-detalle/producto-detalle.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/producto-detalle/producto-detalle.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"categorias\"></app-header>\r\n\r\n<ion-content>\r\n\r\n\r\n    \r\n      <!-- <label style=\"margin: auto;display: block;font-size: 27px;font-weight: bold;color:black; align-items: center;text-align: center;\">{{producto.Titulo}}</label> -->\r\n    \r\n    <!-- <ion-card-header>\r\n    </ion-card-header> -->\r\n\r\n    \r\n      <!-- <ion-item> -->\r\n\r\n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n          <ion-slide style=\"height: 325px;width: 85%;margin: auto\">\r\n            <ion-button  expand=\"full\" href=\"{{producto.Foto1}}\" color=\"light\" style=\"height: 100%;width: 100%;\" fill=\"clear\"><ion-img src=\"{{producto.Foto1}}\" style=\"height: 275px;width: 100%;\"></ion-img></ion-button>\r\n          </ion-slide>\r\n          <ion-slide *ngIf='producto.Foto2!=\"\"' style=\"height: 325px;width: 85%;margin: auto\">\r\n            <ion-button expand=\"full\" href=\"{{producto.Foto2}}\" color=\"light\" style=\"height: 100%;width: 100%;\" fill=\"clear\"><ion-img src=\"{{producto.Foto2}}\" style=\"height: 275px;width: 100%;\"></ion-img></ion-button>\r\n          </ion-slide>\r\n          \r\n        </ion-slides>\r\n        \r\n        \r\n        \r\n  \r\n    \r\n\r\n     <ion-card>\r\n\r\n        <label style=\"margin: auto;display: block;font-size: 21.5px;font-weight: bold;color:black; align-items: center;text-align: center;margin-top: 7.5px;margin-bottom: 7.5px;\">{{producto.Titulo}}</label>\r\n\r\n      \r\n        <ion-label style=\"margin-top: 7.5px;padding: 5px;\">\r\n         \r\n          <ion-label style=\"font-size: 17.5px;margin-left: 7.5px;\">{{producto.Descripcion}}</ion-label>\r\n        </ion-label>\r\n\r\n      \r\n        <ion-item>\r\n         \r\n          <ion-icon name=\"cash-outline\" color=\"success\"></ion-icon><ion-label style=\"font-size: 17.5px;margin-left: 7.5px;\">{{producto.Precio}}</ion-label>\r\n        </ion-item>\r\n\r\n        <!-- <ion-item>\r\n          <a href=\"mailto:{{user.Correo}}\"><ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n          <ion-label>{{user.Correo}}</ion-label>\r\n        </ion-item>    -->\r\n      </ion-card>\r\n\r\n\r\n    <ion-card style=\"margin-top:11.5px\">\r\n\r\n      <label style=\"margin: auto;display: block;font-size: 17.5px;font-weight: bold;color:black; align-items: center;text-align: center;margin-top: 8.5px;\">Contacto:</label>\r\n\r\n    \r\n      <ion-item>\r\n        <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\" color=\"success\"></ion-icon>\r\n        <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\r\n      </ion-item>\r\n    \r\n      <ion-item>\r\n        <a href= 'https://api.whatsapp.com/send?phone={{user.Telefono}}'><ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n        <ion-label>{{user.Telefono}}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <a href=\"mailto:{{user.Correo}}\"><ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\r\n        <ion-label>{{user.Correo}}</ion-label>\r\n      </ion-item>\r\n      \r\n      <ion-item>\r\n        <ion-icon name=\"golf-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\r\n        <ion-label>{{user.Ciudadela}} - Mz: {{user.Manzana}}   Villa: {{user.Villa}}</ion-label>\r\n      </ion-item> \r\n\r\n  </ion-card>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/folder/producto-detalle/producto-detalle-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/folder/producto-detalle/producto-detalle-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ProductoDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoDetallePageRoutingModule", function() { return ProductoDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _producto_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto-detalle.page */ "./src/app/folder/producto-detalle/producto-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _producto_detalle_page__WEBPACK_IMPORTED_MODULE_3__["ProductoDetallePage"]
    }
];
let ProductoDetallePageRoutingModule = class ProductoDetallePageRoutingModule {
};
ProductoDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductoDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/producto-detalle/producto-detalle.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder/producto-detalle/producto-detalle.module.ts ***!
  \********************************************************************/
/*! exports provided: ProductoDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoDetallePageModule", function() { return ProductoDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _producto_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producto-detalle-routing.module */ "./src/app/folder/producto-detalle/producto-detalle-routing.module.ts");
/* harmony import */ var _producto_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto-detalle.page */ "./src/app/folder/producto-detalle/producto-detalle.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let ProductoDetallePageModule = class ProductoDetallePageModule {
};
ProductoDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _producto_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductoDetallePageRoutingModule"]
        ],
        declarations: [_producto_detalle_page__WEBPACK_IMPORTED_MODULE_6__["ProductoDetallePage"]]
    })
], ProductoDetallePageModule);



/***/ }),

/***/ "./src/app/folder/producto-detalle/producto-detalle.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/folder/producto-detalle/producto-detalle.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Byb2R1Y3RvLWRldGFsbGUvcHJvZHVjdG8tZGV0YWxsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvcHJvZHVjdG8tZGV0YWxsZS9wcm9kdWN0by1kZXRhbGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/folder/producto-detalle/producto-detalle.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/producto-detalle/producto-detalle.page.ts ***!
  \******************************************************************/
/*! exports provided: ProductoDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoDetallePage", function() { return ProductoDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_productos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/productos */ "./src/app/models/productos.ts");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");








let ProductoDetallePage = class ProductoDetallePage {
    constructor(productosService, router, usuarioService, activateRoute) {
        this.productosService = productosService;
        this.router = router;
        this.usuarioService = usuarioService;
        this.activateRoute = activateRoute;
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_4__["Usuarios"]();
        this.producto = new src_app_models_productos__WEBPACK_IMPORTED_MODULE_3__["Productos"]();
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const idProducto = paramMap.get('id');
            this.idProducto = idProducto;
            const idVendedor = paramMap.get('vendedor');
            this.idVendedor = idVendedor;
            this.productosService.getProducto(idProducto).subscribe(res => { this.producto = res; });
            this.usuarioService.getUsuario(idVendedor).subscribe(res => this.user = res);
        });
    }
};
ProductoDetallePage.ctorParameters = () => [
    { type: src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_5__["ProductosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ProductoDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-producto-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./producto-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/producto-detalle/producto-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./producto-detalle.page.scss */ "./src/app/folder/producto-detalle/producto-detalle.page.scss")).default]
    })
], ProductoDetallePage);



/***/ })

}]);
//# sourceMappingURL=folder-producto-detalle-producto-detalle-module.js.map