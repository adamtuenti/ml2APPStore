(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-comentarios-local-comentarios-local-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios-local/comentarios-local.page.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios-local/comentarios-local.page.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header nombre=\"locales\"></app-header>\n\n<ion-content>\n\n  <ion-segment color=\"tertiary\" value=\"comentarios\">\n\n    <ion-segment-button value=\"anuncios\" [routerLink]=\"['/detalle-local',idLocal,idPropietario]\" routerDirection=\"root\">\n      <ion-icon name=\"information-circle-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Datos</ion-label>\n    </ion-segment-button>\n    \n    <ion-segment-button value=\"cartilla\" [routerLink]=\"['/productos-locales',idLocal,idPropietario]\" routerDirection=\"root\">\n      <ion-icon name=\"book-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Cartilla</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"comentarios\" [routerLink]=\"['/comentarios-local',idLocal,idPropietario]\" routerDirection=\"root\">\n      <ion-icon name=\"chatbubbles-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Comentarios</ion-label>\n    </ion-segment-button>\n\n  </ion-segment>\n\n  <ng-container *ngIf=\"!condicion\">\n    <ion-list>\n      <ng-container *ngFor=\"let comentario of comentarios\">\n        <ng-container *ngFor=\"let usuario of usuarios\">\n        <ng-container *ngIf=\"comentario.Empresa == idLocal\">\n          \n        \n          <ion-card *ngIf=\"usuario.id == comentario.Usuario\">\n            \n            <ion-card-header>\n              <ion-item>\n                <ion-avatar>\n                  <img src=\"{{usuario.Foto}}\">\n                </ion-avatar>\n                \n                <ion-label style=\"margin-left: 7.5px;font-weight:bold\">{{usuario.Nombre}} {{usuario.Apellido}}</ion-label>\n                \n    \n                <ion-icon *ngIf = 'idUser == comentario.Usuario' name=\"trash-outline\" slot=\"end\" color='danger'(click)=\"alert(comentario.id)\"></ion-icon>\n              </ion-item>\n    \n            </ion-card-header>\n    \n            <ion-card-content>\n              <ion-item>\n              \n                <label style=\"font-size: 15.5px;color:black;align-items: center;margin-bottom: 5.5px;\">{{comentario.Descripcion}}</label>\n              </ion-item>\n              \n                \n                \n                <ion-item>\n                  <label slot='end'>{{comentario.Fecha | date:'yyyy/MM/dd'}}</label>\n                </ion-item>\n    \n            </ion-card-content>\n            \n            </ion-card>\n          </ng-container>\n        </ng-container>\n  \n\n      </ng-container>\n          \n          \n    </ion-list>\n\n\n  </ng-container>\n\n  <ng-container *ngIf=\"condicion\">\n\n    <div style=\"margin-top: 50px;\" align='center'> \n      <ion-text color=\"medium\">\n  \n        <img src=\"https://firebasestorage.googleapis.com/v0/b/taskyapp01.appspot.com/o/iconos%2Fgrupos.png?alt=media&token=8aa84d63-18b5-424d-9b6a-dfd1075eeb77\" style=\"width: 55%; height:58%;margin:auto;\" alet=\"foto\">\n        \n        <p style=\"font-size: 21px;margin:auto;margin-top:7.5px\">No hay comentarios realizados.</p>\n      </ion-text>  \n    </div>\n  </ng-container>\n\n  \n\n  <ion-fab *ngIf = 'idPropietario != idUser' vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"crearComentario()\">\n     <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n  </ion-content>\n");

/***/ }),

/***/ "./src/app/folder/comentarios-local/comentarios-local-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/folder/comentarios-local/comentarios-local-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: ComentariosLocalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosLocalPageRoutingModule", function() { return ComentariosLocalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _comentarios_local_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comentarios-local.page */ "./src/app/folder/comentarios-local/comentarios-local.page.ts");




const routes = [
    {
        path: '',
        component: _comentarios_local_page__WEBPACK_IMPORTED_MODULE_3__["ComentariosLocalPage"]
    }
];
let ComentariosLocalPageRoutingModule = class ComentariosLocalPageRoutingModule {
};
ComentariosLocalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComentariosLocalPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/comentarios-local/comentarios-local.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/folder/comentarios-local/comentarios-local.module.ts ***!
  \**********************************************************************/
