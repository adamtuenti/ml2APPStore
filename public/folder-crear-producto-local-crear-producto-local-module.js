(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-crear-producto-local-crear-producto-local-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-producto-local/crear-producto-local.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-producto-local/crear-producto-local.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"locales\"></app-header>\n<ion-content>\n\n  <ion-segment color=\"tertiary\" value=\"cartilla\">\n\n    <ion-segment-button value=\"anuncios\" [routerLink]=\"['/detalle-local',idLocal,idPropietario]\" routerDirection=\"root\">\n      <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Datos</ion-label>\n    </ion-segment-button>\n    \n    <ion-segment-button value=\"cartilla\" [routerLink]=\"['/productos-locales',idLocal,idPropietario]\" routerDirection=\"root\">\n      <ion-icon name=\"book-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Cartilla</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"grupos\" [routerLink]=\"['/comentarios-local',idLocal,idPropietario]\" routerDirection=\"root\">\n      <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Comentarios</ion-label>\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n  <form #form=\"ngForm\" (ngSubmit)=\"crearProducto(form)\">\n        <ion-list>  \n          \n          <ion-card style=\"margin-top:15px\">\n            <ion-item>\n              <ion-label>Nombre</ion-label>\n            </ion-item>\n            <ion-item>\n            \n              <ion-input required placeholder=\"Ingrese el nombre del producto\" name=\"titulo\" type='text' ngModel required></ion-input>\n            </ion-item>\n  \n          </ion-card>\n        \n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-label>Precio </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea required placeholder=\"Ingrese el precio del producto\" name=\"precio\" type='number' ngModel required></ion-textarea>\n          </ion-item>\n  \n  \n  \n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n    \n            <ion-item>\n              <ion-icon name=\"image-outline\"></ion-icon> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image==null'>Subir foto del producto</ion-text> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image!=null'>Cambiar foto del producto</ion-text>\n          \n              <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel></ion-input>\n    \n            </ion-item>\n    \n    \n            \n            \n          \n            \n    \n          </ion-item>\n    \n        </ion-card>\n        \n        <ion-card style=\"margin-top:15px\" *ngIf='image!=null'>\n          <ion-item>\n\n            <ng-container>\n              <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:5px;margin-bottom: 5px;height: 250px;width: 250px;\"></ion-img>\n\n            </ng-container>\n            \n    \n            \n          </ion-item>\n    \n        </ion-card>\n          \n\n  \n        \n        </ion-list>\n  \n          <ion-button  style=\"width: 150px;margin:auto;margin-bottom: 8.5px;\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\n            Guardar\n          </ion-button>\n      </form>\n  \n  </ion-content>\n  <style>\n  #myFileInput{\n    position: absolute;\n    opacity: 0;\n  }\n  </style>");

/***/ }),

/***/ "./src/app/folder/crear-producto-local/crear-producto-local-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/folder/crear-producto-local/crear-producto-local-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: CrearProductoLocalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearProductoLocalPageRoutingModule", function() { return CrearProductoLocalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crear_producto_local_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-producto-local.page */ "./src/app/folder/crear-producto-local/crear-producto-local.page.ts");




const routes = [
    {
        path: '',
        component: _crear_producto_local_page__WEBPACK_IMPORTED_MODULE_3__["CrearProductoLocalPage"]
    }
];
let CrearProductoLocalPageRoutingModule = class CrearProductoLocalPageRoutingModule {
};
CrearProductoLocalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearProductoLocalPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/crear-producto-local/crear-producto-local.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/folder/crear-producto-local/crear-producto-local.module.ts ***!
  \****************************************************************************/
/*! exports provided: CrearProductoLocalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearProductoLocalPageModule", function() { return CrearProductoLocalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_producto_local_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-producto-local-routing.module */ "./src/app/folder/crear-producto-local/crear-producto-local-routing.module.ts");
/* harmony import */ var _crear_producto_local_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-producto-local.page */ "./src/app/folder/crear-producto-local/crear-producto-local.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let CrearProductoLocalPageModule = class CrearProductoLocalPageModule {
};
CrearProductoLocalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_producto_local_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearProductoLocalPageRoutingModule"]
        ],
        declarations: [_crear_producto_local_page__WEBPACK_IMPORTED_MODULE_6__["CrearProductoLocalPage"]]
    })
], CrearProductoLocalPageModule);



