(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-producto-local-editar-producto-local-editar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/producto-local-editar/producto-local-editar.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/producto-local-editar/producto-local-editar.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"locales\"></app-header>\n\n<ion-content>\n\n  <ion-segment color=\"tertiary\" value=\"cartilla\">\n\n    <ion-segment-button value=\"anuncios\" [routerLink]=\"['/detalle-local',idLocal,idPropietario]\" routerDirection=\"root\">\n      <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Datos</ion-label>\n    </ion-segment-button>\n    \n    <ion-segment-button value=\"cartilla\" [routerLink]=\"['/productos-locales',idLocal,idPropietario]\" routerDirection=\"root\">\n      <ion-icon name=\"book-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Cartilla</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"grupos\" [routerLink]=\"['/comentarios-local',idLocal,idPropietario]\" routerDirection=\"root\">\n      <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Comentarios</ion-label>\n    </ion-segment-button>\n\n  </ion-segment>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"UpdateProducto(form)\">\n    <ion-list>   \n        \n  \n\n \n      \n\n\n\n     \n\n      \n      \n      <ion-item>\n\n                  <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:7.5px;margin-bottom: 7.5px;height: 350px;width: 350px;\"></ion-img>\n         \n        </ion-item>\n\n\n\n      <ion-item>\n        <ion-label><ion-icon name=\"cloud-upload-outline\"></ion-icon>  <ion-text style='margin-left:7.5px'>Cambiar foto</ion-text></ion-label>\n        <ion-input id=\"myFileInput\" (change)=\"readURL($event);\" accept=\"image/*\" placeholder=\"archivo\" name=\"archivo\" type='file' ngModel value=\"{{file}}\"></ion-input>\n      \n     \n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"cash-outline\" color=\"success\" size='large' style = 'margin-right: 7.5px;'></ion-icon>\n        <ion-input value=\"{{producto.Precio}}\" name=\"precio\" required type='text' ngModel></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name=\"information-circle-outline\" color=\"success\" size='large' style = 'margin-right: 7.5px;'></ion-icon>\n        <ion-input value=\"{{producto.Titulo}}\" name=\"titulo\" required type='text' ngModel></ion-input>\n      </ion-item>\n\n\n      \n\n\n    </ion-list> \n\n    <div class=\"ion-padding\" align=\"center\">\n      <ion-button type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\" style=\"width: 150px;\">\n        Actualizar\n      </ion-button>\n      \n    </div>\n  </form>\n\n</ion-content>\n<style>\n  #myFileInput{\n    position: absolute;\n    opacity: 0;\n  }\n</style>");

/***/ }),

/***/ "./src/app/folder/producto-local-editar/producto-local-editar-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/folder/producto-local-editar/producto-local-editar-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductoLocalEditarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoLocalEditarPageRoutingModule", function() { return ProductoLocalEditarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _producto_local_editar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./producto-local-editar.page */ "./src/app/folder/producto-local-editar/producto-local-editar.page.ts");




const routes = [
    {
        path: '',
        component: _producto_local_editar_page__WEBPACK_IMPORTED_MODULE_3__["ProductoLocalEditarPage"]
    }
];
let ProductoLocalEditarPageRoutingModule = class ProductoLocalEditarPageRoutingModule {
};
ProductoLocalEditarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductoLocalEditarPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/producto-local-editar/producto-local-editar.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder/producto-local-editar/producto-local-editar.module.ts ***!
  \******************************************************************************/
/*! exports provided: ProductoLocalEditarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoLocalEditarPageModule", function() { return ProductoLocalEditarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _producto_local_editar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./producto-local-editar-routing.module */ "./src/app/folder/producto-local-editar/producto-local-editar-routing.module.ts");
/* harmony import */ var _producto_local_editar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./producto-local-editar.page */ "./src/app/folder/producto-local-editar/producto-local-editar.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let ProductoLocalEditarPageModule = class ProductoLocalEditarPageModule {
};
ProductoLocalEditarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _producto_local_editar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductoLocalEditarPageRoutingModule"]
        ],
        declarations: [_producto_local_editar_page__WEBPACK_IMPORTED_MODULE_6__["ProductoLocalEditarPage"]]
    })
], ProductoLocalEditarPageModule);



/***/ }),

/***/ "./src/app/folder/producto-local-editar/producto-local-editar.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/folder/producto-local-editar/producto-local-editar.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3Byb2R1Y3RvLWxvY2FsLWVkaXRhci9wcm9kdWN0by1sb2NhbC1lZGl0YXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3Byb2R1Y3RvLWxvY2FsLWVkaXRhci9wcm9kdWN0by1sb2NhbC1lZGl0YXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/producto-local-editar/producto-local-editar.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/folder/producto-local-editar/producto-local-editar.page.ts ***!
  \****************************************************************************/
/*! exports provided: ProductoLocalEditarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoLocalEditarPage", function() { return ProductoLocalEditarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_productosLocales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/productosLocales */ "./src/app/models/productosLocales.ts");
/* harmony import */ var src_app_services_productos_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos-locales.service */ "./src/app/services/productos-locales.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mensaje-error.service */ "./src/app/services/mensaje-error.service.ts");









let ProductoLocalEditarPage = class ProductoLocalEditarPage {
    constructor(productosService, router, activateRoute, angularFireStorage, loadingController, mensajeErrorService, alertCtrt) {
        this.productosService = productosService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.angularFireStorage = angularFireStorage;
        this.loadingController = loadingController;
        this.mensajeErrorService = mensajeErrorService;
        this.alertCtrt = alertCtrt;
        this.producto = new src_app_models_productosLocales__WEBPACK_IMPORTED_MODULE_3__["ProductosLocales"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.idProducto = paramMap.get('idProducto');
            this.idLocal = paramMap.get('idLocal');
            this.idPropietario = paramMap.get('idPropietario');
            this.productosService.getProducto(this.idProducto).subscribe(res => { this.producto = res; this.image = res.Foto; });
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
    UpdateProducto(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.presentLoading("Espere por favor...");
            this.presentLoading("Espere por favor...");
            this.UpdateProductoCompleto(form.value.precio, form.value.titulo, this.image);
        });
    }
    guardarArchivo(precio, titulo) {
        //this.presentLoading("Espere por favor...");
        var storageRef = this.angularFireStorage.storage.ref();
        storageRef.child(this.file.name).put(this.file)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => {
                this.UpdateProductoCompleto(precio, titulo, downloadURL);
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
    UpdateProductoCompleto(precio, titulo, downloadURL) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.producto.Precio = precio;
            this.producto.Foto = downloadURL;
            this.producto.Titulo = titulo;
            this.productosService.updateProducto(this.idProducto, this.producto).
                then(auth => {
                this.loading.dismiss();
                this.router.navigate(['/productos-locales', this.idLocal, this.idPropietario]);
            }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loading.dismiss();
                var mensaje = error.code.split('/')[1];
                const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                this.failedAlert(presentarMensaje);
            }));
        });
    }
};
ProductoLocalEditarPage.ctorParameters = () => [
    { type: src_app_services_productos_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductosLocalesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_7__["MensajeErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
ProductoLocalEditarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-producto-local-editar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./producto-local-editar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/producto-local-editar/producto-local-editar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./producto-local-editar.page.scss */ "./src/app/folder/producto-local-editar/producto-local-editar.page.scss")).default]
    })
], ProductoLocalEditarPage);



/***/ })

}]);
//# sourceMappingURL=folder-producto-local-editar-producto-local-editar-module.js.map