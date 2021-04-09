(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-usuarios-detalle-usuarios-detalle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/usuarios-detalle/usuarios-detalle.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/usuarios-detalle/usuarios-detalle.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons>\n      <ion-menu-button>\n      </ion-menu-button>\n      <ion-title>Usuario Detalle</ion-title>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  \n\n  <ion-item style=\"margin-bottom: 3.5px\">\n  \n    <ion-button  expand=\"full\"  expand=\"full\" href=\"{{user.FotoPerfil}}\" style=\"margin-top: 3.5px;font-size: 15px;margin-right: 7.5px;\">Perfil</ion-button>\n\n    <ion-row>\n      <img src=\"{{user.FotoPerfil}}\" alet=\"foto\" style=\"width: 250px; height: 225px;margin-top: 3.5px;margin-bottom: 3.5px;\">\n    </ion-row>\n    \n \n    \n    \n\n  </ion-item>\n  \n  <ion-item>\n    <ion-button  expand=\"full\"  expand=\"full\" href=\"{{user.Foto}}\" style=\"margin-top: 3.5px;font-size: 15px;margin-right: 7.5px;\">Carnet</ion-button>\n    <img src=\"{{user.Foto}}\" alet=\"foto\" style=\"width: 250px; height: 225px;margin-top: 3.5px;margin-bottom: 3.5px;\">\n\n  </ion-item>\n\n\n  \n \n   \n  <ion-card>\n\n    <ion-item>\n      <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\n      <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"key-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\n      <ion-label style=\"font-size: 17px;\">{{id}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <a href=\"mailto:{{user.Correo}}\"><ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\n      <ion-label>{{user.Correo}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <a href= 'https://api.whatsapp.com/send?phone={{user.Telefono}}'><ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\n      <ion-label style=\"font-size: 17px;\">{{user.Telefono}}</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"card-outline\" size=\"large\" style=\"margin-right: 8px;\"></ion-icon>\n      <ion-label style=\"font-size: 17px;\">{{user.Matricula}}</ion-label>\n    </ion-item>    \n\n  </ion-card>\n  \n  \n  \n\n\n</ion-content>\n\n\n<style>\n  .circle-pic {     \n    width: 55%;\n    height: 25%;\n    margin: auto;\n    display: block;\n    margin-bottom: 10px;\n    margin-top: 10px;\n    /* -webkit-border-radius: 50%;\n    border-radius: 50%;\n    border-width: 50px; */\n\n  }\n</style>\n");

/***/ }),

/***/ "./src/app/folder/usuarios-detalle/usuarios-detalle-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/folder/usuarios-detalle/usuarios-detalle-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: UsuariosDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosDetallePageRoutingModule", function() { return UsuariosDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _usuarios_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios-detalle.page */ "./src/app/folder/usuarios-detalle/usuarios-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _usuarios_detalle_page__WEBPACK_IMPORTED_MODULE_3__["UsuariosDetallePage"]
    }
];
let UsuariosDetallePageRoutingModule = class UsuariosDetallePageRoutingModule {
};
UsuariosDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UsuariosDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/usuarios-detalle/usuarios-detalle.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder/usuarios-detalle/usuarios-detalle.module.ts ***!
  \********************************************************************/
/*! exports provided: UsuariosDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosDetallePageModule", function() { return UsuariosDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _usuarios_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios-detalle-routing.module */ "./src/app/folder/usuarios-detalle/usuarios-detalle-routing.module.ts");
/* harmony import */ var _usuarios_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios-detalle.page */ "./src/app/folder/usuarios-detalle/usuarios-detalle.page.ts");







let UsuariosDetallePageModule = class UsuariosDetallePageModule {
};
UsuariosDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _usuarios_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsuariosDetallePageRoutingModule"]
        ],
        declarations: [_usuarios_detalle_page__WEBPACK_IMPORTED_MODULE_6__["UsuariosDetallePage"]]
    })
], UsuariosDetallePageModule);



/***/ }),

/***/ "./src/app/folder/usuarios-detalle/usuarios-detalle.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/folder/usuarios-detalle/usuarios-detalle.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3VzdWFyaW9zLWRldGFsbGUvdXN1YXJpb3MtZGV0YWxsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9mb2xkZXIvdXN1YXJpb3MtZGV0YWxsZS91c3Vhcmlvcy1kZXRhbGxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/folder/usuarios-detalle/usuarios-detalle.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/usuarios-detalle/usuarios-detalle.page.ts ***!
  \******************************************************************/
/*! exports provided: UsuariosDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosDetallePage", function() { return UsuariosDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");






let UsuariosDetallePage = class UsuariosDetallePage {
    constructor(usuarioService, activateRoute, router) {
        this.usuarioService = usuarioService;
        this.activateRoute = activateRoute;
        this.router = router;
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuarios"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            const id = paramMap.get('id');
            this.id = id;
            this.usuarioService.getUsuario(id).subscribe(res => { this.user = res; });
        });
    }
};
UsuariosDetallePage.ctorParameters = () => [
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UsuariosDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuarios-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./usuarios-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/usuarios-detalle/usuarios-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./usuarios-detalle.page.scss */ "./src/app/folder/usuarios-detalle/usuarios-detalle.page.scss")).default]
    })
], UsuariosDetallePage);



/***/ })

}]);
//# sourceMappingURL=folder-usuarios-detalle-usuarios-detalle-module.js.map