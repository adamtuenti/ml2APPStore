(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-mis-publicaciones-mis-publicaciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mis-publicaciones/mis-publicaciones.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mis-publicaciones/mis-publicaciones.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"perfil\"></app-header>\n\n\n<ion-content>\n\n\n  <ng-container *ngIf=\"!condicion\">\n    <ng-container *ngFor=\"let publicacion of publicaciones\">\n      <ion-card style=\"background-color: #ACC8FC\" *ngIf=\"publicacion.Usuario == idUser\" >\n\n          <ion-card-header [routerLink]=\"['/publicacion-detalle',publicacion.id,publicacion.Usuario]\" >\n            <ion-item>\n              <ion-card-title >{{publicacion.Titulo}}</ion-card-title>  \n            </ion-item> \n\n          </ion-card-header>\n\n          <ion-card-content [routerLink]=\"['/publicacion-detalle',publicacion.id,publicacion.Usuario]\" >\n            {{publicacion.Descripcion}}\n          </ion-card-content>\n\n          <ion-item>\n\n            <ion-icon name=\"trash-outline\" slot='start' color='danger'(click)=\"alert(publicacion.id)\"></ion-icon>\n            \n            <ion-item slot='end'>\n              <ion-button fill=\"outline\" slot='end'><ion-icon name=\"eye-outline\" ></ion-icon><label style=\"font-size: 12;margin-left: 7.5px;\" >{{publicacion.Visitas}}</label></ion-button>\n              \n              {{publicacion.Fecha | date:'yyyy/MM/dd'}}\n            </ion-item>\n\n          </ion-item>\n          \n          \n\n        \n      </ion-card>\n\n    </ng-container>\n  </ng-container>\n\n  <ng-container *ngIf=\"condicion\">\n\n    <div style=\"margin-top: 50px;\" align='center'> \n      <ion-text color=\"medium\">\n\n        <img src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/iconos%2Fgrupos.png?alt=media&token=8aa84d63-18b5-424d-9b6a-dfd1075eeb77\" style=\"width: 55%; height:58%;margin:auto;\" alet=\"foto\">\n        \n        <p style=\"font-size: 21px;margin:auto;margin-top:7.5px\">No hay publicaciones realizadas.</p>\n      </ion-text>  \n    </div>\n  </ng-container>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/crear-publicaciones-generales']\">\n    <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/folder/mis-publicaciones/mis-publicaciones-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder/mis-publicaciones/mis-publicaciones-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: MisPublicacionesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisPublicacionesPageRoutingModule", function() { return MisPublicacionesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mis_publicaciones_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-publicaciones.page */ "./src/app/folder/mis-publicaciones/mis-publicaciones.page.ts");




const routes = [
    {
        path: '',
        component: _mis_publicaciones_page__WEBPACK_IMPORTED_MODULE_3__["MisPublicacionesPage"]
    }
];
let MisPublicacionesPageRoutingModule = class MisPublicacionesPageRoutingModule {
};
MisPublicacionesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MisPublicacionesPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/mis-publicaciones/mis-publicaciones.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/mis-publicaciones/mis-publicaciones.module.ts ***!
  \**********************************************************************/
/*! exports provided: MisPublicacionesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisPublicacionesPageModule", function() { return MisPublicacionesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _mis_publicaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mis-publicaciones-routing.module */ "./src/app/folder/mis-publicaciones/mis-publicaciones-routing.module.ts");
/* harmony import */ var _mis_publicaciones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mis-publicaciones.page */ "./src/app/folder/mis-publicaciones/mis-publicaciones.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let MisPublicacionesPageModule = class MisPublicacionesPageModule {
};
MisPublicacionesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _mis_publicaciones_routing_module__WEBPACK_IMPORTED_MODULE_5__["MisPublicacionesPageRoutingModule"]
        ],
        declarations: [_mis_publicaciones_page__WEBPACK_IMPORTED_MODULE_6__["MisPublicacionesPage"]]
    })
], MisPublicacionesPageModule);



/***/ }),

/***/ "./src/app/folder/mis-publicaciones/mis-publicaciones.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/folder/mis-publicaciones/mis-publicaciones.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL21pcy1wdWJsaWNhY2lvbmVzL21pcy1wdWJsaWNhY2lvbmVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9taXMtcHVibGljYWNpb25lcy9taXMtcHVibGljYWNpb25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/mis-publicaciones/mis-publicaciones.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder/mis-publicaciones/mis-publicaciones.page.ts ***!
  \********************************************************************/
/*! exports provided: MisPublicacionesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisPublicacionesPage", function() { return MisPublicacionesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_publicaciones_generales_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/publicaciones-generales.service */ "./src/app/services/publicaciones-generales.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");








let MisPublicacionesPage = class MisPublicacionesPage {
    constructor(angularFireStorage, router, alertCtrt, usuarioService, publicacionesService, activateRoute, loadingController) {
        this.angularFireStorage = angularFireStorage;
        this.router = router;
        this.alertCtrt = alertCtrt;
        this.usuarioService = usuarioService;
        this.publicacionesService = publicacionesService;
        this.activateRoute = activateRoute;
        this.loadingController = loadingController;
        this.idUser = localStorage.getItem('userId');
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_6__["Usuarios"]();
        this.publicaciones = [];
    }
    ngOnInit() {
        this.publicacionesService.getPublicaciones().subscribe(res => { this.publicaciones = res; this.condicion = this.getDatos(); });
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
    }
    getDatos() {
        for (let i = 0; i < this.publicaciones.length; i++) {
            if (this.publicaciones[i].Usuario == this.idUser) {
                return false;
            }
        }
        return true;
    }
    alert(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "¿Desea eliminar esta publicación?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Elminar',
                        handler: (data) => {
                            this.remove(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    remove(id) {
        this.publicacionesService.removePublicacion(id);
        // this.user.Publicaciones = this.user.Publicaciones - 1;
        // this.usuarioService.updateUsuario(this.idUser,this.user)
    }
};
MisPublicacionesPage.ctorParameters = () => [
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"] },
    { type: src_app_services_publicaciones_generales_service__WEBPACK_IMPORTED_MODULE_3__["PublicacionesGeneralesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }
];
MisPublicacionesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mis-publicaciones',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mis-publicaciones.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/mis-publicaciones/mis-publicaciones.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mis-publicaciones.page.scss */ "./src/app/folder/mis-publicaciones/mis-publicaciones.page.scss")).default]
    })
], MisPublicacionesPage);



/***/ })

}]);
//# sourceMappingURL=folder-mis-publicaciones-mis-publicaciones-module.js.map