/***/ }),

/***/ "./src/app/folder/crear-producto-local/crear-producto-local.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/folder/crear-producto-local/crear-producto-local.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NyZWFyLXByb2R1Y3RvLWxvY2FsL2NyZWFyLXByb2R1Y3RvLWxvY2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jcmVhci1wcm9kdWN0by1sb2NhbC9jcmVhci1wcm9kdWN0by1sb2NhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/crear-producto-local/crear-producto-local.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/crear-producto-local/crear-producto-local.page.ts ***!
  \**************************************************************************/
/*! exports provided: CrearProductoLocalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearProductoLocalPage", function() { return CrearProductoLocalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_productosLocales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/productosLocales */ "./src/app/models/productosLocales.ts");
/* harmony import */ var src_app_services_productos_locales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos-locales.service */ "./src/app/services/productos-locales.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");









let CrearProductoLocalPage = class CrearProductoLocalPage {
    constructor(angularFireStorage, router, alertCtrt, usuarioService, productosService, activateRoute, loadingController) {
        this.angularFireStorage = angularFireStorage;
        this.router = router;
        this.alertCtrt = alertCtrt;
        this.usuarioService = usuarioService;
        this.productosService = productosService;
        this.activateRoute = activateRoute;
        this.loadingController = loadingController;
        this.producto = new src_app_models_productosLocales__WEBPACK_IMPORTED_MODULE_3__["ProductosLocales"]();
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuarios"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.idLocal = paramMap.get('idLocal');
            this.idPropietario = localStorage.getItem('userId');
            this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
        });
    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    crearProducto(form) {
        this.presentLoading("Espere por favor...");
        var titulo = this.capitalizeFirstLetter(form.value.titulo);
        this.producto.Titulo = titulo;
        this.producto.Precio = form.value.precio;
        this.producto.Local = this.idLocal;
        this.producto.Usuario = localStorage.getItem('idUser');
        if (this.image != null) {
            this.guardarProducto();
        }
        else {
            this.producto.Foto = 'https://firebasestorage.googleapis.com/v0/b/ventasml2.appspot.com/o/iconos%2Femoji.png?alt=media&token=849ac04c-7ba8-447a-b129-9056810d1c29';
            this.productosService.addProducto(this.producto).then(auth => {
                this.loading.dismiss();
                this.router.navigate(["/productos-locales", this.idLocal, this.idPropietario]);
            }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loading.dismiss();
                this.failedAlert("Algo salió mal, inténtelo de nuevo");
            }));
        }
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
    guardarProducto() {
        var storageRef = this.angularFireStorage.storage.ref();
        storageRef.child(this.file.name).put(this.file)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => {
                this.guardarCompleto(downloadURL);
            }).catch(err => { this.loading.dismiss(), this.failedAlert("Error al cargar la foto 2"); });
        });
    }
    guardarCompleto(downloadURL) {
        this.producto.Foto = downloadURL;
        this.user.Productos = this.user.Productos + 1;
        this.usuarioService.updateUsuario(this.idPropietario, this.user);
        this.productosService.addProducto(this.producto).then(auth => {
            this.loading.dismiss();
            this.router.navigate(["/categorias"]);
        }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.dismiss();
            this.failedAlert("Algo salió mal, inténtelo de nuevo");
        }));
    }
};
CrearProductoLocalPage.ctorParameters = () => [
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"] },
    { type: src_app_services_productos_locales_service__WEBPACK_IMPORTED_MODULE_4__["ProductosLocalesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
CrearProductoLocalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-producto-local',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-producto-local.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-producto-local/crear-producto-local.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-producto-local.page.scss */ "./src/app/folder/crear-producto-local/crear-producto-local.page.scss")).default]
    })
], CrearProductoLocalPage);



/***/ })

}]);
//# sourceMappingURL=folder-crear-producto-local-crear-producto-local-module.js.map