(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-servicios-servicios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/servicios/servicios.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/servicios/servicios.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header nombre=\"categorias\"></app-header>\n\n<ion-content>\n\n  <ion-segment color=\"tertiary\" value=\"servicios\">\n\n    \n\n    <ion-segment-button value=\"productos\" [routerLink]=\"['/productos-todos']\" >\n      <ion-icon name=\"gift-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Productos</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"categorias\" [routerLink]=\"['/categorias']\" >\n      <ion-icon name=\"list-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Categorias</ion-label>\n    </ion-segment-button>\n\n    <ion-segment-button value=\"servicios\" [routerLink]=\"['/servicios']\">\n      <ion-icon name=\"rocket-outline\" size=\"large\"></ion-icon> <ion-label style=\"font-size: 11px;\">Servicios</ion-label>\n    </ion-segment-button>\n\n  </ion-segment>\n\n  <ion-searchbar\n    color=\"light\" \n    placeholder = \"Buscar servicio...\"\n    animated\n    (ionChange)=\"buscar($event)\">\n  </ion-searchbar>\n\n  <ion-list *ngFor=\"let servicio of servicios | filtroServicios: textoBuscar\">\n    \n      <ion-card  *ngIf = 'servicio.Visibilidad'>\n        <ion-item (click)='aumentarVisita(servicio.id, servicio)'>\n          <ion-avatar slot=\"start\" style=\"height: 50px;width: 50px;margin-right: 8.5px;\" >\n            <img src=\"{{servicio.Foto}}\">\n          </ion-avatar> \n          <ion-label style=\"font-size: 17.2px;\">{{servicio.Titulo}}</ion-label>\n  \n\n        </ion-item>\n\n        <ion-item *ngIf=\"servicio.Usuario == idUser\">\n          <ion-icon   name=\"trash-outline\" slot='end' color='danger'(click)=\"alert(servicio.id)\"></ion-icon>\n\n        </ion-item>\n        \n        \n  \n          \n  \n      </ion-card>\n      \n        \n\n      \n\n    \n    \n\n  </ion-list>\n\n\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [routerLink]=\"['/crear-servicio']\">\n    <ion-icon name=\"add-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/folder/servicios/servicios-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/folder/servicios/servicios-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ServiciosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPageRoutingModule", function() { return ServiciosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicios.page */ "./src/app/folder/servicios/servicios.page.ts");




const routes = [
    {
        path: '',
        component: _servicios_page__WEBPACK_IMPORTED_MODULE_3__["ServiciosPage"]
    }
];
let ServiciosPageRoutingModule = class ServiciosPageRoutingModule {
};
ServiciosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ServiciosPageRoutingModule);



/***/ }),

/***/ "./src/app/folder/servicios/servicios.module.ts":
/*!******************************************************!*\
  !*** ./src/app/folder/servicios/servicios.module.ts ***!
  \******************************************************/
/*! exports provided: ServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPageModule", function() { return ServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./servicios-routing.module */ "./src/app/folder/servicios/servicios-routing.module.ts");
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicios.page */ "./src/app/folder/servicios/servicios.page.ts");
/* harmony import */ var src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/folder/components/components.module */ "./src/app/folder/components/components.module.ts");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");









let ServiciosPageModule = class ServiciosPageModule {
};
ServiciosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_folder_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__["ServiciosPageRoutingModule"]
        ],
        declarations: [_servicios_page__WEBPACK_IMPORTED_MODULE_6__["ServiciosPage"]]
    })
], ServiciosPageModule);



/***/ }),

/***/ "./src/app/folder/servicios/servicios.page.scss":
/*!******************************************************!*\
  !*** ./src/app/folder/servicios/servicios.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color:#ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL3NlcnZpY2lvcy9zZXJ2aWNpb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL3NlcnZpY2lvcy9zZXJ2aWNpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/folder/servicios/servicios.page.ts":
/*!****************************************************!*\
  !*** ./src/app/folder/servicios/servicios.page.ts ***!
  \****************************************************/
/*! exports provided: ServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPage", function() { return ServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/servicios.service */ "./src/app/services/servicios.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let ServiciosPage = class ServiciosPage {
    constructor(router, servicioService, activateRoute, alertCtrt) {
        this.router = router;
        this.servicioService = servicioService;
        this.activateRoute = activateRoute;
        this.alertCtrt = alertCtrt;
        this.servicios = [];
        this.textoBuscar = '';
    }
    ngOnInit() {
        this.servicioService.getServicios().subscribe(res => { this.servicios = res; this.shuffle(this.servicios); });
        this.idUser = localStorage.getItem('userId');
    }
    buscar(event) {
        const texto = event.target.value;
        this.textoBuscar = texto;
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
    aumentarVisita(id, servicios) {
        servicios.Visitas = servicios.Visitas + 1;
        this.servicioService.updateServicio(id, servicios);
        this.router.navigate(['/servicio-detalle', servicios.id, servicios.Usuario]);
    }
    alert(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrt.create({
                cssClass: 'my-custom-class',
                header: "¿Seguro que desea eliminar?",
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
        this.servicioService.removeServicio(id);
    }
};
ServiciosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_servicios_service__WEBPACK_IMPORTED_MODULE_2__["ServiciosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ServiciosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./servicios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/servicios/servicios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./servicios.page.scss */ "./src/app/folder/servicios/servicios.page.scss")).default]
    })
], ServiciosPage);



/***/ })

}]);
//# sourceMappingURL=folder-servicios-servicios-module.js.map