/*! exports provided: ComentariosLocalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosLocalPageModule", function() { return ComentariosLocalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _comentarios_local_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comentarios-local-routing.module */ "./src/app/folder/comentarios-local/comentarios-local-routing.module.ts");
/* harmony import */ var _comentarios_local_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comentarios-local.page */ "./src/app/folder/comentarios-local/comentarios-local.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");








let ComentariosLocalPageModule = class ComentariosLocalPageModule {
};
ComentariosLocalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _comentarios_local_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComentariosLocalPageRoutingModule"]
        ],
        declarations: [_comentarios_local_page__WEBPACK_IMPORTED_MODULE_6__["ComentariosLocalPage"]]
    })
], ComentariosLocalPageModule);



/***/ }),

/***/ "./src/app/folder/comentarios-local/comentarios-local.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/folder/comentarios-local/comentarios-local.page.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2NvbWVudGFyaW9zLWxvY2FsL2NvbWVudGFyaW9zLWxvY2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvbGRlci9jb21lbnRhcmlvcy1sb2NhbC9jb21lbnRhcmlvcy1sb2NhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/folder/comentarios-local/comentarios-local.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/folder/comentarios-local/comentarios-local.page.ts ***!
  \********************************************************************/
/*! exports provided: ComentariosLocalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentariosLocalPage", function() { return ComentariosLocalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_comentarios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/comentarios */ "./src/app/models/comentarios.ts");
/* harmony import */ var src_app_services_comentarios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/comentarios.service */ "./src/app/services/comentarios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_models_usuario__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/usuario */ "./src/app/models/usuario.ts");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/usuario.service */ "./src/app/services/usuario.service.ts");








let ComentariosLocalPage = class ComentariosLocalPage {
    constructor(comentariosService, activateRoute, usuarioService, alertCtrt) {
        this.comentariosService = comentariosService;
        this.activateRoute = activateRoute;
        this.usuarioService = usuarioService;
        this.alertCtrt = alertCtrt;
        this.comentarios = [];
        this.comentario = new src_app_models_comentarios__WEBPACK_IMPORTED_MODULE_2__["Comentarios"]();
        this.user = new src_app_models_usuario__WEBPACK_IMPORTED_MODULE_6__["Usuarios"]();
        this.usuarios = [];
    }
    ngOnInit() {
        this.activateRoute.paramMap.subscribe(paramMap => {
            this.idLocal = paramMap.get('idLocal');
            this.idPropietario = paramMap.get('idPropietario');
            this.comentariosService.getComentarios().subscribe(res => { this.comentarios = res; this.condicion = this.getDatos(); });
            this.usuarioService.getUsuario(localStorage.getItem('userId')).subscribe(res => { this.user = res; });
            this.idUser = localStorage.getItem('userId');
            this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
        });
    }
    getDatos() {
        for (let i = 0; i < this.comentarios.length; i++) {
            if (this.comentarios[i].Empresa == this.idLocal) {
                return false;
            }
        }
        return true;
    }
    alert(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "¿Desea eliminar este comentario?",
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            //console.log('Confirm Cancel: blah');
                        }
                    },
                    {
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
        this.comentariosService.removeComentario(id);
    }
    crearComentario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                //header: 'Agregar comentario:',
                message: 'Agregar un comentario',
                inputs: [
                    {
                        name: 'comentario',
                        placeholder: 'Comentario...',
                        type: 'text'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            if (data.curso != "") {
                                this.agregarComentario(data.comentario);
                            }
                            else if (data.curso == "") {
                                //this.failedAlert("El campo email es requerido");
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    agregarComentario(comentario) {
        var fechaActual = new Date();
        this.comentario.Empresa = this.idLocal;
        this.comentario.Usuario = this.idUser;
        this.comentario.Descripcion = comentario;
        this.comentario.Fecha = fechaActual.toString();
        this.comentariosService.addComentario(this.comentario);
    }
};
ComentariosLocalPage.ctorParameters = () => [
    { type: src_app_services_comentarios_service__WEBPACK_IMPORTED_MODULE_3__["ComentariosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ComentariosLocalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comentarios-local',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./comentarios-local.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/comentarios-local/comentarios-local.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./comentarios-local.page.scss */ "./src/app/folder/comentarios-local/comentarios-local.page.scss")).default]
    })
], ComentariosLocalPage);



/***/ })

}]);
//# sourceMappingURL=folder-comentarios-local-comentarios-local-module.js.map