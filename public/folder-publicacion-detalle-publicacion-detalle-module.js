(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-publicacion-detalle-publicacion-detalle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicacion-detalle/publicacion-detalle.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicacion-detalle/publicacion-detalle.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"publicaciones\"></app-header>\n\n<ion-content>\n\n  \n\n<ion-card>\n\n  \n    \n        <ion-slides pager=\"true\" [options]=\"slideOpts\">\n          <ion-slide style=\"height: 325px;width: 85%;margin: auto\">\n            <ion-button  expand=\"full\" href=\"{{publicacion.Foto}}\" color=\"light\" style=\"height: 100%;width: 100%;\" fill=\"clear\"><ion-img src=\"{{publicacion.Foto}}\" style=\"height: 275px;width: 100%;\"></ion-img></ion-button>\n          </ion-slide>\n          <ion-slide *ngIf='publicacion.Foto1!=\"\"' style=\"height: 325px;width: 85%;margin: auto\">\n            <ion-button expand=\"full\" href=\"{{publicacion.Foto1}}\" color=\"light\" style=\"height: 100%;width: 100%;\" fill=\"clear\"><ion-img src=\"{{publicacion.Foto1}}\" style=\"height: 275px;width: 100%;\"></ion-img></ion-button>\n          </ion-slide>\n          \n        </ion-slides>\n        \n        \n        \n  \n    \n\n     <ion-card>\n\n        <label style=\"margin: auto;display: block;font-size: 21.5px;font-weight: bold;color:black; align-items: center;text-align: center;margin-top: 7.5px;margin-bottom: 7.5px;\">{{publicacion.Titulo}}</label>\n\n      \n        <ng-container>\n         \n          <ion-label style=\"font-size: 17.5px;margin-left: 7.5px;margin-top: 7px;margin-bottom: 7.5px;\">{{publicacion.Descripcion}}</ion-label>\n        </ng-container>\n      \n\n      </ion-card>\n\n\n    <ion-card style=\"margin-top:11.5px\">\n\n      <label style=\"margin: auto;display: block;font-size: 17.5px;font-weight: bold;color:black; align-items: center;text-align: center;margin-top: 8.5px;\">Contacto:</label>\n\n    \n      <ion-item>\n        <ion-icon name=\"person-outline\" size=\"large\" style=\"margin-right: 8px;\" color=\"success\"></ion-icon>\n        <ion-label style=\"font-size: 17px;\">{{user.Nombre}} {{user.Apellido}}</ion-label>\n      </ion-item>\n    \n      <ion-item>\n        <a href= 'https://api.whatsapp.com/send?phone={{user.Telefono}}'><ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\n        <ion-label>{{user.Telefono}}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <a href=\"mailto:{{user.Correo}}\"><ion-icon name=\"mail-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon></a>\n        <ion-label>{{user.Correo}}</ion-label>\n      </ion-item>\n      \n      <ion-item>\n        <ion-icon name=\"golf-outline\" size=\"large\" color=\"success\" style=\"margin-right: 8px;\"></ion-icon>\n        <ion-label>{{user.Ciudadela}} - Mz: {{user.Manzana}}   Villa: {{user.Villa}}</ion-label>\n      </ion-item> \n\n  </ion-card>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/folder/publicacion-detalle/publicacion-detalle-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/folder/publicacion-detalle/publicacion-detalle-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: PublicacionDetallePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionDetallePageRoutingModule", function() { return PublicacionDetallePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _publicacion_detalle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publicacion-detalle.page */ "./src/app/folder/publicacion-detalle/publicacion-detalle.page.ts");




const routes = [
    {
        path: '',
        component: _publicacion_detalle_page__WEBPACK_IMPORTED_MODULE_3__["PublicacionDetallePage"]
    }
];
let PublicacionDetallePageRoutingModule = class PublicacionDetallePageRoutingModule {
};
PublicacionDetallePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PublicacionDetallePageRoutingModule);



/***/ }),

/***/ "./src/app/folder/publicacion-detalle/publicacion-detalle.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/publicacion-detalle/publicacion-detalle.module.ts ***!
  \**************************************************************************/
/*! exports provided: PublicacionDetallePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionDetallePageModule", function() { return PublicacionDetallePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _publicacion_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./publicacion-detalle-routing.module */ "./src/app/folder/publicacion-detalle/publicacion-detalle-routing.module.ts");
/* harmony import */ var _publicacion_detalle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publicacion-detalle.page */ "./src/app/folder/publicacion-detalle/publicacion-detalle.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let PublicacionDetallePageModule = class PublicacionDetallePageModule {
};
PublicacionDetallePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _publicacion_detalle_routing_module__WEBPACK_IMPORTED_MODULE_5__["PublicacionDetallePageRoutingModule"]
        ],
        declarations: [_publicacion_detalle_page__WEBPACK_IMPORTED_MODULE_6__["PublicacionDetallePage"]]
    })
], PublicacionDetallePageModule);



/***/ }),

