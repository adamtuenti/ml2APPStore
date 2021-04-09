(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-crear-producto-crear-producto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-producto/crear-producto.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-producto/crear-producto.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"categorias\"></app-header>\n<ion-content>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"crearProducto(form)\">\n        <ion-list>  \n          \n          <ion-card style=\"margin-top:15px\">\n            <ion-item>\n              <ion-label>Título </ion-label>\n            </ion-item>\n            <ion-item>\n            \n              <ion-input required placeholder=\"Ingrese el título del producto\" name=\"titulo\" type='text' ngModel required></ion-input>\n            </ion-item>\n  \n          </ion-card>\n        \n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-label>Descripción </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea required placeholder=\"Ingrese una descripción del producto\" name=\"descripcion\" type='text' ngModel required></ion-textarea>\n          </ion-item>\n  \n  \n  \n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n            <ion-label>Precio </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-textarea required placeholder=\"Ingrese el precio del producto\" name=\"precio\" type='number' ngModel required></ion-textarea>\n          </ion-item>\n  \n  \n  \n        </ion-card>\n\n        <ion-card style=\"margin-top:15px\">\n          <ion-item>\n    \n            <ion-item>\n              <ion-icon name=\"image-outline\"></ion-icon> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image==null'>Subir foto</ion-text> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image!=null'>Cambiar foto 1</ion-text>\n          \n              <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto1\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\n    \n            </ion-item>\n    \n            <ion-item slot='end' *ngIf='image!=null'>\n              <ion-icon name=\"images-outline\"></ion-icon> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image1==null'>Añadir foto</ion-text> <ion-text color=\"\" style=\"margin-left: 7.5px;\" *ngIf='image1!=null'>Cambiar foto 2</ion-text>\n          \n              <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto2\" (change)=\"readURL1($event);\" class=\"fileInput\" ngModel></ion-input>\n    \n            </ion-item>\n    \n            \n            \n          \n            \n    \n          </ion-item>\n    \n        </ion-card>\n        \n        <ion-card style=\"margin-top:15px\" *ngIf='image!=null'>\n          <ion-item>\n\n            <ng-container>\n              <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:5px;margin-bottom: 5px;height: 250px;width: 250px;\"></ion-img>\n\n            </ng-container>\n    \n            \n          \n            \n            <ng-container *ngIf='image1!=null'>\n              <ion-img id=\"blah\" [src]=\"image1\" alt=\"your image\" style=\"margin-left: 5px;margin-top:5px;margin-bottom: 5px;height: 250px;width: 250px;\"></ion-img>\n            </ng-container>\n            \n    \n            \n          </ion-item>\n    \n        </ion-card>\n          \n        \n      <!-- <ion-card style=\"margin-top:15px\">\n        <ion-item>\n          <ion-label><ion-icon name=\"image-outline\"></ion-icon> <ion-text color=\"\" style=\"margin-left: 7.5px;\">Seleccionar foto</ion-text></ion-label>\n        \n          <ion-input type='file' accept=\"image/*\" id=\"myFileInput\" name=\"foto\" (change)=\"readURL($event);\" class=\"fileInput\" ngModel required></ion-input>\n        </ion-item>\n  \n      </ion-card> -->\n  \n        \n        </ion-list>\n  \n          <ion-button  style=\"width: 150px;margin:auto;margin-bottom: 8.5px;\" type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\">\n            Guardar\n          </ion-button>\n      </form>\n  \n  </ion-content>\n  <style>\n  #myFileInput{\n    position: absolute;\n    opacity: 0;\n  }\n  </style>");

/***/ }),

/***/ "./src/app/folder/crear-producto/crear-producto-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/folder/crear-producto/crear-producto-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: CrearProductoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearProductoPageRoutingModule", function() { return CrearProductoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _crear_producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crear-producto.page */ "./src/app/folder/crear-producto/crear-producto.page.ts");




const routes = [
    {
        path: '',
        component: _crear_producto_page__WEBPACK_IMPORTED_MODULE_3__["CrearProductoPage"]
    }
];
let CrearProductoPageRoutingModule = class CrearProductoPageRoutingModule {
};
CrearProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CrearProductoPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/crear-producto/crear-producto.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/crear-producto/crear-producto.module.ts ***!
  \****************************************************************/
