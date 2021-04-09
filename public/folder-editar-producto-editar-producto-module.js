(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-editar-producto-editar-producto-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-producto/editar-producto.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-producto/editar-producto.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"perfil\"></app-header>\n\n<ion-content>\n\n\n  <form #form=\"ngForm\" (ngSubmit)=\"UpdateProducto(form)\">\n    <ion-list>   \n        \n  \n\n \n      \n\n\n\n     \n\n      \n      \n      \n\n      <ion-item>\n        <ion-icon name=\"bag-check-outline\" color=\"success\" size='large' style = 'margin-right: 7.5px;'></ion-icon>\n        <ion-input value=\"{{producto.Titulo}}\" name=\"titulo\" type='text' ngModel></ion-input>\n      </ion-item>\n\n      \n\n      <ion-item>\n        <ion-icon name=\"cash-outline\" color=\"success\" size='large' style = 'margin-right: 7.5px;'></ion-icon>\n        <ion-input value=\"{{producto.Precio}}\" name=\"precio\" type='text' ngModel></ion-input>\n      </ion-item>\n\n      <ng-container>\n        \n        <ion-input style= 'text-align: center;' value=\"{{producto.Descripcion}}\" name=\"descripcion\" type='text' ngModel></ion-input>\n      </ng-container>\n\n      <ion-item style='margin-top: 7.5px;'>\n\n        <ion-img id=\"blah\" [src]=\"image\" alt=\"your image\" style=\"margin-top:5px;margin-bottom: 5px;height: 350px;width: 350px;margin:auto;\"></ion-img>\n        \n         \n      </ion-item>\n\n\n      \n      <ion-item >\n\n        \n          <ion-icon name=\"cloud-upload-outline\"></ion-icon>  <ion-text style='margin-left:7.5px'>Cambiar foto 1</ion-text>\n          <ion-input id=\"myFileInput\" (change)=\"readURL($event);\" accept=\"image/*\" placeholder=\"archivo\" name=\"archivo\" type='file' ngModel value=\"{{file0}}\"></ion-input>\n        \n     \n      </ion-item>\n\n      <ion-item *ngIf='image1!=\"\"'>\n        <ion-img id=\"blah\" [src]=\"image1\" alt=\"your image\" style=\"margin-top:5px;margin-bottom: 5px;height: 350px;width: 350px;\"></ion-img>\n      </ion-item>\n\n      \n      <ion-item *ngIf='image1!=\"\"'>\n        <ion-icon name=\"cloud-upload-outline\"></ion-icon>  <ion-text style='margin-left:5.5px'>Cambiar foto 2</ion-text>\n        <ion-input id=\"myFileInput\" (change)=\"readURL1($event);\" accept=\"image/*\" placeholder=\"archivo\" name=\"archivo1\" type='file' ngModel value=\"{{file1}}\"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf='image1==\"\"'>\n        <ion-icon name=\"cloud-upload-outline\"></ion-icon>  <ion-text style='margin-left:5.5px'>Agregar foto</ion-text>\n        <ion-input id=\"myFileInput\" (change)=\"readURL1($event);\" accept=\"image/*\" placeholder=\"archivo\" name=\"archivo1\" type='file' ngModel value=\"{{file1}}\"></ion-input>\n    \n\n      </ion-item>\n        \n      \n\n\n      \n\n\n    </ion-list> \n\n    <div class=\"ion-padding\" align=\"center\">\n      <ion-button type=\"submit\"  [disabled]=\"form.invalid\" expand=\"block\" style=\"width: 150px;\">\n        Actualizar\n      </ion-button>\n      \n    </div>\n  </form>\n\n</ion-content>\n<style>\n  #myFileInput{\n    position: absolute;\n    opacity: 0;\n  }\n</style>");

/***/ }),

/***/ "./src/app/folder/editar-producto/editar-producto-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/folder/editar-producto/editar-producto-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: EditarProductoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarProductoPageRoutingModule", function() { return EditarProductoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _editar_producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editar-producto.page */ "./src/app/folder/editar-producto/editar-producto.page.ts");




const routes = [
    {
        path: '',
        component: _editar_producto_page__WEBPACK_IMPORTED_MODULE_3__["EditarProductoPage"]
    }
];
let EditarProductoPageRoutingModule = class EditarProductoPageRoutingModule {
};
EditarProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditarProductoPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/editar-producto/editar-producto.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/folder/editar-producto/editar-producto.module.ts ***!
  \******************************************************************/