/***/ "./src/app/folder/publicacion-detalle/publicacion-detalle.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/folder/publicacion-detalle/publicacion-detalle.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\nlabel {\n  color: grey;\n}\n\ninput[type=\"radio\"] {\n  display: none;\n}\n\n.clasificacion {\n  direction: rtl;\n  /* right to left */\n  unicode-bidi: bidi-override;\n  /* bidi de bidireccional */\n}\n\nlabel:hover {\n  color: orange;\n}\n\nlabel:hover ~ label {\n  color: orange;\n}\n\ninput[type=\"radio\"]:checked ~ label {\n  color: orange;\n}\n\n#form {\n  width: 250px;\n  margin: 0 auto;\n  height: 50px;\n}\n\n#form p {\n  text-align: center;\n}\n\n#form label {\n  font-size: 20px;\n}\n\ninput[type=\"radio\"] {\n  display: none;\n}\n\nlabel {\n  color: grey;\n}\n\n.clasificacion {\n  direction: rtl;\n  unicode-bidi: bidi-override;\n}\n\nlabel:hover,\nlabel:hover ~ label {\n  color: orange;\n}\n\ninput[type=\"radio\"]:checked ~ label {\n  color: orange;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3B1YmxpY2FjaW9uLWRldGFsbGUvcHVibGljYWNpb24tZGV0YWxsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBdUI7QUFDM0I7O0FBR0E7RUFBTyxXQUFVO0FBQ2pCOztBQUFBO0VBQXVCLGFBQVk7QUFJbkM7O0FBSEE7RUFDSSxjQUFjO0VBQUMsa0JBQUE7RUFDZiwyQkFBMkI7RUFBQywwQkFBQTtBQVFoQzs7QUFOQTtFQUFZLGFBQVk7QUFVeEI7O0FBVEE7RUFBb0IsYUFBWTtBQWFoQzs7QUFaQTtFQUFzQyxhQUFZO0FBZ0JsRDs7QUFkQTtFQUNJLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtBQWlCaEI7O0FBZEU7RUFDRSxrQkFBa0I7QUFpQnRCOztBQWRFO0VBQ0UsZUFBZTtBQWlCbkI7O0FBZEU7RUFDRSxhQUFhO0FBaUJqQjs7QUFkRTtFQUNFLFdBQVc7QUFpQmY7O0FBZEU7RUFDRSxjQUFjO0VBQ2QsMkJBQTJCO0FBaUIvQjs7QUFkRTs7RUFFRSxhQUFhO0FBaUJqQjs7QUFkRTtFQUNFLGFBQWE7QUFpQmpCIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3B1YmxpY2FjaW9uLWRldGFsbGUvcHVibGljYWNpb24tZGV0YWxsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufVxyXG5cclxuXHJcbmxhYmVseyBjb2xvcjpncmV5O31cclxuaW5wdXRbdHlwZSA9IFwicmFkaW9cIl17IGRpc3BsYXk6bm9uZTt9XHJcbi5jbGFzaWZpY2FjaW9ue1xyXG4gICAgZGlyZWN0aW9uOiBydGw7LyogcmlnaHQgdG8gbGVmdCAqL1xyXG4gICAgdW5pY29kZS1iaWRpOiBiaWRpLW92ZXJyaWRlOy8qIGJpZGkgZGUgYmlkaXJlY2Npb25hbCAqL1xyXG59XHJcbmxhYmVsOmhvdmVye2NvbG9yOm9yYW5nZTt9XHJcbmxhYmVsOmhvdmVyIH4gbGFiZWx7Y29sb3I6b3JhbmdlO31cclxuaW5wdXRbdHlwZSA9IFwicmFkaW9cIl06Y2hlY2tlZCB+IGxhYmVse2NvbG9yOm9yYW5nZTt9XHJcblxyXG4jZm9ybSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm0gcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gICNmb3JtIGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICBcclxuICAuY2xhc2lmaWNhY2lvbiB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICAgIHVuaWNvZGUtYmlkaTogYmlkaS1vdmVycmlkZTtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWw6aG92ZXIsXHJcbiAgbGFiZWw6aG92ZXIgfiBsYWJlbCB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiBvcmFuZ2U7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/publicacion-detalle/publicacion-detalle.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/publicacion-detalle/publicacion-detalle.page.ts ***!
  \************************************************************************/
/*! exports provided: PublicacionDetallePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionDetallePage", function() { return PublicacionDetallePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_publicacionesGenerales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/publicacionesGenerales */ "./src/app/models/publicacionesGenerales.ts");
/* harmony import */ var src_app_services_publicaciones_generales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/publicaciones-generales.service */ "./src/app/services/publicaciones-generales.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");









let PublicacionDetallePage = class PublicacionDetallePage {
    constructor(angularFireStorage, router, alertCtrt, usuarioService, publicacionesService, activateRoute, loadingController) {
        this.angularFireStorage = angularFireStorage;
        this.router = router;
        this.alertCtrt = alertCtrt;
        this.usuarioService = usuarioService;
        this.publicacionesService = publicacionesService;
        this.activateRoute = activateRoute;
        this.loadingController = loadingController;
        this.publicacion = new src_app_models_publicacionesGenerales__WEBPACK_IMPORTED_MODULE_3__["PublicacionesGenerales"]();
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuarios"]();
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.usuarioService.getUsuario(paramMap.get('idUser')).subscribe(res => { this.user = res; });
            this.publicacionesService.getPublicacion(paramMap.get('idPublicacion')).subscribe(res => { this.publicacion = res; });
        });
    }
};
PublicacionDetallePage.ctorParameters = () => [
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"] },
    { type: src_app_services_publicaciones_generales_service__WEBPACK_IMPORTED_MODULE_4__["PublicacionesGeneralesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
PublicacionDetallePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-publicacion-detalle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./publicacion-detalle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/publicacion-detalle/publicacion-detalle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./publicacion-detalle.page.scss */ "./src/app/folder/publicacion-detalle/publicacion-detalle.page.scss")).default]
    })
], PublicacionDetallePage);



/***/ })

}]);
//# sourceMappingURL=folder-publicacion-detalle-publicacion-detalle-module.js.map