/*! exports provided: CrearProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearProductoPageModule", function() { return CrearProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _crear_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crear-producto-routing.module */ "./src/app/folder/crear-producto/crear-producto-routing.module.ts");
/* harmony import */ var _crear_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crear-producto.page */ "./src/app/folder/crear-producto/crear-producto.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let CrearProductoPageModule = class CrearProductoPageModule {
};
CrearProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _crear_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["CrearProductoPageRoutingModule"]
        ],
        declarations: [_crear_producto_page__WEBPACK_IMPORTED_MODULE_6__["CrearProductoPage"]]
    })
], CrearProductoPageModule);



/***/ }),

/***/ "./src/app/folder/crear-producto/crear-producto.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/folder/crear-producto/crear-producto.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NyZWFyLXByb2R1Y3RvL2NyZWFyLXByb2R1Y3RvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jcmVhci1wcm9kdWN0by9jcmVhci1wcm9kdWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/crear-producto/crear-producto.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/crear-producto/crear-producto.page.ts ***!
  \**************************************************************/
/*! exports provided: CrearProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearProductoPage", function() { return CrearProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_productos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/productos */ "./src/app/models/productos.ts");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");









let CrearProductoPage = class CrearProductoPage {
    constructor(angularFireStorage, usuarioService, router, alertCtrt, productosService, activateRoute, loadingController) {
        this.angularFireStorage = angularFireStorage;
        this.usuarioService = usuarioService;
        this.router = router;
        this.alertCtrt = alertCtrt;
        this.productosService = productosService;
        this.activateRoute = activateRoute;
        this.loadingController = loadingController;
        this.producto = new src_app_models_productos__WEBPACK_IMPORTED_MODULE_3__["Productos"]();
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_7__["Usuarios"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.idCategoria = paramMap.get('idCategoria');
        });
        this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; this.idUser = localStorage.getItem('userId'); });
    }
    crearProducto(form) {
        this.presentLoading("Espere por favor...");
        this.producto.Titulo = form.value.titulo;
        this.producto.Descripcion = form.value.descripcion;
        this.producto.Vendedor = localStorage.getItem('userId');
        this.producto.Categoria = this.idCategoria;
        this.producto.Visitas = 0;
        this.producto.Precio = form.value.precio;
        this.producto.Visibilidad = true;
        this.guardarProducto();
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
    readURL1(event) {
        if (event.target.files && event.target.files[0]) {
            this.file1 = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.image1 = reader.result;
            reader.readAsDataURL(this.file1);
        }
    }
    guardarProducto() {
        var storageRef = this.angularFireStorage.storage.ref();
        var storageRef1 = this.angularFireStorage.storage.ref();
        storageRef.child(this.file.name).put(this.file)
            .then(data => {
            data.ref.getDownloadURL().then(downloadURL => {
                if (this.file1 != null) {
                    storageRef1.child(this.file1.name).put(this.file1)
                        .then(data => {
                        data.ref.getDownloadURL().then(downloadURL1 => this.guardarCompleto(downloadURL, downloadURL1));
                    }).catch(err => { this.loading.dismiss(), this.failedAlert("Error al cargar la foto 2"); });
                }
                else {
                    this.guardarCompleto(downloadURL, '');
                }
            }).catch(err => { this.loading.dismiss(), this.failedAlert("Error al cargar la foto 1"); });
        });
    }
    guardarCompleto(downloadURL, downloadURL1) {
        this.producto.Foto1 = downloadURL;
        this.producto.Foto2 = downloadURL1;
        this.user.Productos = this.user.Productos + 1;
        this.usuarioService.updateUsuario(this.idUser, this.user);
        this.productosService.addProducto(this.producto).then(auth => {
            this.loading.dismiss();
            this.router.navigate(["/productos", this.idCategoria]);
        }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading.dismiss();
            this.failedAlert("Algo salió mal, inténtelo de nuevo");
        }));
    }
};
CrearProductoPage.ctorParameters = () => [
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
CrearProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crear-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./crear-producto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/crear-producto/crear-producto.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./crear-producto.page.scss */ "./src/app/folder/crear-producto/crear-producto.page.scss")).default]
    })
], CrearProductoPage);



/***/ })

}]);
//# sourceMappingURL=folder-crear-producto-crear-producto-module.js.map