/*! exports provided: EditarProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarProductoPageModule", function() { return EditarProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _editar_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editar-producto-routing.module */ "./src/app/folder/editar-producto/editar-producto-routing.module.ts");
/* harmony import */ var _editar_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editar-producto.page */ "./src/app/folder/editar-producto/editar-producto.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let EditarProductoPageModule = class EditarProductoPageModule {
};
EditarProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _editar_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditarProductoPageRoutingModule"]
        ],
        declarations: [_editar_producto_page__WEBPACK_IMPORTED_MODULE_6__["EditarProductoPage"]]
    })
], EditarProductoPageModule);



/***/ }),

/***/ "./src/app/folder/editar-producto/editar-producto.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/folder/editar-producto/editar-producto.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2VkaXRhci1wcm9kdWN0by9lZGl0YXItcHJvZHVjdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2VkaXRhci1wcm9kdWN0by9lZGl0YXItcHJvZHVjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/editar-producto/editar-producto.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/folder/editar-producto/editar-producto.page.ts ***!
  \****************************************************************/
/*! exports provided: EditarProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditarProductoPage", function() { return EditarProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_models_productos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/productos */ "./src/app/models/productos.ts");
/* harmony import */ var src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/productos.service */ "./src/app/services/productos.service.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/mensaje-error.service */ "./src/app/services/mensaje-error.service.ts");









let EditarProductoPage = class EditarProductoPage {
    constructor(productosService, router, activateRoute, angularFireStorage, loadingController, mensajeErrorService, alertCtrt) {
        this.productosService = productosService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.angularFireStorage = angularFireStorage;
        this.loadingController = loadingController;
        this.mensajeErrorService = mensajeErrorService;
        this.alertCtrt = alertCtrt;
        this.producto = new src_app_models_productos__WEBPACK_IMPORTED_MODULE_3__["Productos"]();
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.idProducto = paramMap.get('idProducto');
            this.productosService.getProducto(paramMap.get('idProducto')).subscribe(res => { this.producto = res; this.image = res.Foto1; this.image1 = res.Foto2; });
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
            this.file0 = event.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.image = reader.result;
            reader.readAsDataURL(this.file0);
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
    UpdateProducto(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.presentLoading("Espere por favor...");
            this.presentLoading("Espere por favor...");
            var precio;
            var titulo;
            var descripcion;
            if (form.value.precio == '') {
                precio = this.producto.Precio;
            }
            else {
                precio = form.value.precio;
            }
            if (form.value.titulo == '') {
                titulo = this.producto.Titulo;
            }
            else {
                titulo = form.value.titulo;
            }
            if (form.value.descripcion == '') {
                descripcion = this.producto.Descripcion;
            }
            else {
                descripcion = form.value.descripcion;
            }
            this.UpdateProductoCompleto(precio, titulo, descripcion, this.image, this.image1);
        });
    }
    UpdateProductoCompleto(precio, titulo, descripcion, downloadURL, downloadURL1) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.producto.Precio = precio;
            this.producto.Foto1 = downloadURL;
            this.producto.Foto2 = downloadURL1;
            this.producto.Titulo = titulo;
            this.producto.Descripcion = descripcion;
            this.productosService.updateProducto(this.idProducto, this.producto).
                then(auth => {
                this.loading.dismiss();
                this.router.navigate(['/mis-productos']);
            }).catch((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.loading.dismiss();
                var mensaje = error.code.split('/')[1];
                const presentarMensaje = this.mensajeErrorService.AuthErrorCodeSpanish(mensaje);
                this.failedAlert(presentarMensaje);
            }));
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
};
EditarProductoPage.ctorParameters = () => [
    { type: src_app_services_productos_service__WEBPACK_IMPORTED_MODULE_4__["ProductosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: src_app_services_mensaje_error_service__WEBPACK_IMPORTED_MODULE_7__["MensajeErrorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
EditarProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-editar-producto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./editar-producto.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/editar-producto/editar-producto.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./editar-producto.page.scss */ "./src/app/folder/editar-producto/editar-producto.page.scss")).default]
    })
], EditarProductoPage);



/***/ })

}]);
//# sourceMappingURL=folder-editar-producto-editar-producto-module.js.map